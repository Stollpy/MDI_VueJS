<template>
<div class="tenant-directory">
    <div class="container-fluid">
        <div class="container">
            <div class="row mt-5 mb-5">
                <div class="col-12 text-center">
                    <nav class="navbar navbar-expand navbar-light bg-transparent shadow border border-dark">
                        <div class="container-fluid">
                            <div id="navbarNav">
                                <ul class="navbar-nav p-3">
                                    <li class="nav-item fw-bold mx-3">
                                        <router-link to="/account" class="text-dark">Mon identité / domiciliation</router-link>
                                    </li>
                                    <li class="nav-item fw-bold mx-3">
                                        <router-link to="/account" class="text-dark">Mes documents</router-link>
                                    </li>
                                    <li class="nav-item fw-bold mx-3">
                                        <router-link to="/account" class="text-dark">Mes revenues</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row mt-3 mb-3">
                <div class="col-12 text-center mb-3">
                    <h1 class="fw-bold title-form-identity">Vos informations d'identité</h1>
                </div>
                <div class="col-12">
                    <FormSkeleton v-if="skeleton"/>
                    <Form 
                        :id_individual="id_individual" 
                        :id_category="id_identity" 
                        v-if="id_individual !== null && id_identity !== null"
                    />
                </div>
            </div>
            <div class="row mt-5 mb-5">
                <div class="col-12 text-center mb-3">
                    <h1 class="fw-bold title-form-identity">Vos informations de domiciliation</h1>
                </div>
                <div class="col-12" >
                    <FormSkeleton v-if="skeleton"/>
                    <Form 
                        :id_individual="id_individual" 
                        :id_category="id_domiciliation" 
                        v-if="id_individual !== null && id_domiciliation !== null"
                    />
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import axios from "axios";
import Form from "@/components/Form/Form.vue";
import FormSkeleton from "@/components/Form/FormSkeleton.vue";
import Footer from "@/components/Footer.vue";
import ChartDoughnut from "@/components/ChartDoughnut.vue";

export default {
    name:'TenantDirectory',
    components:{
        Form,
        FormSkeleton,
        Footer,
        ChartDoughnut,
    },
    data(){
        return{
            api: this.$store.state.api,
            iri_individual: this.$store.state.iri_individual,
            id_identity: null,
            id_individual: null,
            id_domiciliation: null,
            skeleton: true,
            dataChartIdentity: null,
            optionChartIdentity: null,
        }
    },
    mounted() {     
        this.idIdentity();
        this.idDomiciliation();   
        this.idIndividual();
    },
    methods: {
        /**
        * Récupération id
        */
        idIndividual(){
            axios
            .get(this.api + this.iri_individual)
            .then((response) => {
                this.skeleton = false;
                this.id_individual = response.data.id;

                /**
                 * Lancement des graphiques de
                 * progression de dossier immo
                 */
                this.chartIdentity();
            })
            .catch((error) => {
                console.log(error)
            })
        },
        /**
        * Récupération id identity
        */
        idIdentity(){
            axios
            .get(this.api + '/api/individual_data_categories?code=identity')
            .then((response) => {
                this.id_identity = response.data['hydra:member'][0]['id'];
            })
            .catch((error) => {
                console.log(error)
            })
        },
        /**
        * Récupération id domiciliation
         */
        idDomiciliation(){
            axios
            .get(this.api + '/api/individual_data_categories?code=domiciliation')
            .then((response) => {
                this.id_domiciliation = response.data['hydra:member'][0]['id'];
            })
            .catch((error) => {
                console.log(error)
            })
        },
        /**
         * Création de l'objet data & option pour
         * le graphique identity
         */
        chartIdentity(){
            axios
            .get(this.api + `/api/individual_datas?individual=${this.id_individual}&category=${this.id_identity}`)
            .then((response) => {
                var data = response.data['hydra:member'];
                var dataLength = data.length;
                var chartIdentityLength = 6 - dataLength;
                this.dataChartIdentity = {
                    labels: ['Accomplit', 'Non accomplie'],
                    datasets: [
                        {
                            label: 'Accomplissement',
                            data: [dataLength, chartIdentityLength],
                            backgroundColor: ['#38FF6A', '#C1C1C1']
                        }
                    ]
                };
                this.optionChartIdentity = {
                    responsive: false
                };

            })
        },
    }
}
</script>

<style scoped>
.title-form-identity{
    color: #FF914D;
}
</style>