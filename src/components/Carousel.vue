<template>
<div class="carousel">
    <div :id="'carousel'+pictures[0]['id']" class="carousel slide" :data-bs-ride="''">
        <div class="carousel-inner">
            <div >
                <div class="carousel-item" :key="index" v-for="(picture, index) in pictures" >
                    <img :src="require(`../assets/${picture.data}`)" :alt="ads.title" class="d-block w-100" v-if="index == 0" :data-test="addActive()">
                    <img :src="require(`../assets/${picture.data}`)" :alt="ads.title" class="d-block w-100" v-else>
                </div>
                <div class="carousel-item" >
                    
                </div>
            </div>
        </div>
        <button class="carousel-control-prev bg-transparent" type="button" :data-bs-target="'#'" data-bs-slide="prev">
            <span class=" bg-transparant border-none carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next bg-transparent" type="button" :data-bs-target="'#'" data-bs-slide="next">
            <span class="bg-transparant border-none carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Carousel',
    props: {
        pictures: Array,
    },
    methods:{
        addActive: function(){
            return document.querySelector('.carousel-item').classList.add('active');
        }
    },
}
</script>

<style scoped>

</style>