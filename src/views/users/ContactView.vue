<template>
    <NavBar/>
    <div class="about-banner">
      <HomeBanner title="Contact Us" text="| Contact us" home="Home "/>
     </div>
    <!-- shop -->
    <!-- services -->
  <div class="flex-container main-about f-width">
    <div class="half f-height">
      <div class="review-card with-bg">
        <div class="review-card-top fixed-flexed">
          <h2 class="main-title">Get In Touch</h2>
        </div>
        <div class="review-body">
          <p>
            For any inquiries, support, or collaboration, feel free to reach out to us. We’re here to assist you and look forward to connecting with you.
          </p>
        </div>
      </div>
    </div>
    <div class="half services">
    <div class="q3-row d-flex">
      <div class="half with-top">
        <label>Your Name <span class="must">*</span></label>
        <input type="text" class="q3-row f-input-contact">
      </div>
      <div class="half with-top">
        <label> Email<span class="must">*</span></label>
        <input type="email" class="q3-row f-input-contact">
      </div>
      <div class="f-width with-top" style="margin-left:0%;">
        <label style="margin-left:2.5%;"> Subject</label><br>
        <input type="text" class="f-width f-input-contact">
      </div>
      <div class="f-width with-top" style="margin-left:0%;">
        <label style="margin-left:2.5%;"> Message<span class="must">*</span></label><br>
        <textarea class="f-width f-input-contact"></textarea>
      </div>
    </div>
   </div>
   </div>
    <ClientFooter/>
    </template>
    
    <script>
    import NavBar from '@/components/users/NavBar.vue';
    import ClientFooter from '@/components/users/ClientFooter.vue';
    // import PageBanner from '@/components/users/PageBanner.vue';
    import HomeBanner from '@/components/users/HomeBanner.vue';
    
    export default {
    name: 'ContactView',
    components: { NavBar, ClientFooter, HomeBanner }
    }
    </script>