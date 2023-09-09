<template>
  <div class="container">
    <Nav />
    <div class="description-item-container">
      <div class="image-name-price-container">
        <div class="image-container">
          <img :src="this.image" />
        </div>
        <div class="name-price-container">
          <h1>{{ this.name }}</h1>
          <h6>{{ this.price }}€</h6>
        </div>
      </div>
      <div class="description-container">
        <p>{{ this.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue"

export default {
  components: {
    Nav
  },
  data() {
    return {
      catalogItems: [],
      path: '',
      name: "",
      image: "",
      description: "",
      price: ""
    };
  },
  mounted() {
    this.catalogItems = JSON.parse(localStorage.getItem("catalogItems")) || [];
    this.check();
  },
  created() {
    this.path = this.$route.path;
  },
  methods: {
    getSecondPart(path) {
      const parts = path.split('/');
      return parts.length >= 3 ? parts[2] : '';
    },
    check() {
      for (const item of this.catalogItems) {
        if (this.getSecondPart(this.path) === item.name) {
          this.name = item.name;
          this.image = item.image;
          this.description = item.description;
          this.price = item.price;
          break;
        }
      }
    }
  },
  watch: {
  path(newValue) {
    this.check();
  }
},

}
</script>

<style scoped>
.container {
  background-color: antiquewhite;
  width: 100vw;
  height: 100vh;
}

.vfor {
  height: 100px;
  width: 100%;
}

.description-item-container {
  width: 100%;
  height: 94%;
  display: flex;
  flex-direction: column;
}

.image-name-price-container {
  display: flex;
  width: 100%;
  height: 50%;
}

.image-container {
  height: 100%;
  padding: 10px;
}

.image-container > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.name-price-container {
  padding: 10px;
  color: #151515;
}

.description-container {
  padding: 10px;
}

.description-container > p {
  font-size: 20px;
  color: #151515;
  word-wrap: break-word;
}
</style>
