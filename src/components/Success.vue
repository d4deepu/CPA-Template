<template>
    <lg-container>
        <gold-head>Process Complete!</gold-head>
        <h4>You have a Success probability of {{getper(45,87)}}%</h4>
    </lg-container>
</template>

<script>
import LgContainer from './LgContainer.vue'
import GoldHead from './GoldHead.vue'

export default {
    components: {
        LgContainer,
        GoldHead
    },
    methods: {
        getper(min, max) {
             return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

}
</script>

<style>

</style>
