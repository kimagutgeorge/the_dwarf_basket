<template>
    <NavBar/>
    <div class="about-banner">
        <HomeBanner title="Service" text="| Product" home="Home "/>
       </div>
    <!-- shop -->
   <!-- all services -->
   <div class="flex-container main-about f-width d-flex" style="height:fit-content;">
    <div class="q3-row d-flex">
        <!-- row -->
        <div class="half service-full-card">
            <img src="../../assets/images/pngwing.com.png">
        </div>
        <div class="half service-full-card d-flex">
            <h3>Description</h3>
            <p>
                A strong brand starts with a clear vision. We define your brand’s mission, values, and positioning to create a unique identity that resonates with your audience. Our team develops brand guidelines, including logo design, color schemes, typography, and messaging, ensuring consistency and a lasting impression across all platforms.
            </p>
            <div class="d-flex c-action">
                <div class="fixed-flexed">
                    <div class="hire-line"></div> 
                ENQUIRE <i class="fa-solid fa-paper-plane" style="font-size: 14px; margin-left:5px;"></i></div>
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
    name: 'SingleProductView',
    components: { NavBar, ClientFooter, HomeBanner }
    }
    </script>