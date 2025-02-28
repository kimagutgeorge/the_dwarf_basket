<template>
    <div class="nav-bar flex-container">
        <div class="left centered-content">
            <router-link to="/" class="d-flex">
                <img src="@/assets/logo/g10.png" class="logo-img">
            </router-link>
        </div>
        <div class="centered-content middle centered-content">
            <router-link to="/" active-class="btn-active" class="nav-btn">HOME</router-link>
            <router-link to="/about-us" active-class="btn-active" class="nav-btn">ABOUT</router-link>
            <router-link to="/products" active-class="btn-active" class="nav-btn">PRODUCTS</router-link>
            <router-link to="/contact-us" active-class="btn-active" class="nav-btn">CONTACT US</router-link>
        </div>
        <div class="right right-content">
            <i class="fa-solid fa-search default-icon"></i>
            <i class="fa-solid fa-phone default-icon"></i>
            <i class="fa-solid fa-envelope default-icon"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>