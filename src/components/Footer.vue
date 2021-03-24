<template>
<div class="footer row shadow">
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <img :src="require('../assets/logo.png')" alt="logo" class="w-50 mt-5 mb-5">
                </div>
                <div class="col-md-9">
                    <div class="row mt-5 mb-5">
                        <div class="col-md-6 mt-3">
                            <ul class="footer-ul">
                                <li class="footer-li">Mention légal</li>
                                <li class="footer-li">Politique de confidentialité</li>
                                <li class="footer-li">RNGPD</li>
                            </ul>
                        </div>
                        <div class="col-md-6 mt-3">
                            <ul class="footer-ul">
                                <li class="footer-li">Nous contacter</li>
                                <li class="footer-li">Les annonces</li>
                                <li class="footer-li">Mon Dossier immo ?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
.footer{
    background-color: #6076dd;
}
.footer-ul{
list-style: none;
}
.footer-li{
    font-weight: bold;
    font-size: 1.3rem;
    color: #FF914D;
}
</style>