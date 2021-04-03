<template>
<div class="change-password">
    <div class="container-fluid">
        <div class="container">
              <div class="alert alert-success" role="alert" v-if="modified">
                {{ modified }}
                <button type="button" class="btn-close" v-on:click="modified = ''" aria-label="Close"></button>
            </div>
            <div class="alert alert-danger" role="alert" v-if="error">
                {{ error }}
                <button type="button" class="btn-close" v-on:click="error = ''" aria-label="Close"></button>
            </div>
            <div class="row">
                <div class="col-lg-2 mx-lg-4 border border-dark shadow rounded">
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
                <div class="col-lg-8 mt-5 shadow rouded">
                    <div class="row">
                        <div class="col-12 text-center mb-3">
                            <h2 class="fw-bold">Changer mon mot de passe</h2>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="passwordFormer" class="form-label">Votre ancien mot de passe</label>
                                <input type="password" class="form-control" id="passwordFormer" v-model="passwordFormer">
                        </div>
                        <div class="col-12 mb-3">
                            <label for="passwordNew" class="form-label">Votre nouveau mot de passe</label>
                                <input type="password" class="form-control" id="passwordNew" v-model="passwordNew">
                        </div>
                        <div class="col-12 mb-3">
                            <label for="passwordComfirmation" class="form-label">Comfirmer votre nouveau mot de passe</label>
                                <input type="password" class="form-control" id="passwordComfirmation" v-model="passwordComfirmation" v-on:blur="changePassword">
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
    <Footer class="footer fixed-lg-bottom shadow mt-5"/>
</div>
</template>





<script>
import Footer from '@/components/Footer.vue';

export default {
    name: 'ChangePassword',
    components:{
        Footer
    },
    data(){
        return{
            iri: this.$store.state.iri_user,
            api: this.$store.state.api,
            modified: '',
            error: '',
            passwordNew: '',
            passwordComfirmation: '',
            passwordFormer: '',
            loading: false,
        }
    },
    methods:{
        changePassword: function(){
            this.loading = true;
            if(this.passwordNew == this.passwordComfirmation){
                fetch(this.api + this.iri, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        password: this.passwordComfirmation
                    }),
                    headers: {
                        'Content-type': 'application/merge-patch+json; charset=UTF-8'
                    }
                })
                .then((response) => {
                    console.log(response);
                    this.passwordNew = '';
                    this.passwordComfirmation = '';
                    this.passwordFormer = '';
                    this.modified = 'Votre mot de passe à bien été modifié !';
                })
                .catch((error) => {
                    console.log(error)
                    this.error = 'Une erreur c\'est produite !';
                })
                .finally(() => {
                    this.loading = false;
                })

            }else{
                console.log('CMP incorrect !')
                this.loading = false;
                this.error = 'Le champ "Confirmation de mot de passe" doit être identique au champ "Nouveau mot de passe"';
            }

        }
    }
}
</script>



<style scoped>
.change-password{
    margin-top: 13%
}
.nav-account
{
    list-style: none;
}
</style>