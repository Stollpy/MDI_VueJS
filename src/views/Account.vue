<template>
<div class="account">
    <div class="container-fluid mb-5">
        <div class="container">
            <div class="alert alert-success" role="alert" v-if="modified">
                {{ modified }}
                <button type="button" class="btn-close" v-on:click="modified = null" aria-label="Close"></button>
            </div>
            <div class="alert alert-danger" role="alert" v-if="error">
                {{ error }}
                <button type="button" class="btn-close" v-on:click="error = null" aria-label="Close"></button>
            </div>
            <div class="row">
                <div class="col-lg-2 border border-dark shadow rounded mx-lg-3">
                    <ul class="d-none d-lg-block nav-account mt-3">
                        <li class="fw-bold"><router-link to="/account" class="text-dark">Mon compte</router-link></li>
                        <li class=""><hr class="dropdown-divider"></li>
                        <li class="fw-bold"><router-link to="/account/change-password" class="text-dark">Changer mon mot de passe</router-link></li>
                    </ul>
                    <nav class="d-lg-none navbar navbar-expand navbar-light">
                        <div class="container-fluid">  
                            <div class="navbar" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <router-link to="/account"><a class="nav-link fw-bold" aria-current="page" href="#">Mon compte</a></router-link>
                                    <router-link to="/account/change-password"><a class="nav-link fw-bold" aria-current="page" href="#">Changer mon mot de passe</a></router-link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="col-lg-8 mt-5 mt-lg-0 shadow rounded">
                   <div class="row">
                       <div class="col-12 mb-3 mt-3 text-center">
                           <h2 class="fw-bold">Votre e-mail</h2>
                       </div>
                       <div class="col-12 mb-3">
                            <label for="email" class="form-label">Votre adresse email</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email" v-on:blur="ChangeData">
                       </div>
                       <div class="col-12 mb-3 text-center mt-2" v-if="loading">
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
    <Footer class="footer shadow mt-5"/>
</div>
</template>

<script>
import axios from 'axios';
import Footer from '@/components/Footer.vue';

export default {
    name: "Account",
    components:{
        Footer
    },
    data(){
        return{
            iri: this.$store.state.iri,
            api: this.$store.state.api,
            email:  null,
            modified: '',
            error: '',
            loading: false
        }
    },
    mounted() {
        console.log(this.api + this.iri)
        axios
        .get(this.api + this.iri)
        .then((response) => {
            console.log(response.data);
            console.log(response.data.email)
            this.email = response.data.email
        })
        .catch(function(error){
            console.log(error)
        })
    },
    methods:{
        ChangeData: function(){
            this.loading = true;
            var value = document.getElementById('email').value;
            fetch(this.api + this.iri, {
                method: 'PATCH',
                body: JSON.stringify({
                    email:value,
                }),
                headers: {
                    'Content-type': 'application/merge-patch+json; charset=UTF-8'
                }  
            })
            .then((response) => {
                 if(response.status == 401){
                    this.error = 'Error 401. For biden'
                }else if(response.status !== 200){
                    this.error = 'Error, nothing response'
                    console.log('Erreur status ' + response.status);
                }else{
                    this.modified = 'Vos données ont bien été modifié !';
                }
            })
            .catch((error) => {
                this.error = error
            })
            .finally(() => {
                this.loading = false;
            })
        }
    }
}
</script>

<style scoped>
.account{
    margin-top: 13%
}
.nav-account
{
    list-style: none;
}
@media screen and (min-width: 768px) {
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
}
</style>