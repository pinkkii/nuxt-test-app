<template>
    <section class="container-lg">
        <div class="wrapper-order row g-0 d-flex justify-content-between flex-wrap">
            <div class="free col-md-4 d-flex align-items-center">
                <img src="../assets/images/free.svg" alt="free-image">
                <p>Безкоштовна доставка від 1800 грн</p>
            </div>
            <div class="order col-md-4 d-flex align-items-center">
                <img src="../assets/images/order.svg" alt="order-image">
                <p>Відправки в день оформлення замовлення до 16:00</p>
            </div>
            <div class="return col-md-4 d-flex align-items-center">
                <img src="../assets/images/return.svg" alt="return-image">
                <p>Гарантія повернення грошових коштів</p>
            </div>
        </div>
    </section>
</template>
  
<script setup>

</script>
  
<style scoped lang="scss">
.wrapper-order {
    margin: 120px 0 0;
    font-size: 18px;
    padding: 20px 56px;
    border-radius: 15px;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.54) 100%);

    img {
        width: 54px;
        height: 54px;
        margin-right: 24px;
    }

    p {
        margin: 0;
    }

    .free {
        p {
            max-width: 220px;
        }
    }

    .order {
        p {
            max-width: 264px;
        }
    }

    .return {
        p {
            max-width: 220px;
        }
    }
}

@media only screen and (max-width: 1400px) and (min-width: 1200px)  {
    .return {
        padding-left: 15px;
    }
}

@media only screen and (max-width: 1200px) {

    .free,
    .order,
    .return {
        text-align: center;
        flex-direction: column;
        justify-content: center;

        img {
            margin-bottom: 24px;
            margin-right: 0;
        }
    }
}

@media only screen and (max-width: 991px) {
    .wrapper-order {
        margin-top: 52px;
    }
}

@media only screen and (max-width: 767px) {
    .wrapper-order {
        font-size: 16px !important;
        flex-direction: column;
        align-items: center;
        padding-right: 33px;
        padding-left: 33px;
    }

    .free,
    .order {
        margin-bottom: 26px;
    }

    .free,
    .order,
    .return {
        max-width: 333px;
        justify-content: start;
        flex-wrap: nowrap;
        flex-direction: row;
        text-align: left;

        img {
            margin: 0 45px 0 0;
        }
    }
}

@media only screen and (max-width: 991px) {
    .wrapper-order {
        margin-top: 32px;
    }
}
</style>
