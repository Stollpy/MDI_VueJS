<template>
<div class="form-skeleton">
    <div class="row shadow rounded">
        <div class="col-12 col-md-6 my-3">
            <div class="loading rounded"></div>
        </div>
        <div class="col-12 col-md-6 my-3">
            <div class="loading rounded"></div>
        </div>
        <div class="col-12 col-md-6 my-3">
            <div class="loading rounded"></div>
        </div>
        <div class="col-12 col-md-6 my-3">
            <div class="loading rounded"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'FormSkeleton'
}
</script>

<style scoped>
.loading{
    background: #c1c1c1;
    min-height: 40px;
    position: relative;
    overflow: hidden;
}

.loading::after{
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(to right, transparent, rgb(235, 235, 235), transparent);
    animation: loading 1s linear infinite;
}

@keyframes loading{
    0% {
        transform: translateX(-100%);
    }
    60% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>