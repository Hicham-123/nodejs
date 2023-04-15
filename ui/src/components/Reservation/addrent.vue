<template>
    <div class="register-photo">
  <div class="form-container">
    <div class="image-holder" :style="{'background-image':'url(/image/'+car?.id+'.jpg)'}" ></div>
    <form  @submit.prevent="submit">
      <h2 class="text-center"><strong>Rent</strong> it now</h2>
      <h2>selectioner la date</h2>
      <h5>Debut</h5>
      <div class="form-group mb-3"><input class="form-control" type="date" name="dd" v-model="locationinfo.date_debut"></div>
      <h5>fin</h5>
      <div class="form-group mb-3"><input class="form-control" type="date" name="df" v-model="locationinfo.date_fin"></div>
      <h5>verifier la disponibilite</h5>
      <div class="form-group mb-3"><input class="form-control btn btn-success" type="button" value="Check" @click="chechava()"></div>
      <p>le prix:  {{showimgo.price}}$</p>
      <p>la disponibilite: {{showimgo.disponibilite}}</p>
      <div class="form-group w-100 mb-2"><button class="btn btn-success btn-block w-100" type="submit">Reserver</button></div>
    </form>
  </div>
</div>
</template>

<script setup>
import { useVoitureStore } from "../../stores/voitureStore";

import { useLocationStore } from "../../stores/locationStore";

import { useUserStore } from "../../stores/userStore";

import { computed,reactive, onBeforeMount } from "vue";

import { useRoute } from "vue-router";

import { useRouter } from "vue-router";

const router = useRouter();

const location = useLocationStore();
const store = useVoitureStore();
const user = useUserStore();
const car = computed(() => store.car);
const route = useRoute();


const locationinfo = reactive({
    date_fin: null,
    date_debut: null,
    id_voiture: user.authUser
});

const showimgo = reactive({
    disponibilite: "",
    price: 0,
});

const chechava =()=>{
    var data = {date_fin:locationinfo.date_fin,date_debut:locationinfo.date_debut,id_voiture:route.params.id,userid:user.authUser};
    console.log(user.token)
    location.CheckLocation(user.token,data)
        .then((res) => {
            if(res.data == "ok")
            {
                showimgo.disponibilite = "disponible";
            }else{
                showimgo.disponibilite = "pas disponible";
            }
        })
        .catch((err) =>showimgo.disponibilite = "pas disponible");

    location.GetPrice(user.token,data)
        .then((res) => {
            showimgo.price = res.data.price;
        })
        .catch((err) =>console.log("Erreur en chargeant le prix", err));
}

function submit() {
    var data = {date_fin:locationinfo.date_fin,date_debut:locationinfo.date_debut,id_voiture:route.params.id,userid:user.authUser};
    
    location.AddLocation(user.token,data)
        .then((res) => {
            console.log(res)
            router.push("/");
        })
        .catch((err) =>console.log("Erreur en chargeant les departements", err));
}


onBeforeMount(() => {
    if (user.token == null) {
        
        router.push(`/login`)
    }
    if (route.params.id) {
        store
            .carbyid(route.params.id)
            .then((res) => console.log("car choisi"))
            .catch((err) =>
                console.log("Erreur en lisant le departement", err)
            );
    }else{
        router.push(`/`)
    }
});

</script>

<style scoped>

.register-photo {
  background: #f1f7fc;
  padding: 80px 0;
}

.register-photo .image-holder {
  display: table-cell;
  width: auto;
  background-size: cover;
}

.register-photo .form-container {
  display: table;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

.register-photo form {
  display: table-cell;
  width: 400px;
  background-color: #ffffff;
  padding: 40px 60px;
  color: #505e6c;
}

@media (max-width: 991px) {
  .register-photo form {
    padding: 40px;
  }
}

.register-photo form h2 {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 30px;
}

.register-photo form .form-control {
  background: transparent;
  border: none;
  border-bottom: 1px solid #dfe7f1;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: inherit;
  text-indent: 0px;
  height: 40px;
}

.register-photo form .form-check {
  font-size: 13px;
  line-height: 20px;
}

.register-photo form .btn-primary {
  background: green;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 35px;
  text-shadow: none;
  outline: none !important;
}

.register-photo form .btn-primary:hover,
.register-photo form .btn-primary:active {
  background: green;
}

.register-photo form .btn-primary:active {
  transform: translateY(1px);
}

.register-photo form .already {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
}

</style>