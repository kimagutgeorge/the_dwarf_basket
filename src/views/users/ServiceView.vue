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
          <p>At The Dwarf Basket, we help businesses build strong and memorable brands through creative design and strategic marketing. Whether you need a logo, website, social media branding, or product packaging, we craft visuals and messages that connect with your audience.</p>

          <p>Our services also include digital marketing, print advertising, and corporate branding to ensure your brand stands out across all platforms. Whether you're starting fresh or refreshing your identity, we tailor our solutions to bring your vision to life.</p>
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
            <i class="fa-solid fa-print"></i>
            <h3> Brand Strategy & <span class="default-color">Identity </span></h3>
            <p>
                A strong brand starts with a clear vision. We define your brand’s mission, values, and positioning to create a unique identity that resonates with your audience. Our team develops brand guidelines, including logo design, color schemes, typography, and messaging, ensuring consistency and a lasting impression across all platforms.
            </p>
            <div class="d-flex c-action">
                <div class="fixed-flexed">
                    <div class="hire-line"></div> 
                HIRE US NOW</div>
                </div>
        </div>
        <!-- row -->
        <div class="half service-full-card d-flex right-content">
            <i class="fa-brands fa-slack"></i>
            <h3> Logo & Visual <span class="default-color">Identity</span></h3>
            <p>
                Your logo is the face of your brand, and we craft custom, memorable designs that reflect your identity. Beyond logos, we provide complete visual identity packages, including business cards, letterheads, and digital assets, ensuring a professional and cohesive brand presence across all touchpoints.
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
            <i class="fa-solid fa-share-nodes"></i>
            <h3> Social Media <span class="default-color"> Branding</span></h3>
            <p>
                We help brands establish a strong and consistent presence on social media by designing profile assets, ad creatives, and post templates that align with their identity. Additionally, we develop content strategies and posting schedules to boost engagement and audience growth.
            </p>
            <div class="d-flex c-action">
                <div class="fixed-flexed">
                    <div class="hire-line"></div> 
                HIRE US NOW</div>
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
    name: 'ServiceView',
    components: { NavBar, ClientFooter, HomeBanner }
    }
    </script>