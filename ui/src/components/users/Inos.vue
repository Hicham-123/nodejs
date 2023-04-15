<template>
    <div class="centre">
<p>nom : {{user.me.nom}}</p>
<p>prenom : {{user.me.prenom}}</p>
<p>date de naissance : {{user.me.naissance}}</p>
<p>email : {{user.me.email}}</p>
</div>
</template>

<script setup>
import { useUserStore } from "../../stores/userStore";
const user = useUserStore();
user.getAllUser();

</script>

<style>
.centre{
    padding-top: 20%;
    text-align: center;
}
</style>