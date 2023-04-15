<template>
    <div class="container">
      <h1>Connection</h1>
      <form @submit.prevent="submit">
        <label for="femail">Email</label>
        <input
          type="text"
          id="femail"
          name="email"
          placeholder="Votre email.." v-model="user.nom"
        />
  
        <label for="lpwd">Mot de Passe</label>
        <input
          type="password"
          id="lpwd"
          name="password"
          placeholder="Votre mot de passe.." v-model="user.password"
        />
  
        <input type="submit" value="Connecter" />
      </form>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import { reactive,ref, watchEffect } from "vue";
import { useUserStore } from "../../stores/userStore";
const store = useUserStore();
const router = useRouter();

const user = reactive({
    nom: "",
    password: "",
});

const errorNom = ref("");
const errorPassword = ref("");

function submit() {
    if (user.nom == "" || user.nom.length < 3) {
        errorNom.value = "Le nom n'est pas valide";
        return;
    }

    if (user.password == "" || user.password.length < 3) {
        errorPassword.value = "Le mot pas n'est pas conforme";
        return;
    }

    resetErrors();

    store.loginUser({ email: user.nom, mot_de_passe: user.password })
        .then((res) => {
            router.push("/");
        })
        .catch((err) =>console.log("Erreur en chargeant les departements", err));
}

function resetErrors() {
    errorNom.value = errorPassword.value = ""
}

watchEffect(()=>{
	
	if(user.nom===""){
		errorNom.value = ""
		return 
	}
	else if (user.nom !== "" && user.nom.length >= 3) {
        errorNom.value = ""
		return 
    } else{
        errorNom.value = "Le nom n'est pas valide";
	}
	
	
	if (user.password===''){
		errorPassword.value = ""
		return
	}
	else if (user.password !== "" && user.password.length >= 3) {
        errorPassword.value = ""
		return
    } else{
		errorPassword.value = "Le mot pas n'est pas conforme";
	}
	
	

})
</script>

<style scoped>
  form {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  input[type="text"], input[type="password"],
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