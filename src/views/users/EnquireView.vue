<template>
    <NavBar/>
    <div class="about-banner">
      <HomeBanner title="Contact Us" text="| Enquire" home="Home "/>
     </div>
    <!-- shop -->
    <!-- services -->
  <div class="flex-container main-about f-width" style="height:fit-content; overflow:visible;">
    <div class="half f-height">
      <div class="review-card">
        <div class="review-card-top fixed-flexed">
          <h2 class="main-title">Enquire</h2>
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
      <div class="f-width with-top" style="margin-left: 0%;">
        <button class="btn-default" style="margin-left: 2.5%;">SEND</button>
      </div>
    </div>
   </div>
   </div>
    <ClientFooter/>
    </template>
    
    <script>
    import NavBar from '@/components/users/NavBar.vue';
    import ClientFooter from '@/components/users/ClientFooter.vue';
    import HomeBanner from '@/components/users/HomeBanner.vue';
    
    export default {
    name: 'EnquireView',
    props: ['id'],
    components: { NavBar, ClientFooter, HomeBanner }
    }
    </script>