<template>
    <NavBar/>
    <div class="about-banner">
      <HomeBanner title="Services" text="| Services" home="Home "/>
     </div>
    <!-- shop -->
    <div class="flex-container home-cat">
        <div class="q3-row centered-content">
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
  <div class="flex-container main-about f-width" style="height:fit-content;">
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
        <div class="half service-full-card">
            <img src="../../assets/images/service-12.jpg">
        </div>
        <div class="half service-full-card d-flex">
            <i class="fa-solid fa-paint-brush"></i>
            <h3> Graphic Design & <span class="default-color">Branding </span></h3>
            <p>
              Our expert designers craft unique brand identities, packaging, and marketing materials that resonate with your audience. Whether you need logos, business cards, or promotional designs, we bring creativity to life with precision.
            </p>
            <div class="d-flex c-action">
                <div class="fixed-flexed">
                    <div class="hire-line"></div> 
                HIRE US NOW</div>
                </div>
        </div>
        <!-- row -->
        <div class="half service-full-card d-flex right-content">
            <i class="fa-solid fa-print"></i>
            <h3> Large Format & Label Printing <span class="default-color">Logo & Visual </span></h3>
            <p>
              From banners and posters to high-quality labels, we offer premium printing solutions for businesses. Our labels include waterproof, metallic, and eco-friendly options, ensuring durability and style for all industries.
            </p>
            <div class="d-flex c-action">
                <div class="fixed-flexed">
                    <div class="hire-line"></div> 
                HIRE US NOW</div>
                </div>
        </div>
        <div class="half service-full-card">
            <img src="../../assets/images/service-11.jpg">
        </div>
        <!-- row -->
        <div class="half service-full-card">
            <img src="../../assets/images/service-12.jpg">
        </div>
        <div class="half service-full-card d-flex">
            <i class="fa-solid fa-gift"></i>
            <h3> Corporate Gifts & <span class="default-color"> Promotional Items Social Media </span></h3>
            <p>
              Enhance your brand visibility with customized giveaways such as mugs, notebooks, apparel, and tech accessories. We source high-quality promotional products that create a memorable brand experience.
            </p>
            <div class="d-flex c-action">
                <div class="fixed-flexed">
                    <div class="hire-line"></div> 
                HIRE US NOW</div>
                </div>
        </div>
        <!-- row -->
        <div class="half service-full-card d-flex right-content">
          <i class="fa-solid fa-hard-hat"></i>
          <h3> Occupational Health <span class="default-color">& Safety Solutions </span></h3>
          <p>
            We provide top-tier protective gear, including workwear, gloves, helmets, eye protection, and warning signage. Our safety solutions ensure compliance and protection for employees across various industries.
          </p>
          <div class="d-flex c-action">
              <div class="fixed-flexed">
                  <div class="hire-line"></div> 
              HIRE US NOW</div>
              </div>
      </div>
      <div class="half service-full-card">
          <img src="../../assets/images/service-11.jpg">
      </div>
      <!-- row -->

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
    name: 'ServiceView',
    components: { NavBar, ClientFooter, HomeBanner }
    }
    </script>