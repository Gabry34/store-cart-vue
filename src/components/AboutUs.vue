<template>

        <Nav />
        <div class="container">
          <h1>About Us</h1>
          <p>Welcome to our one-stop online destination where you can find everything you need, all in one place. At [Website Name], we pride ourselves on offering an unparalleled selection of products, ensuring that you never have to search far and wide for your desired items. With our extensive range of categories, you can explore a vast assortment of products, including electronics, home appliances, fashion, beauty, health and wellness, sports equipment, toys, books, and so much more. Whether you're looking to upgrade your smartphone, furnish your home, revamp your wardrobe, or indulge in a little self-care, we've got you covered. We believe that convenience is key, which is why we've curated a diverse and comprehensive inventory from leading brands and trusted suppliers, ensuring that you have access to top-quality products. Our team is dedicated to sourcing the latest trends and innovations, constantly updating our inventory to offer you the best of the best. But it doesn't stop there. At [Website Name], we understand the importance of a seamless shopping experience. Our user-friendly interface makes it easy to navigate through our vast catalog, browse through product descriptions, and compare prices, empowering you to make informed decisions. Our secure and encrypted payment system ensures that your transactions are safe and protected. Customer satisfaction is our utmost priority, and our dedicated support team is always ready to assist you. Whether you have questions about a product, need help with an order, or require post-purchase assistance, our friendly and knowledgeable staff are here to provide prompt and efficient service. We believe in creating a shopping destination that caters to every need and desire. [Website Name] is not just a marketplace; it's a community. Join our loyal customer base and enjoy exclusive deals, promotions, and personalized recommendations tailored to your preferences.36-+We value your trust and strive to exceed your expectations at every turn. So, whether you're shopping for yourself, your family, or searching for the perfect gift, embark on a journey of endless possibilities with [Website Name]. Discover the joy of finding everything you need, all in one place.</p>
        </div>
    
</template>

<script>
import Nav from "./Nav.vue"

export default {
  components: {
    Nav
  },
}
</script>

<style scoped>
body {
  width: 100%;
  height: 94;
}
.container {
  width: 100%;
  min-height: 94vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.container > h1 {
  color: #151515;
}

.container > p {
  color: #151515;
  font-size: 20px;
  padding-right: 100px;
}
</style>