<template>
    <section class="card mt-5 pt-5">
        <div class="container-lg">
            <div class="row g-0">
                <div class="mobile-slider col-lg-6">
                    <Slider name-id="slider-mobile" />
                </div>
                <div class="col-lg-6">
                    <div class="card-body">
                        <div class="d-flex align-items-center flex-wrap">
                            <h5 class="card-title main-title me-4">Омега-3 <i>Тріска</i></h5>
                            <h5 class="card-title main-subtitle">з вітамінами А і D3 </h5>
                        </div>
                        <CardTabs />
                        <div class="card-info-price mt-5 pt-2">
                            <div class="card-information d-flex justify-content-between align-items-center">
                                <button type="button" class="btn btn-success btn-mobile" @click="addToCart">
                                    До кошика - {{ product.cost }}₴
                                </button>
                                <div class="card-info-left d-flex align-items-center">
                                    <img src="../assets/images/drugs-big.svg" class="me-4 pe-2" alt="image">
                                    <div class="wrapper-card-info-left d-flex flex-column">
                                        <strong>В упаковці:</strong>
                                        <span>120 капсул по 500 мг</span>
                                        <span style="opacity: 0.6;">1 місяць прийому</span>
                                    </div>
                                </div>
                                <div class="card-info-right ">
                                    <strong class="discount me-4">{{ product.oldCost }} ₴</strong>
                                    <strong>{{ product.cost }} ₴</strong>
                                </div>
                            </div>
                            <div class="card-action d-flex align-items-center justify-content-between mt-5 pt-3">
                                <div class="wrapper-input d-flex align-items-center pe-4">
                                    <div class="minus-btn">
                                        <img src="../assets/images/minus.svg" alt="minus-image"
                                            @click="decrementQuantity">
                                    </div>
                                    <input v-model.number="productQuantity" class="input-action" type="number" min="1"
                                        max="100">
                                    <div class="plus-btn">
                                        <img src="../assets/images/plus.svg" alt="plus-image"
                                            @click="productQuantity += 1">
                                    </div>
                                </div>
                                <button type="button" class="btn btn-success" @click="addToCart">До кошика</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="desktop-slider col-lg-6 text-md-end">
                    <Slider name-id="slider-desktop" />
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import CardTabs from '~~/UI/CardTabs.vue';
import Slider from '~~/UI/Slider.vue';
import { ref, computed } from 'vue';
import { useProductsStore } from '~~/stores/products';
import { useBasketStore } from '~~/stores/basket';

let productQuantity = ref(1);

const basketStore = useBasketStore();
const productsStore = useProductsStore();
const product = computed(() => productsStore.product);

function decrementQuantity() {
    if (productQuantity.value - 1 >= 0) {
        productQuantity.value -= 1;
    }
}

function addToCart() {
    if (productQuantity.value < 0) {
        productQuantity.value = 0;
    }

    basketStore.incrementQuantityInBasket(productQuantity.value);
}
</script>
  
<style scoped lang="scss">
.card {
    color: $blue;
    border: none;
    background-color: transparent;

    .main-title {
        font-family: 'OnestBold', serif;
        font-size: 40px;
        line-height: 51px;

        i {
            font-family: 'OnestRegular', serif;
        }
    }

    .main-subtitle {
        border-radius: 50px;
        background: $white;
        padding: 8px 52px;
    }
}

.card-info-price {
    .card-information {

        .card-info-left {

            .wrapper-card-info-left {
                font-size: 18px;
                line-height: 23px;
            }
        }

        .card-info-right {
            font-family: 'OnestBold', serif;
            font-size: 40px;

            .discount {
                font-size: 28px;
                color: rgba($blue, 0.3);
                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    height: 2px;
                    width: 100%;
                    top: 45%;
                    border: 1px solid $blue;
                    transform: matrix(0.99, 0.20, -0.15, 0.99, 0, 0);
                }
            }
        }

    }

    .card-action {

        .input-action {
            width: 46px;
            height: 46px;
            background: $white;
            border-radius: 7px;
            border: none;
            text-align: center;
            font-size: 24px;
        }

        .minus-btn,
        .plus-btn {
            transition: 0.5s;
            user-select: none;

            img {
                cursor: pointer;
            }

            &:active img {
                transform: scale(1.3);
            }
        }

        .minus-btn {
            padding-right: 4px;
        }

        .plus-btn {
            padding-left: 4px;
        }
    }
}

.btn-success {
    max-width: 416px;
    width: 100%;
    background-color: $light-green;
    border: none;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 40px;
    font-size: 18px;

    &:hover {
        opacity: 0.8;
    }
}

.mobile-slider,
.btn-mobile {
    display: none;
}

@media only screen and (max-width: 1200px) and (min-width: 992px) {
    .card-info-right {
        white-space: nowrap;
        display: flex;
        flex-direction: column;
    }
}

@media only screen and (max-width: 991px) {
    .desktop-slider {
        display: none;
    }

    .mobile-slider {
        display: block;
    }
}

@media only screen and (max-width: 575px) {
    .main-title {
        font-size: 25px;
    }

    .main-subtitle {
        font-size: 16px;
    }

    .card-info-price .card-action {
        display: none !important;
    }

    .card-info-right {
        display: none;
    }

    .card-information {
        flex-direction: column;
    }

    .wrapper-card-info-left {
        font-size: 16px;
        margin-top: 32px;
    }

    .btn-mobile {
        display: block;
    }
}
</style>
