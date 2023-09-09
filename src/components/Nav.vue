<script>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const searchValue = ref("");

    const cartCount = computed(() => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      return cartItems.length;
    });

    const navigateToCart = () => {
      router.push("/Cart");
    };

    const navigateToAboutUs = () => {
      router.push("/AboutUs");
    };

    const navigateToContact = () => {
      router.push("/Contact");
    };

    const navigateToFeatures = () => {
      router.push("/Features");
    };

    const navigateToHome = () => {
      localStorage.setItem("searchValue", "");
      if (router.currentRoute.value.path === "/") {
        window.location.reload();
      } else {
        router.push("/");
      }
    };

    watch(searchValue, (newValue) => {
      localStorage.setItem("searchValue", newValue);
      console.log(newValue);
    });

    return {
      cartCount,
      navigateToCart,
      navigateToHome,
      navigateToAboutUs,
      navigateToContact,
      navigateToFeatures,
      searchValue,
    };
  },
};
</script>

<template>
    <nav>
        
        <div class="shop-logo-container">
          <div class="logo">
            <h1 @click="navigateToHome">SHOP</h1>
          </div>
        </div>

        <div class="middle-nav">

          <a @click="navigateToAboutUs"> About Us </a>
          <a @click="navigateToContact"> Contact </a>
          <a @click="navigateToFeatures"> Features </a>

        </div>

        <div class="right-nav">

          <a href="/YourItems">Your Items</a>
          
          <div class="cart-img-container" @click="navigateToCart">

            <img src="../assets/cart.svg">
            <div class="cart-count-container">

              <div class="cart-count">
                <p>{{ cartCount }}</p>
              </div>

            </div>

          </div>

          <form class="input-search">                            

            <input type="text" placeholder="Search" v-model="searchValue" />
            <img src="../assets/search.svg">

          </form>

        </div>

    </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Poppins:wght@100;200;300;400;500;600&display=swap');

  nav {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 8px 15px 8px 15px;
    grid-template-rows: 1fr;
    border-bottom: solid 1px rgba(128, 128, 128, 0.3);
  }

  .logo > h1 {
    cursor: pointer;
    margin: 0;
  }

  .logo {
    width: 85px;
  }

  .input-search {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .right-nav {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 30px;
  }

  .right-nav > a {
    color: #151515;
  }

  .cart-img-container > img {
    cursor: pointer;
    position: absolute;
    z-index: 10;
  }

  .cart-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }

  .cart-count-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
  }

  .cart-count {
    z-index: 20;
    background-color: white;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px orange;
    border-radius: 50%;
  }

  .cart-count > p {
    font-size: 10px;
    font-weight: 600;
    color: black;
    font-family: "Poppins";
    cursor: default;
  }

  .middle-nav {
    display: flex;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .middle-nav > a {
    color: #151515;
    cursor: pointer;
    font-weight: 400;
  }

  a:hover {
    font-weight: 500;
  }

  input {
    background-color: transparent;
    color: #151515;
    border: 0;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    width: 200px;
    height: 25px;
  }

  h1 {
    margin: 0;
    color: #151515;
    font-size: 30px;
    margin-left: 20px;
  }
</style>