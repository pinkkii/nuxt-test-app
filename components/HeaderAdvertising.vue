<template>
    <div class="wrapper-advertisment d-flex align-items-center justify-content-center">
        <img class="image-drugs" src="../assets/images/drugs.png" alt="drugs-img">
        <span>Безкоштовна доставка від 1800 грн</span>
        <img class="image-drugs" src="../assets/images/drugs.png" alt="drugs-img">
    </div>
</template>
  
<script setup>

</script>
  
<style scoped lang="scss">
.wrapper-advertisment {
    background: $bckg-advertisment;
    padding: 10px 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: $white;

    .image-drugs {
        width: 22px;
        height: 22px;
    }

    .image-drugs:first-child {
        margin-right: 13px;
    }

    .image-drugs:last-child {
        margin-left: 13px;
    }
}

.image-drugs {
    width: 22px;
    height: 22px;
}

@media only screen and (max-width: 767px) {
    .image-drugs {
        width: 16px;
        height: 16px;
    }

    .wrapper-advertisment span {
        font-size: 14px;
        line-height: 20px;
    }
}

@media only screen and (max-width: 414px) {
    .image-drugs {
        width: 14px;
        height: 14px;
    }

    .wrapper-advertisment span {
        line-height: 22px;
    }
}
</style>
