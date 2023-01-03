<template>
    <div id="app">
        <HeaderAdvertising />
        <Header />
        <Card />
        <Products />
    </div>
</template>
  
<script setup>
</script>
  
<style>
@import "../assets/global.scss";

#app {
    /* True gradient is commented out, but used another due to height of app(have a log of white in test app) */
    /* background: linear-gradient(180deg, rgba(200, 224, 149, 0.8) -5.17%, rgba(221, 238, 239, 0.8) 47.96%, rgba(255, 255, 255, 0.8) 100%); */
    background: linear-gradient(180deg, rgba(200, 224, 149, 0.8) -5.17%, rgba(221, 238, 239, 0.8) 100%);
    min-height: 100vh;
    padding-bottom: 160px;
}

@media only screen and (max-width: 575px) {
    #app {
        padding-bottom: 110px;
    }
}
</style>
