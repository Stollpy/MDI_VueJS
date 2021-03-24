<template>
    <div class="login">
        <div class="container-fluid">
            <div class="container">
                <div class="alert alert-danger" role="alert" v-if="error">
                    {{ error }}
                    <button type="button" class="btn-close" v-on:click="error = null" aria-label="Close"></button>
                </div>
                 <div class="alert alert-success" role="alert" v-if="success">
                    {{ success }}
                    <button type="button" class="btn-close" v-on:click="success = null" aria-label="Close"></button>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="row align-item-center justify-content-center mt-5 mb-5 bg-white shadow rounded">
                            <div class="col-12 col-lg-5 my-5 mx-3 shadow rounded">
                                <div class="row">
                                    <div class="col-12">
                                        <h2 class="fw-bold mt-3">Connexion</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <!-- Login -->
                                    <div class="col-12">
                                        <form>
                                            <div class="mb-3">
                                                <label for="loginEmail" class="form-label">Votre email</label>
                                                <input type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp" v-model="email" required>
                                            </div>
                                            <div class="mb-3">
                                                <label for="loginPassword" class="form-label">Votre mot de passe</label>
                                                <input type="password" class="form-control" id="loginPassword" v-model="password" required>
                                            </div>
                                            <btn type="submit" v-on:click="login" class="btn btn-outline-primary mb-3">
                                                <span v-if="loading == false">Connexion</span>
                                                <div class="spinner-border text-primary" v-if="loading == true" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                            </btn>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- Create account -->
                            <div class="col-12 col-lg-5 my-5 mx-3 rounded shadow">
                                  <div class="row">
                                    <div class="col-12">
                                        <h2 class="fw-bold mt-3">Créer un compte</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <form>
                                            <div class="mb-3">
                                                <label for="accountEmail" class="form-label">Votre email</label>
                                                <input type="email" class="form-control" id="accountEmail" aria-describedby="emailHelp">
                                                <div id="emailHelp" class="form-text">Nous ne communiqeront jamais vos données sensible.</div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="accountPassword" class="form-label">Votre mot de passe</label>
                                                <input type="password" class="form-control" id="accountPassword">
                                            </div>
                                            <div class="mb-3">
                                                <label for="accountComfirmPassword" class="form-label">Comfirmer votre mot de passe</label>
                                                <input type="password" class="form-control" id="accountComfirmPassword">
                                            </div>
                                            <div class="mb-3 form-check">
                                                <input type="checkbox" class="form-check-input" id="accountCheck">
                                                <label class="form-text" for="accountCheck">Je ne souhaite pas recevoir de mail de la part de mon-dossier-immo</label>
                                            </div>
                                            <button type="submit" class="btn btn-outline-primary mb-3">Créer mon compte</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer class="shadow"/>
    </div>
</template>

<script>
import axios from 'axios';
import Footer from '@/components/Footer.vue';

export default {
    name:'Login',
    components:{
        Footer
    },
    data(){
        return {
            email: '',
            password: '',
            error: '',
            loading: false,
            success: '',
        }
    },

    methods: {
        login: function(e){  
            e.preventDefault;
            this.loading = true;
            console.log(this.email);
            console.log(this.password);  
            axios
            .post('https://localhost:8000/api/login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                this.email = '';
                this.password = '';
                sessionStorage.setItem('iri', response.data.location)
                this.$store.commit('setIri', sessionStorage.getItem('iri'))
                this.success = 'Vous êtes désormais connectez !';
            })
            .catch(error => {
                this.error = 'Invidalid credentials'
            }).finally(() => {
                this.loading = false;
            })
        }
    }
}
</script>

<style scoped>
.container-fluid{
    background: linear-gradient(#FF914D, #FFC300)
}
</style>