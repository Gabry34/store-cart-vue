<template>

        <div class="main">
            <Nav />
            <div v-if="addItemButton === true" class="add-item">
                <div class="add-item-container">
                    <div class="go-back">
                        <img src="../assets/arrow.svg" @click="backToItems">
                    </div>
                    <div class="name">
                        <input type="text" placeholder="Name" maxlength="25" v-model="name">
                    </div>
                    <div class="price">
                        <input type="number" placeholder="Price" min="0" max="999999" v-model="price">
                    </div>
                    <div class="description">
                        <input type="text" placeholder="Description" maxlength="250" v-model="description">
                    </div>
                    <div class="image">
                        <input type="file" accept="image/png, image/jpeg" @change="handleImageUpload">
                    </div>
                    <div class="confirm">
                        <button @click="addItem" @auxclick="backToItems">Confirm</button>
                    </div>
                </div>
            </div>
            <div class="Items">
                <div v-if="addItems.length === 0" class="empty-items"><h3>You don't have items</h3></div>
                <div v-else>
                    <h1 class="your-items-title">Your Items</h1>
                    <div v-for="item in addItems" :key="item.id" class="your-items">
                        <img :src="item.image" @click="navigateToItemDescription(item)"/>
                        <div class="name-container">
                            <h1>{{ item.name }}</h1>
                            <div class="buttons">
                                <h3>{{ item.price }}€</h3>
                                <button @click="removeItem(item)">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <button @click="goToAddItem">Add Item</button>
                </div>
            </div>
        </div>
    
</template>

<script>
import Nav from "./Nav.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    Nav,
  },

  data() {
    return {
      addItemButton: false,
      name: "",
      description: "",
      price: "",
      image: "",
      addItems: [],
    };
  },

  methods: {
    goToAddItem() {
      this.addItemButton = true;
    },
    backToItems() {
      this.addItemButton = false;
    },
    addItem() {
    const newItem = {
        name: this.name,
        image: this.image,
        price: this.price,
        description: this.description,
        number: "1",
    };
    const catalogItems = JSON.parse(localStorage.getItem("catalogItems")) || [];

    catalogItems.push(newItem);

    localStorage.setItem("catalogItems", JSON.stringify(catalogItems));

    const addItems = JSON.parse(localStorage.getItem("addItems")) || [];
    addItems.push(newItem);
    localStorage.setItem("addItems", JSON.stringify(addItems));

    this.name = "";
    this.price = 0;

    this.addItemButton = false;
    },

    clearAddItems() {
    localStorage.removeItem("addItems");
    },
    removeItem(item) {
        const index = this.addItems.indexOf(item);
        if (index !== -1) {
            this.addItems.splice(index, 1);
            localStorage.setItem("addItems", JSON.stringify(this.addItems));

            const catalogItems = JSON.parse(localStorage.getItem("catalogItems")) || [];
            const catalogIndex = catalogItems.findIndex((catalogItem) => catalogItem.name === item.name);
            if (catalogIndex !== -1) {
            catalogItems.splice(catalogIndex, 1);
            localStorage.setItem("catalogItems", JSON.stringify(catalogItems));
            }
        }
    },
    handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            this.image = e.target.result;
        };

        reader.readAsDataURL(file);
        },
  },
  computed: {
    addItemsCount() {
      const addItems = JSON.parse(localStorage.getItem("addItems")) || [];
      return addItems.length;
    },
  },
  created() {
    console.log(JSON.parse(localStorage.getItem("addItems")));
    console.log(this.cartCount);
  },
  mounted() {
        this.addItems = JSON.parse(localStorage.getItem('addItems')) || [];
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
}
</script>


<style scoped>
    .Items {
         z-index: 10;
         display: flex;
         flex-direction: column;
         gap: 20px;
    }

    .main {
        min-height: 100vh;
    }
    .empty-items {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 500px;
    }

    .empty-items > h3 {
        color: #151515;
        font-size: 30px;
    }

    .button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button > button {
        width: 150px;
        background-color: transparent;
        border: solid 1px orange;
        color: #151515;
        font-weight: 900;
    }

    .button > button:hover {
        background-color: orange;
    }

    .add-item {
        position: absolute;
        z-index: 20;
        width: 100vw;
        height: 94vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(21, 21, 21, 0.9);
    }

    .add-item-container {
        width: 450px;
        height: 80%;
        background-color: aliceblue;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 15px;
    }

    .go-back {
        width: 100%;
        height: 5%;
        display: flex;
        align-items: center;
        padding: 10px;
    }

    .go-back > img {
        cursor: pointer;
    }

    .name {
        width: 100%;
        height: 5%;
        padding: 0px 10px;
    }

    .name > input {
        height: 100%;
        border: solid 1px #151515;
        width: 100%;
        background-color: transparent;
        padding: 0px 10px;
        color: #151515;
    }

    .price {
        width: 100%;
        height: 5%;
        padding: 0px 10px;
    }

    .price > input {
        height: 100%;
        border: solid 1px #151515;
        width: 100%;
        background-color: transparent;
        padding: 0px 10px;
        color: #151515;
    }

    .description {
        width: 100%;
        height: 40%;
        padding: 0px 10px;
    }

    .description > input {
        height: 100%;
        border: solid 1px #151515;
        width: 100%;
        background-color: transparent;
        padding: 0px 10px;
        color: #151515;
        text-align: left;
        vertical-align: top;
    }

    .image {
        width: 100%;
        height: 35%;
        padding: 0px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .image > input {
        color: #151515;
    }

    .confirm {
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .confirm > button {
        border: solid 1px #151515;
        background-color: transparent;
        color: #151515;
        cursor: pointer;
    }

    .confirm > button:hover {
        background-color: #151515;
        color: white;
    }

    .your-items-title {
        text-align: center;
        color: #151515;
        font-size: 35px;
        padding: 20px 0px;
        border-bottom: solid 1px gray;
    }

    .your-items {
        width: 100%;
        height: 200px;
        display: flex;
        padding: 30px 0px;
        color: black;
        border-bottom: solid 1px gray;
        gap: 20px;
    }

    .your-items > img {
        padding-left: 20px;
        cursor: pointer;
    }
    .name-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .buttons {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .buttons > button {
        background-color: transparent;
        border: solid 1px orange;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
    }

    .buttons > h3 {
        font-size: 15px;
        color: #151515;
    }

</style>