<template>
    <div class="nav-bar flex-container">
        <div class="left centered-content">
            <router-link to="/" class="d-flex">
                <img src="@/assets/logo/g10.png" class="logo-img">
            </router-link>
        </div>
        <div class="centered-content middle centered-content">
            <div class="f-width full-nav-bar">
                <router-link to="/" active-class="btn-active" class="nav-btn">HOME</router-link>
                <router-link to="/about-us" active-class="btn-active" class="nav-btn">ABOUT</router-link>
                <router-link to="/products" active-class="btn-active" class="nav-btn">PRODUCTS</router-link>
                <router-link to="/services" active-class="btn-active" class="nav-btn">SERVICES</router-link>
                <router-link to="/contact-us" active-class="btn-active" class="nav-btn">CONTACT US</router-link>
            </div>
            <!-- small navbar -->
             <div class="f-width small-nav-bar right-content">
                <i :class="small_navbar ? 'fa-solid fa-close' : 'fa-solid fa-bars'" @click="navOperation"></i>

             </div>
             <div class="f-width small_nav right-content p-absolute" v-if="small_navbar" >
                <li><router-link to="/" active-class="btn-active" class="nav-btn">HOME</router-link></li>
                <li><router-link to="/about-us" active-class="btn-active" class="nav-btn">ABOUT</router-link></li>
                <li><router-link to="/products" active-class="btn-active" class="nav-btn">PRODUCTS</router-link></li>
                <li><router-link to="/services" active-class="btn-active" class="nav-btn">SERVICES</router-link></li>
                <li><router-link to="/contact-us" active-class="btn-active" class="nav-btn">CONTACT US</router-link></li>
             </div>
        </div>
        <div class="right right-content">
            <!-- <i class="fa-solid fa-search default-icon"></i>
            <i class="fa-solid fa-phone default-icon"></i>
            <i class="fa-solid fa-envelope default-icon"></i> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    data (){
        return {
            small_navbar: false
        }
    },
    methods: {
        navOperation() {
            this.small_navbar = !this.small_navbar;
        
            if (this.small_navbar) {
                document.body.style.overflow = 'hidden'; // Disable scrolling
            } else {
                document.body.style.overflow = ''; // Enable scrolling (default behavior)
            }
        }
    },
    mounted() {
        document.body.style.overflow = ''
    }
}
</script>