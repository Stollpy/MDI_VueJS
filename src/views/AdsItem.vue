<template>
    <div class="ads-item">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div id="carouselExampleControls" class="carousel slide shadow" data-bs-ride="carousel" v-if="announcement !== null">
                        <div class="carousel-inner">
                            <div :key="index" v-for="(picture, index) in announcement.adsPictures">
                                <div class="carousel-item active"  v-if="index == 0">
                                    <img :src="require(`../assets/${picture.data}`)" :alt="announcement.title" class="d-block w-100">
                                </div>
                                <div class="carousel-item" v-else>
                                    <img :src="require(`../assets/${picture.data}`)" :alt="announcement.title" class="d-block w-100">
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mt-3" v-if="loading">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3" v-if="announcement !== null">
                    <div class="col-12 text-center fw-bold display-3 mt-3">
                        <h1>{{ announcement.title }}</h1>
                    </div>
                    <div class="col-12 mt-3">
                        <p>Categorie : <span class="fw-bold">{{ announcement.adsCategory.label }}</span></p>
                    </div>
                    <div class="col-12 mt-2">
                        <p>Prix : <span class="fw-bold">{{ announcement.price}}</span> €</p>
                    </div>
                    <div class="col-12 mt-2">
                        <p>Description : <span class="fw-bold">{{ announcement.content }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'AdsItem',
  methods:{
        addActive: function(){
            return document.querySelector('.carousel-item').classList.add('active');
        }
    },
  data(){
    return {
        loading: false,
        announcement: null,
        id: this.$route.params.id,
        api: this.$store.state.api
    }
  },
  mounted(){
      this.loading = true;
    axios
    .get(`${this.api}/api/ads/${this.id}`)
    .then((response) => {
        this.loading = false;
        this.announcement = response.data
    })
  },
}
</script>

<style scoped>

</style>