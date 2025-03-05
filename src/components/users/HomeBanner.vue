<template>
    <div class="home-banner slider">
        <!-- Slide Container -->
        <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div class="slide">
            <div class="text" :class="{ 'animate-text': isTextVisible }">
              <h2>THE DWARF BASKET</h2>
              <p class="fixed-flexed"><span>MAKE A LASTING</span><span class="t-blue">IMPRESSION</span></p>
              <router-link to="/products"><button class="btn-default">EXPLORE SHOP</button></router-link>
            </div>
            <div class="image-holder-tilted">
              <img src="../../assets/images/man-8892263_1280.png" alt="Slide 2" />
            </div>
            <!-- moving class -->
             <div class="moving-bg">

              <!-- <div class="front-text f-width">
                <div class="front-text-inner d-flex f-height">
                  <div class="front-text-inner-inner f-wdith d-flex center-justified-content">
                      <div class="fixed-flexed"><h4>{{ title }} </h4> <span><router-link to="/">{{ home }}</router-link> {{ text }}</span></div>
                  </div>
              </div>
              </div> -->

              <div class="moving-bg-inner">
                <div class="small-card-1 random-movement"></div>
                <div class="small-card-2 random-movement-2"></div>
                <div class="small-card-3 random-movement-3"></div>
                <div class="small-card-4 random-movement-4"></div>
              </div>
             </div>
             <!-- page text -->
              <!-- <div class="front-text p-absolute f-width">
                <div class="front-text-inner d-flex f-height">
                    <div class="front-text-inner-inner f-wdith d-flex center-justified-content">
                        <div class="fixed-flexed"><h4>{{ title }} </h4> <span><router-link to="/">{{ home }}</router-link> {{ text }}</span></div>
                    </div>
                </div>
              </div> -->
              <!-- end of it -->
          </div>
    
        </div>
      </div>
</template>

<script>
export default{
    name:'HomeBanner',
    props: {
        title: String,
        text: String,
        home: String,
    },
    data() {
  return {
      currentIndex: 0, // Tracks the current slide index
      isTextVisible: false, // Controls text animation
    };
},
methods: {
    // Trigger text animation
    triggerTextAnimation() {
      this.isTextVisible = false;
      setTimeout(() => {
        this.isTextVisible = true;
      }, 50); // Small delay to reset the animation
    },
  },
  mounted() {
    // Trigger text animation on initial load
    this.triggerTextAnimation();
  },
}
</script>