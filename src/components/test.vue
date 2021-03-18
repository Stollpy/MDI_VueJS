<template>
    <h1>Mon super compteur</h1>
    <p @click="increment">Vous avez cliquer {{ totalGeneral }} fois.</p>
</template>

<script>
export default {
    name: "test",
    data() {
        return {
            total: 0
        }
    },
    computed: {
        totalGeneral(){
            return this.$store.state.totalViewX;
        }
    },
    methods: {
        increment() {
            this.$store.state.totalViewX += 1;
        }
    }
}
</script>

<style scoped>

</style>