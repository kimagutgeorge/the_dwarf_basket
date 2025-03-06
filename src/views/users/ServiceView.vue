<template>
  <UserResponse v-if="responseClass.includes('displayed')" :class="['response-message', responseClass]" :dbResponse="dbResponse" @close="closeResponse" />
    <NavBar/>
    <div class="about-banner">
      <HomeBanner title="Services" text="| Services" home="Home "/>
     </div>
    <!-- shop -->
    <div class="flex-container home-serv">
        <div class="f-width  about-cards centered-content">
          <h2 class="main-title">Our Process</h2>
          <p>Our process is designed to deliver seamless and effective solutions, from initial consultation to final execution. We ensure every step is clear, strategic, and tailored to meet your needs.</p>
            <div class="flex-container centered-content about-cards">
                <!-- card -->
    <div class="card width-q4 d-flex">
        <div class="card-inner d-flex">
          <div class="card-title f-width">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div class="card-title-text">
            <h4>CONSULTATION</h4>
            <p>
                We start by listening to your needs, understanding your goals, and analyzing your brand requirements.
            </p>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="card width-q4 d-flex">
        <div class="card-inner d-flex">
          <div class="card-title f-width">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div class="card-title-text">
            <h4>DESIGN</h4>
            <p>Our team brings your ideas to life with creative designs, branding solutions, and strategic marketing. We collaborate closely with you to refine and perfect every detail.</p>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="card width-q4 d-flex">
        <div class="card-inner d-flex">
          <div class="card-title f-width">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div class="card-title-text">
            <h4>DELIVERY & SUPPORT</h4>
            <p>Once everything is finalized, we deliver the completed project and provide ongoing support to ensure your brand continues to grow and make an impact.</p>
          </div>
        </div>
      </div>
            </div>
        </div>
    </div>
    <!-- services -->
  <div class="flex-container main-about f-width serv-break" style="height:fit-content;">
    <div class="half f-height">
      <div class="review-card">
        <div class="review-card-top fixed-flexed">
          <h2 class="main-title">What We Can Do</h2>
        </div>
        <div class="review-body">
          <p>
            At Dwarf Basket, we offer a wide range of branding, printing, corporate gifting, and occupational safety solutions tailored to meet your business needs. Our services are designed to enhance brand visibility, improve workplace safety, and provide high-quality promotional products. Whether you need custom designs, large-format prints, or protective gear, we deliver excellence with every product.
          </p>
          <router-link to="/contact-us"><button class="btn-default" style="margin-left: 0%; margin-top: 40px;">Contact Us</button></router-link>
        </div>
      </div>
    </div>
    <div class="half" style="margin-top: 100px;">
      <div class="q3-row d-flex with-bg">
        <div class="half" style="text-align:center;">
            <!-- service card -->
         <div class="round-card d-flex centered-content">
            <div class="round-card-inner f-width d-flex">
                <i class="fa-solid fa-print"></i>
                <p>Printing</p>
            </div>
         </div>
        </div>
        <div class="half" style="text-align:center;">
            <!-- service card -->
         <div class="round-card d-flex centered-content">
            <div class="round-card-inner f-width d-flex">
                <i class="fa-solid fa-shapes"></i>
                <p>Item Branding</p>
            </div>
         </div>
        </div>
        <div class="half" style="text-align:center;">
            <!-- service card -->
         <div class="round-card d-flex centered-content">
            <div class="round-card-inner f-width d-flex">
                <i class="fa-solid fa-tags"></i>
                <p>Tags</p>
            </div>
         </div>
        </div>
        <div class="half" style="text-align:center;">
            <!-- service card -->
         <div class="round-card d-flex centered-content">
            <div class="round-card-inner f-width d-flex">
                <i class="fa-solid fa-ribbon"></i>
                <p>Labels</p>
            </div>
         </div>
        </div>
        
      </div>
    </div>
   </div>
   <!-- all services -->
   <div class="flex-container main-about f-width d-flex" style="height:fit-content;">
    <div class="q3-row d-flex">
        <!-- row -->
        <div class="full-service-row f-width d-flex" v-for="(service, index) in services" :key="index">
          <!-- Text Content -->
          <div
            class="half service-full-card d-flex"
            :class="{ 'order-2': service.rightContent, 'right-content': !service.rightContent }"
          >
            <i :class="service.service_icon"></i>
            <h3>{{ service.service_title }}</h3>
            <p>
              {{ service.service_description }}
            </p>
            <div class="d-flex c-action">
              <div class="fixed-flexed">
                <div class="hire-line"></div>
                <router-link to="/contact-us" style="color: rgb(0, 130, 189)">HIRE US NOW</router-link>
              </div>
            </div>
          </div>
      
          <!-- Image -->
          <div
            class="half service-full-card"
            :class="{ 'order-1': service.rightContent, 'right-content': !service.rightContent }"
          >
            <img :src="service.imageUrl" />
          </div>
        </div>
        <!-- row -->

    </div>
    
   </div>
    <ClientFooter/>
    </template>
    
    <script>
    import NavBar from '@/components/users/NavBar.vue';
    import ClientFooter from '@/components/users/ClientFooter.vue';
    import HomeBanner from '@/components/users/HomeBanner.vue';
    import UserResponse from '@/components/users/UserResponse.vue';
    
    export default {
    name: 'ServiceView',
    components: { NavBar, ClientFooter, HomeBanner, UserResponse },
    data(){
      return{
        responseClass: '',
        dbResponse: '',
        services: []
      }
    },
    methods: {
      async getServices() {
      try {
        // Fetch services from the 'services' table
        const { data, error } = await this.$supabase
          .from("services")
          .select("*")
          .order("created_at", { ascending: false });

        // Handle errors
        if (error) {
          this.responseClass = "my-red displayed";
          this.dbResponse = "Failed to fetch services. Please try again.";
          
          return;
        }
        this.services = await Promise.all(
        data.map(async (service, index) => {
          const { data: imageData } = await this.$supabase
            .storage
            .from("The Dwaf Basket") 
            .getPublicUrl(`services/${service.service_image}`); 

          const rightContent = index % 2 === 1; 

          return {
            ...service,
            imageUrl: imageData.publicUrl,
            rightContent,
          };
        })
    );

      } catch (error) {
        // Handle unexpected errors
        this.responseClass = "my-red displayed";
        this.dbResponse = "Server offline. Please try again later.";
        // console.error("Unexpected error:", error);
      }
    }
    },
    mounted(){
      this.getServices();
    }
    }
    </script>
    <style scoped>
    .order-1 {
      order: 1; /* Display first */
      text-align: right;
    }
    
    .order-2 {
      order: 2; /* Display second */
    }
    </style>