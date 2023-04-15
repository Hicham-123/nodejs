<template>
    <section id="car-detail">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

        <div class="container">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">{{ car?.nom }} {{ car?.annee }}</h3>
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-6">
                            <div class="white-box text-center">
                                <img :src="`/image/${car?.id}.jpg`" class="img-responsive card">
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6">
                            <h4 class="box-title mt-5">Car description</h4>
                            <p>{{ car?.description }} </p>
                            <br>

                            <a><button class="btn btn-primary btn-rounded" @click="goToDetails(car.id)">reserve</button></a>
                      
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="box-title mt-5">type of car</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-product">
                                    <tbody>
                                        <tr>
                                            <td width="390">Marque</td>
                                            <td>{{ car?.type.marque }}</td>
                                        </tr>
                                        <tr>
                                            <td>Model</td>
                                            <td>{{ car?.type.model }}</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td>{{ car?.type.description }}</td>
                                        </tr>
                                        <tr>
                                            <td>Year</td>
                                            <td>{{ car?.annee }}</td>
                                        </tr>
                                        <tr>
                                            <td>Succursale</td>
                                            <td>{{ car?.succ.nom }} a {{ car?.succ.Ville }}</td>
                                        </tr>
                                        <tr>
                                            <td>About Succursale</td>
                                            <td>{{ car?.succ.description }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="box-title mt-5">price</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-product">
                                    <tbody>
                                        <tr>
                                            <td width="390">Day</td>
                                            <td>{{ car?.prix.prix_par_jour }}</td>
                                        </tr>
                                        <tr>
                                            <td>Week</td>
                                            <td>{{ car?.prix.prix_par_semain }}</td>
                                        </tr>
                                        <tr>
                                            <td>Month</td>
                                            <td>{{ car?.prix.prix_par_mois }}</td>
                                        </tr>
                                        <tr>
                                            <td>Year</td>
                                            <td>{{ car?.prix.prix_par_annee }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useVoitureStore } from "../../stores/voitureStore";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

import { useRouter } from "vue-router";
const router = useRouter();

const store = useVoitureStore();
const car = computed(() => store.car);
const route = useRoute();

const goToDetails=(val)=>{
    router.push(`/rent/${val}`)

}
onBeforeMount(() => {
    if (route.params.id) {
        store
            .carbyid(route.params.id)
            .then((res) => console.log("car choisi"))
            .catch((err) =>
                console.log("Erreur en lisant le departement", err)
            );
    }
});


</script>

<style scoped>

.card {
    background-size: cover;
    background-position: 0 0;
 
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    padding: 1rem;
    width: 100%;
    text-align: center;
  background-color: whitesmoke;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
}
/* car-detail page */
#car-detail {
    margin-top: 60px;
}

.card {
    margin-bottom: 30px;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: 0;
}

.card .card-subtitle {
    font-weight: 300;
    margin-bottom: 10px;
    color: #8898aa;
}

.table-product.table-striped tbody tr:nth-of-type(odd) {
    background-color: #f3f8fa !important
}

.table-product td {
    border-top: 0px solid #dee2e6 !important;
    color: #728299 !important;
}

/* car-detail page */
</style>