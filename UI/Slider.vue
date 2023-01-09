<template>
    <div :id="nameId" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/images/omega-3.svg" class="w-100" alt="omega-3-image">
            </div>
            <div class="carousel-item">
                <img src="../assets/images/omega-3-2.svg" class="w-100" alt="omega-3-image">
            </div>
            <div class="carousel-item">
                <img src="../assets/images/omega-3-3.svg" class="w-100" alt="omega-3-image">
            </div>
            <div class="carousel-item">
                <img src="../assets/images/omega-3-4.svg" class="w-100" alt="omega-3-image">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" :data-bs-target="target" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next carousel-btn-next" type="button" :data-bs-target="target"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
const { nameId } = defineProps({
    nameId: String
})

const target = ref(`${nameId}`)
</script>
  
<style lang="scss" scoped>
.carousel-item {
    text-align: center;

    img {
        object-fit: contain;
    }
}


.carousel-inner,
img {
    height: 500px;
}

// ------ Max ------ //
@media only screen and (max-width: 1400px) {

    .carousel-inner,
    img {
        height: 440px;
    }
}

@media only screen and (max-width: 1200px) {

    .carousel-inner,
    img {
        height: 360px;
    }
}

@media only screen and (max-width: 992px) {

    .carousel-control-prev-icon {
        background-image: url('../assets/images/arrow-left-mob.svg');
        width: 12px;
        height: 20px;
    }

    .carousel-control-next-icon {
        background-image: url('../assets/images/arrow-right-mob.svg');
        width: 12px;
        height: 20px;
    }
}

@media only screen and (max-width: 865px) {

    .carousel-inner,
    img {
        height: 330px;
    }
}

@media only screen and (max-width: 768px) {

    .carousel-inner,
    img {
        height: 280px;
    }
}

@media only screen and (max-width: 575px) {

    .carousel-inner,
    img {
        height: 200px;
    }
}

@media only screen and (max-width: 414px) {

    .carousel-inner,
    img {
        height: 180px;
    }
}

// ------ Min ------- //
@media only screen and (min-width: 992px) {

    .carousel-control-prev,
    .carousel-control-next {
        background-color: transparent !important;
        border: none;
        position: inherit;
        display: inline-block;
    }

    .carousel-control-prev-icon {
        background-image: url('../assets/images/arrow-left.svg');
        width: 22px;
        height: 16px;
    }

    .carousel-control-next-icon {
        background-image: url('../assets/images/arrow-right.svg');
        width: 22px;
        height: 16px;
    }
}
</style>
