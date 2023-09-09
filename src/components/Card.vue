<template>
  <div class="body">
    <div class="container">
    <div v-for="item in filteredItems" :key="item.id" class="card-container">
      <div class="add-to-cart">
        <h3>{{ item.price }}€</h3>
        <button @click="addToCart(item)">Add To Cart</button>
      </div>
      <h1>{{ item.name }}</h1>
      <div class="image-container" @click="navigateToItemDescription(item)">
        <img :src="item.image" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import catalogData from "../Items.json";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      catalogData: {
        items: JSON.parse(localStorage.getItem("catalogItems")) || [],
      },
      catalogData: catalogData,
      searchValue: "",
    };
  },
  methods: {
    addToCart(item) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.push({
        name: item.name,
        image: item.image,
        price: item.price,
        number: item.number,
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },
    clearCart() {
      localStorage.removeItem("cartItems");
    },
  },
  computed: {
    filteredItems() {
      if (this.searchValue === "") {
        return this.catalogData.items;
      } else {
        return this.catalogData.items.filter(
          (item) => item.name.toLowerCase() === this.searchValue.toLowerCase()
        );
      }
    },
  },
  created() {
    if (!localStorage.getItem("catalogItems")) {
      localStorage.setItem("catalogItems", JSON.stringify(catalogData.items));
    } else {
      this.catalogData.items = JSON.parse(localStorage.getItem("catalogItems"));
    }

    if (localStorage.getItem("searchValue")) {
      this.searchValue = localStorage.getItem("searchValue");
    } else {
      localStorage.setItem("searchValue", "");
      this.searchValue = "";
    }


    console.log(this.searchValue);
  },
  setup() {
    const router = useRouter();
    const navigateToItemDescription = (item) => {
      router.push(`/item/${item.name}`);
    }; 
    return {
      navigateToItemDescription
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Poppins:wght@100;200;300;400;500;600&display=swap');

.body {
  min-height: 94vh;
}
.container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  place-items: center;
  grid-template-rows: auto;
  padding-top: 50px;
  grid-row-gap: 20px;
  column-gap: 20px;
  width: fit-content;
  margin: 0 auto;
}

.card-container {
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  padding: 16px;
  color: black;
  background-color: white;
  font-size: 10px;
  border-radius: 15px;
  cursor: pointer;
  font-family: "Poppins";
  height: 275.5px;
  overflow: hidden;
}
.image-container {
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
}

.image-container > img {
  object-fit: contain;
  width: 200px;
  height: 200px;
}

.card-container:hover {
  background-color: whitesmoke;
}

.add-to-cart {
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
}

.add-to-cart > button {
  background-color: transparent;
  border: solid 1px orange;
}

.add-to-cart > h3 {
  font-size: 15px;
}

.add-to-cart > button:hover {
  background-color: orange;
}

@media (max-width: 1650px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 70%;
  }
}

@media (max-width: 1310px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
    width: 60%;
  }
}

@media (max-width: 1100px) {
  .container {
    grid-template-columns: 1fr 1fr;
    width: 80%;
  }
}

@media (max-width: 640px) {
  .container {
    grid-template-columns: 1fr;
    width: 100%;
  }
}

</style>
