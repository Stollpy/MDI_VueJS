<template>
<div class="form">
    <div class="row">
        <div class="col-12">
            <div class="row shadow rounded" v-if="formData !== [] ">
                <div class="col-12 mt-3 text-center" v-if="loading">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div class="alert alert-success alert-dismissible fade show mt-3 ml-3 mr-3" role="alert" v-if="modified">
                    <p class="fw-bold">Votre donnée a bien été modifié !</p>
                </div>
                <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
                    <p class="fw-bold">Une erreur est survenue, veuillez ré-essayer ultérieurement.</p>
                </div>
                <div class="col-12 col-md-6 my-3" :key="data.index" v-for="data in formData">
                    <label :for="data.code" class="form-label"> Votre {{ data.label }}</label>
                    <div class="input-group">
                        <input :type="data.type" class="form-control" :id="data.code" :data-id="data.id" v-model="data.data" @blur="patchData($event)" disabled >
                        <button class="btn btn-outline-primary input-group-text edit-button" @click="editButton">
                            <svg :data-input="data.code" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5271FF" class="edit-icon bi bi-pencil-square" viewBox="0 0 16 16">
                                <path :data-input="data.code" d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path :data-input="data.code" fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <FormSkeleton v-if="skeleton"/>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import FormSkeleton from '@/components/Form/FormSkeleton.vue';

export default {
    name:'Form',
    components:{
        FormSkeleton,
    },
    props: {
        id_individual: Number,
        id_category: Number,
    },
    data(){
        return{
            api: this.$store.state.api,
            formData: [],
            modified: false,
            error: false,
            loading: false,
            skeleton: true,
        }
    },
    mounted() {
        this.dataForm();
    },
    methods:{
        dataForm(){
            var datas = [];
            axios
            .get(this.api + '/api/individual_datas?individual='+this.id_individual+'&category='+this.id_category)
            .then((response) => {
                datas = response.data['hydra:member'];
                for(var i = 0; i < datas.length; i++){
                    if(datas[i]['data'] !== undefined && datas[i]['data'] !== null) {
                        this.formData.push({
                            label: datas[i]['profilModelData']['label'],
                            type: datas[i]['profilModelData']['type'],
                            code: datas[i]['profilModelData']['code'],
                            data: this.dataFormate(datas[i]['profilModelData']['type'], datas[i]['data']),
                            id: datas[i]['id']

                        })
                    }else{
                        this.formData.push({
                            label: datas[i]['profilModelData']['label'],
                            type: datas[i]['profilModelData']['type'],
                            code: datas[i]['profilModelData']['code'],
                            id: datas[i]['id']
                        
                        })
                    }
                }
                this.skeleton = false;
            })
            .catch((error) => {
                console.log(error)
            })

        },
        dataFormate: function(type, data){
            if(type == 'date' || type == 'text'){
                return data
            }else if(type == 'tel' || type == 'number' || type == 'country'){
                return parseInt(data);
            }
        },

        patchData: function(event){
            this.loading = true;
            if(this.modified !== false){
                this.modified = false;
            }
            var dataId = event.target.getAttribute('data-id');
            console.log(dataId);
            var value = event.target.value;
            fetch(`${this.api}/api/individual_datas/${dataId}`, {
                method: 'patch',
                body: JSON.stringify({
                    data: value,
                }),
                headers: {
                    'Content-type': 'application/merge-patch+json; charset=UTF-8'
                }  
            })
            .then((response) =>{
                this.loading = false;
                this.modified = true;
                setTimeout(() =>{
                    this.modified = false;
                }, 3000)
            })
            .catch((error) =>{
                this.loading = false;
                this.error = true;
                setTimeout(() =>{
                    this.error = false;
                }, 3000)
            })
        },
         editButton: function(event){
            var inputId = event.target.getAttribute('data-input');
            console.log(event.target)
            var input = document.getElementById(inputId);
            console.log(input)
            if(input.disabled == false){
                input.disabled = true;
            }else{
                input.disabled = false; 
            }           
        }
    }
}
</script>

<style scoped>
.edit-icon:hover{
    fill: #ffffff;
}
</style>