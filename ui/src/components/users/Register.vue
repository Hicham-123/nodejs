<template>
  <div class="container">
    <h1>Inscription</h1>
    <form @submit.prevent="submit">
      <label for="fname">Nom</label>
      <input type="text" id="fname" name="nom" placeholder="Votre nom.." v-model="user.nom" />

      <label for="lname">Prénom</label>
      <input type="text" id="lname" name="prenom" placeholder="Votre prénom.." v-model="user.prenom" />

      <label for="datenaissance">Naissance</label>
      <input type="date" id="datenaissance" name="naissance" placeholder="Votre date de naissance.."
        v-model="user.naissance" />

      <label for="femail">Email</label>
      <input type="text" id="femail" name="email" placeholder="Votre email.." v-model="user.email" />

      <label for="lpwd">Mot de Passe</label>
      <input type="password" id="lpwd" name="mot_de_passe" placeholder="Votre mot de passe.."
        v-model="user.mot_de_passe" />

      <input type="submit" value="inscrire" />
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import {useRouter} from "vue-router";
import { useUserStore } from '../../stores/userStore';

const router = useRouter();

const user = reactive({
  nom: "",
  prenom: "",
  naissance: "",
  email: "",
  mot_de_passe: "",

})

const store = useUserStore()

const submit = function () {
  store.registerAUser({ nom: user.nom, prenom: user.prenom, naissance: user.naissance, mot_de_passe: user.mot_de_passe, email: user.email })
    .then(res => {
      if (typeof (res) != "undefined") {
        router.push("/login");
      }else{
        alert("error");
      }
    })
    .catch(err => {
      console.log('Erreur', err)
    })
}

</script>


<style scoped>
form {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

input,
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: black;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

label,
h1 {
  color: black;
}

.container {
  border-radius: 5px;
  padding: 20px;
}
</style>