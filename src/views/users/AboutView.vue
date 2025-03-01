<template>
  <NavBar/>
  <div class="flex-container about-banner f-width p-relative">
    <div class="about-banner-front f-width f-height p-absolute"></div>
    <div class="about-banner-text f-width f-height p-absolute d-flex">
      <div class="about-home d-flex f-width centered-content">
        <div class="about-banner-text-inner f-width f-height">
          <h2 class="page-title">About Us</h2>
          <p class="page-title-sub-text"><router-link to="/">Home</router-link> | About</p>
        </div>
      </div>
    </div>
  </div>
  <!-- below about -->
   <div class="flex-container main-about f-width">
    <div class="half with-bg f-height">
      <div class="review-card">
        <div class="review-card-top fixed-flexed">
          <h2 class="main-title">Learn About Dwarf Basket</h2>
        </div>
        <div class="review-body">
          <p>Our passion for design with straight speaking strategy to create thoughtful and engaging solutions, ensures we serve our clients – big and small – year after year.</p>
        </div>
      </div>
    </div>
    <div class="half">
      <div class="review-topic h-card">
          <div class="h-card-bg p-absolute">
            <div class="h-card-inner-text">
              <img src="../../assets/images/pngwing.com.png">
            </div>
          </div>
          <div class="h-card-bg-1 p-absolute"></div>
      </div>
    </div>
   </div>
   <!-- stats -->
  <ClientStats/>
  <ClientFooter/>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/users/NavBar.vue';
import ClientFooter from '@/components/users/ClientFooter.vue';
import ClientStats from '@/components/users/ClientStats.vue';

export default {
name: 'HomeView',
components: { NavBar, ClientFooter, ClientStats }
}
</script>
