
<template>

        <nav id="header">
    <RouterLink to="/">Home</RouterLink>
    <div class="flex-start" v-if="userStore.token == null">
      <RouterLink to="/login">Connection</RouterLink>
      <RouterLink to="/register">Inscription</RouterLink>
    </div>
    <div class="flex-end" v-else>
      <RouterLink to="/myrent">Mes reservation</RouterLink>
      <RouterLink to="/me">Mes information</RouterLink>
      <a class="btn" @click="logout">deconnecter</a>
    </div>
  </nav>
  
        <RouterView />

</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "./stores/userStore";
import { useVoitureStore } from "./stores/voitureStore";
import { useLocationStore } from "./stores/locationStore";

import { useRouter } from "vue-router";


const userStore = useUserStore();
const voitureStore = useVoitureStore();
const locationStore = useLocationStore();
const router = useRouter();

function logout() {
  voitureStore.Delete()
  locationStore.Delete()
    userStore
        .logout()
        .then((res) => {
            
            router.push("/login");
        })
        .catch((err) => console.log(err));
}

</script>

<style scoped>
a,.btn {
  background: black;
  color: #ffffff;
  display: block;
  font: bold 12px/20px sans-serif;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

a:hover,.btn:hover {
  background: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
}

#header {
  background: black;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.flex-end{
  display: flex;
  justify-content: flex-end;
}
.flex-start{
  display: flex;
  justify-content: flex-start;
}
section {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
