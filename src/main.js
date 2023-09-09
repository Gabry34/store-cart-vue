import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import Cart from './components/Cart.vue';
import Home from "./components/Home.vue";
import YourItems from "./components/YourItems.vue"
import ItemDescription from "./components/ItemDescription.vue"
import AboutUs from "./components/AboutUs.vue"
import Contact from "./components/Contact.vue"
import Features from "./components/Features.vue"

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/Cart',
    component: Cart,
    name: 'Cart'
  },
  {
    path: "/YourItems",
    component: YourItems,
    name: "YourItems"
  },
  {
    path: "/item/:itemName",
    component: ItemDescription,
    name: "ItemDescription"
  },
  {
    path: "/AboutUs",
    component: AboutUs,
    name: "AboutUs"
  },
  {
    path: "/Contact",
    component: Contact,
    name: "Contact"
  },
  {
    path: "/Features",
    component: Features,
    name: "Features"
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

export default app;
