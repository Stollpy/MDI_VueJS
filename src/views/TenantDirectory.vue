<template>
<div class="tenant-directory">
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-12" v-if="id_identity !== null && id_individual !== null">
                    <FormIdentity :id_individual="id_individual" :id_category="id_identity" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import FormIdentity from "@/components/FormIdentity.vue";

export default {
    name:'TenantDirectory',
    components:{
        FormIdentity,
    },
    data(){
        return{
            api: this.$store.state.api,
            iri_individual: this.$store.state.iri_individual,
            id_identity: null,
            id_individual: null,
        }
    },
    mounted() {
        axios
        .get(this.api + '/api/individual_data_categories?code=identity')
        .then((response) => {
            this.id_identity = response.data['hydra:member'][0]['id'];
        })
        .catch((error) => {
            console.log(error)
        })

        axios
        .get(this.api + this.iri_individual)
        .then((response) => {
            this.id_individual = response.data.id;
        })
        .catch((error) => {
            console.log(error)
        })

    }
}
</script>

<style scoped>

</style>