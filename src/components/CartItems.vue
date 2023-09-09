<template>
    <div class="container">
        <div class="items-container">
            <div v-if="cartItems.length === 0" class="empty-cart-message"><h3>Your cart is empty</h3></div>
            <div v-else>
                <div v-for="item in cartItems" :key="item.id" class="item">
                    <img :src="item.image" @click="navigateToItemDescription(item)"/>
                    <div class="name-container">
                        <h1>{{ item.name }}</h1>
                        <div class="buttons">
                            <h3>{{ item.price }}€</h3>
                            <div class="quantity">
                                <button @click="decrease(item)" :disabled="item.number === 1">-</button>
                                <span>{{ item.number }}</span>
                                <button @click="increase(item)" :disabled="item.number === 10">+</button>
                            </div>
                            <button @click="removeItem(item)">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="costs">
            <h1>Total Price ({{ cartItemCount }} Items):</h1>
            <div v-for="item in cartItems" :key="item.id" class="all-prices">
                <h6>{{ item.price }} x{{ item.number }}</h6>
            </div>
            <div class="total-price">
                <h1>Total: {{ total }}€</h1>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
    data() {
        return {
            cartItems: [],
            total: 0,
            number: 1,
        };
    },
    mounted() {
        this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.calculateTotalPrice();
    },
    computed: {
        cartItemCount() {
            return this.cartItems.length;
        },
        itemsPrice() {
            let totalPrice = 0;
            for (const item of this.cartItems) {
            totalPrice += item.price * item.number;
            }
            return totalPrice;
        },
    },
    methods: {
        removeItem(item) {
            const index = this.cartItems.indexOf(item);
            if (index !== -1) {
                this.cartItems.splice(index, 1);
                localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
                this.calculateTotalPrice();
            }
        },
        decrease(item) {
            if (item.number > 1) {
                item.number--;
            }
        },
        increase(item) {
            if (item.number < 10) {
                item.number++;
            }
        },
        calculateTotalPrice() {
            let totalPrice = 0;
            for (const item of this.cartItems) {
            totalPrice += item.price * item.number;
            }
            this.total = totalPrice;
        },
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
    .container {
        display: flex;
        width: 100%
    }
    .items-container {
        width: 80%;
    }
    .costs {
        width: 20%;
        border-left: solid 1px gray;
        min-height: 100vh;
    }
    .item {
        width: 100%;
        height: 200px;
        display: flex;
        padding: 30px 0px;
        color: black;
        border-bottom: solid 1px gray;
        gap: 20px;
    }
    .item > img {
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
    .empty-cart-message {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .empty-cart-message > h3 {
        color: black;
        font-size: 30px;
    }

    .quantity {
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px gray;
        border-radius: 10px;
        gap: 5px;
    } 

    .quantity > button {
        height: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        width: 5px;
    }

    .costs > h1 {
        color: #151515;
        font-size: 30px;
        padding: 20px 0px 0px 20px;
    }

    .all-prices {
        width: 100%;
        padding: 10px 20px;
    }

    .all-prices > h6 {
        color: gray;
    }

    .total-price {
        width: 100%;
        padding: 20px;
        border-top: solid 1px gray;
    }

    .total-price > h1 {
        color: #151515;
        font-size: 30px;
    }

    @media (max-width: 590px) {
        .buttons {
            flex-direction: column;
            align-items: start;
        }
        .name-container {
            gap: 0px;
        }
    }
</style>
