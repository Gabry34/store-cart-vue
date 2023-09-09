<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Nav from "./components/Nav.vue";
import Card from "./components/Card.vue";
import Cart from "./components/Cart.vue";
import Home from "./components/Home.vue";

const route = useRoute();
const showCard = route.path !== "/Cart";
</script>

<style scoped>
  
</style>
