<template>
    <div class="card-ads" :key="ads" v-for="ads in announcement">
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card shadow" style="width: 100%;">
                    <h1>{{ ads.title }}</h1>
                <div id="" class="carousel slide" data-bs-ride="carousel''">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardAds',
    props: {
        announcement: Array
    },
}
</script>

<style scoped>

</style>