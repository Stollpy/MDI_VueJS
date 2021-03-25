<template>
<div class="home">
  <!-- Illustration -->
    <div class="row">
      <div class="col-12">
        <img :src="require('../assets/home-mdi.png')" alt="Mon dossier immo" class="w-100 shadow">
      </div>
    </div>

  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row mt-5">
            <div class="col-12 text-center">
                <h2 class="title-card-mdi">Faire un doissier claires, complet et coherent avec mon dossier immo</h2>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card shadow text-center p-3 annimation-card-mdi" style="width: 100%;">
                <div class="row">
                  <div class="col-12">
                    <img :src="require('../assets/Check.png')" class="card-img-top w-75 my-2" alt="Simplicité de dossier">
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold mb-3">Un dossier plus simple</h5>
                  <p class="card-text">
                    Un dossier incomplet rime souvent avec appartement refusé, nous vous guidons à chaque étape pour 
                    construire un dossier de location parfait et conforme à la legislation.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card shadow text-center p-3 annimation-card-mdi" style="width: 100%;">
                <div class="row">
                  <div class="col-12">
                    <img :src="require('../assets/Winner.png')" class="card-img-top w-75 my-2" alt="Simplicité de dossier">
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold mb-3">Faites la différence</h5>
                  <p class="card-text">
                    Faites la différence Rassurer votre propriétaire grâce au standard « 3C » et augmentez de 24% vos 
                    chances d’obtenir une visite pour l’appartement de vos rêves.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card shadow text-center p-3 annimation-card-mdi" style="width: 100%;">
                <div class="row">
                  <div class="col-12">
                    <img :src="require('../assets/Cloud.png')" class="card-img-top w-75 my-2" alt="Simplicité de dossier">
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold mb-3">100% en ligne</h5>
                  <p class="card-text">
                    100% en ligne Avec MON DOSSIER IMMO tout se passe en ligne et en 3 minutes : fini la paperasse. 
                    Vous pouvez envoyer aux propriétaires en un clic par mail ou par SMS !
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card shadow text-center p-3 annimation-card-mdi" style="width: 100%;">
                <div class="row">
                  <div class="col-12">
                    <img :src="require('../assets/Security.png')" class="card-img-top w-75 my-2" alt="Simplicité de dossier">
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold mb-3">Vos données sont protégées</h5>
                  <p class="card-text">
                    Vos données protégées Nous avons à coeur la protections de vos données. 
                    Elles ne seront jamais communiquées sans votre accord express.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- Row Explicative -->
    <div class="row mb-5 shadow mt-5 home-help-mdi">
      <div class="col-12">
        <div class="row mt-5">
          <div class="col-lg-6 mb-3">
            <div class="row mt-5 row-help-mdi">
              <div class="col-12 text-center">
                <h2 class="title-help-mdi">Mon Dossier Immo qu'est ce que c'est ?</h2>
              </div>
              <div class="col-12 text-center">
                <p class="text-help-mdi">
                  Mon dossier immo vous permet de créer rapidemement et efficacement votre dossier de location et ainsi envoyé un 
                  lien au propiétaire ou à l’agence de vente/location du bien que vous souhaitez acquérir ! Pour créer un doissier 
                  rapidement vous devrez vous munir d’infomration personnelle relative à une demande de location. 
                  Le reste sera généré automatiquement !
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-3">
            <img :src="require('../assets/illu-mdi-home.png')" alt="illustration mon dossier immo" class="w-100">
          </div>
        </div>
      </div>
    </div>

  <!-- Row accompagnement -->
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="fw-bold title-procesus-mdi">MON DOSSIER IMMO vous accompagne tout au long du processus</h2>
      </div>
      <div class="col-12">
        <img :src="require('../assets/illu-home-section-3-mdi.png')" alt="Illistration mon dossier immo étape d'accompagnement" class="w-100">
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3 mt-3">
          <div class="card shadow text-center p-3 annimation-card-mdi" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title fw-bold mdi-secondary mb-3">JE CREE MON COMPTE EN 3 MINUTES</h5>
              <p class="card-text">
              Je crée mon compte <span class="fw-bold mdi-secondary">MON DOSSIER IMMO</span> en quelques minutes en ajoutant uniquement les documents demandés par la loi.
              </p>
            </div>
          </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 mt-3">
          <div class="card shadow text-center p-3 annimation-card-mdi" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title fw-bold mdi-secondary mb-3">JE COMPLETE SI NECESSAIRE</h5>
              <p class="card-text">
              <span class="fw-bold mdi-secondary">MON DOSSIER IMMO</span> vous créer un dossier Clair, Complet et Cohérent pour vous aider à mettre toutes les chances de votre coté.
              </p>
            </div>
          </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 mt-3">
          <div class="card shadow text-center p-3 annimation-card-mdi" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title mdi-secondary fw-bold mb-3">J’ENVOIE MON LIEN AUX PROPRIETAIRES </h5>
              <p class="card-text">
                Une fois mon dossier générer par <span class="fw-bold mdi-secondary">MON DOSSIER IMMO</span>, je peux l'envoyer à n'importe quel propriétaire par internet ou par sms.
              </p>
            </div>
          </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 mt-3">
          <div class="card shadow text-center p-3 annimation-card-mdi" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title mdi-secondary fw-bold mb-3">TOUTE LES CHANCES SONT DE MON CÔTÉ !</h5>
              <p class="card-text">
                Grâce à <span class="fw-bold mdi-secondary">MON DOSSIER IMMO</span> je mets toutes les chances de mon coté pour obtenir l'appartement/mainson de mes rêves
              </p>
            </div>
          </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
export default {
  name: 'Home',
  components: {
    Footer,
  }
}
</script>

<style scoped>

/* Card */
.title-card-mdi{
  font-weight: bold;
  color: #FF914D;
  font-size: 2rem;
}

.card-text{
  font-size: 1.3rem;
}

.annimation-card-mdi {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}

.annimation-card-mdi:hover {
    -webkit-transform: scale(1.025);
    transform: scale(1.025);
}

/* Row Explicative */
.home-help-mdi{
  background-color: #6076dd;
}
.title-help-mdi{
  font-weight: bold;
  color: #FF914D;
}
.text-help-mdi{
  font-size: 1.3rem;
  color: #ffffff;
}

/* Row Accompagents */
.mdi-secondary{
  color:#FF914D;
}

</style>
