<template>
    <header class="header container-lg">
        <div class="header-content d-flex w-100 align-items-center justify-content-between">
            <div class="header-left-side">
                <a href="#">
                    <img class="header-burger" src="../assets/images/burger-desk.png" alt="burger-image">
                </a>
                <a href="#">
                    <img class="search-image" src="../assets/images/search.svg" alt="search-image">
                </a>
            </div>
            <div class="logo">
                <a href="#">
                    <img class="logo-image" src="../assets/images/logo.svg" alt="logo-image">
                </a>
            </div>
            <div class="header-right-side">
                <a href="#">
                    <img class="phone-image" src="../assets/images/phone.svg" alt="phone-image">
                </a>
                <a class="position-relative" href="#">
                    <img class="basket-image" src="../assets/images/basket.svg" alt="basket-image">
                    <span class="basket-count position-absolute">{{ quantity }}</span>
                </a>
            </div>
        </div>
        <div class="header-menu">
            <ul class="list-group list-group-flush flex-row justify-content-center mt-5">
                <li>
                    <a href="#" class="list-group-item ps-0">Омега-3</a>
                </li>
                <li>
                    <a href="#" class="list-group-item">Вітаміни</a>
                </li>
                <li>
                    <a href="#" class="list-group-item">Добавки</a>
                </li>
                <li>
                    <a href="#" class="list-group-item">Доставка</a>
                </li>
                <li>
                    <a href="#" class="list-group-item pe-0">Про нас</a>
                </li>
            </ul>
        </div>
    </header>
</template>
  
<script setup>
import { computed } from 'vue';
import { useBasketStore } from '~~/stores/basket';

const basketStore = useBasketStore();
const quantity = computed(() => basketStore.basket.quantity);
</script>
  
<style scoped lang="scss">
.header-content {
    margin-top: 35px;

    .header-left-side {
        .header-burger {
            width: 26px;
            height: 20px;
        }
    }

    .header-right-side {
        a:first-child {
            margin-right: 40px;
        }
    }
}

.header-menu {
    li {
        list-style-type: none;

        a {
            color: $black;
            font-size: 23px;
            line-height: 29px;
            text-decoration: none;
        }

        .list-group-item {
            background-color: transparent;
            border: none;
            padding: 8px 20px;
        }
    }
}

.search-image {
    width: 24px;
    height: 24px;
}

.logo-image {
    width: 196px;
    height: 32px;
}

.phone-image {
    width: 24px;
    height: 24px;
}

.basket-image {
    width: 27px;
    height: 25px;
}

.basket-count {
    background: $yellow;
    color: $black;
    border-radius: 50%;
    text-align: center;
    width: 26px;
    height: 26px;
    line-height: 25px;
    font-family: 'OnestMedium', sans-serif;
    font-size: 14px;
    top: -16px;
    right: -13px;
    padding: 0;
}

.header-left-side a:first-child {
    margin-right: 40px;
}

@media only screen and (max-width: 992px) and (min-width: 768px) {
    .header-content .header-right-side a:last-child {
        margin-right: 10px;
    }

    .header-content .header-left-side a:first-child {
        margin-left: 10px;
    }
}

@media only screen and (max-width: 767px) {
    .header {
        padding: 0 24px;
    }

    .header .header-menu .list-group {
        justify-content: space-between !important;
    }

    .search-image {
        width: 23px;
        height: 23px;
    }

    .logo-image {
        width: 150px;
        height: 24px;
    }

    .header-content .header-right-side a:first-child {
        margin-right: 30px;
    }

    .header-content .header-left-side a:first-child {
        margin-right: 30px;
    }

    .header-menu .list-group .list-group-item {
        font-size: 18px;
    }
}

@media only screen and (max-width: 576px) {
    .header-menu {
        display: none;
    }
}

@media only screen and (max-width: 414px) {
    .search-image {
        width: 15px;
        height: 15px;
    }

    .logo-image {
        width: 120px;
        height: 20px;
    }

    .phone-image {
        width: 16px;
        height: 16px;
    }

    .basket-image {
        width: 17px;
        height: 16px;
    }

    .header-content .header-left-side .header-burger {
        width: 16.5px;
        height: 11.5px;
    }

    .header-content .header-right-side a:first-child {
        margin-right: 14px;
    }

    .header-content .header-left-side a:first-child {
        margin-right: 14px;
    }

    .basket-count {
        font-size: 8px;
        width: 14px;
        height: 14px;
        line-height: 14px;
        top: -5px;
        right: -8px;
    }
}
</style>
