<template>

    <Nav />
    <div class="container">
        <h1>Contact Us</h1>
        <div class="options-container">
            <div class="by-phone">
                <img src="../assets/phone.svg">
                <h6>+1 505-599-8868</h6>
            </div>
            <div class="by-email">
                <img src="../assets/email.svg">
                <h6>shop.everything@gmail.com</h6>
            </div>
            <div class="by-chat">
                <img src="../assets/chat.svg">
                <h6>+1 202-918-2132</h6>
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
}
</script>

<style scoped>
    .container {
        width: 100%;
        min-height: 94vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        padding-top: 50px;
        gap: 150px;
    }

    .container > h1 {
        color: #151515;
    }
    .options-container {
        width: 100%;
        display: flex;
        gap: 20px;
        justify-content: space-around;
        align-items: center;
    }

    .by-phone {
        height: 300px;
        width: 250px;
        padding: 20px;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border-radius: 15px;
        gap: 80px;
        cursor: pointer;
    }

    .by-phone > h6 {
        color: #151515;
    }
    
    .by-email {
        height: 300px;
        width: 250px;
        padding: 20px;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border-radius: 15px;
        gap: 80px;
        cursor: pointer;
    }

    .by-email > h6 {
        color: #151515;
    }

    .by-chat {
        height: 300px;
        width: 250px;
        padding: 20px;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border-radius: 15px;
        gap: 80px;
        cursor: pointer;
    }

    .by-chat > h6 {
        color: #151515;
    }

    @media (max-width: 840px) {
        .options-container {
            flex-direction: column;
        }

        .by-phone {
            width: 100%;
        }

        .by-chat {
            width: 100%;
        }

        .by-email {
            width: 100%;
        }
    }
</style>