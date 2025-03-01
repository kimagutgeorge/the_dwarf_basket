<template>
  <NavBar/>
  <div class="home-banner slider">
    <!-- Slide Container -->
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <!-- Slide 1 -->
      <!-- <div class="slide">
        <img src="./../../assets/images/g4.png" alt="Slide 1" />
        <div class="text" :class="{ 'animate-text': isTextVisible }">
          <h2>Slide 1 Title</h2>
          <p>This is the description for slide 1.</p>
        </div>
      </div> -->

      <!-- Slide 2 -->
      <div class="slide">
        <div class="text" :class="{ 'animate-text': isTextVisible }">
          <h2>THE DWARF BASKET</h2>
          <p class="fixed-flexed"><span>MAKE A LASTING</span><span class="t-blue">IMPRESSION</span></p>
          <button class="btn-default">EXPLORE</button>
        </div>
        <div class="image-holder-tilted">
          <img src="../../assets/images/pngwing.com.png" alt="Slide 2" />
        </div>
        <!-- moving class -->
         <div class="moving-bg">
          <div class="moving-bg-inner">
            <div class="small-card-1 random-movement"></div>
            <div class="small-card-2 random-movement-2"></div>
            <div class="small-card-3 random-movement-3"></div>
            <div class="small-card-4 random-movement-4"></div>
          </div>
         </div>
      </div>

    </div>
  </div>
  <div class="flex-container home-cat">
    <div class="q3-row centered-content">
      <h2 class="main-title">Feature Product</h2>
      <p>Every single product that carries your brand is an opportunity to make a
        lasting impression</p>
        <div class="flex-container centered-content">
          <div class="cat-card active-card">
            All
          </div>
          <div class="cat-card">
            Category Two
          </div>
          <div class="cat-card">
            Category Two
          </div>
          <div class="cat-card">
            Category Two
          </div>
          <div class="cat-card">
            Category Two
          </div>
          <div class="cat-card">
            Category Two
          </div>
        </div>
        <div class="flex-container cats">
          <!-- card -->
          <div class="cat-card-holder p-relative">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
          <!-- end -->
          <!-- card -->
          <div class="cat-card-holder p-relative">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
          <!-- end -->
          <!-- card -->
          <div class="cat-card-holder p-relative">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
          <!-- end -->
          <!-- card -->
          <div class="cat-card-holder p-relative">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
          <!-- end -->
          <!-- card -->
          <div class="cat-card-holder p-relative">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
          <!-- end -->
          <!-- card -->
          <div class="cat-card-holder p-relative">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
          <!-- end -->
          <!-- card -->
          <div class="cat-card-holder p-relative">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
          <!-- end -->
          <!-- card -->
          <div class="cat-card-holder p-relative">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
          <!-- end -->
        </div>
    </div>
  </div>
  <!-- feature highlights -->
  <div class="f-row stats centered-content p-relative">
    <div class="stats-bg p-absolute"></div>
    <div class="q3-row flex-container p-absolute">
      <!-- row -->
      <div class="h-card p-relative">
        <div class="h-card-inner p-relative">
          <div class="h-card-bg p-absolute">
            <i class="fa-solid fa-plane t-white"></i>
          </div>
          <div class="h-card-bg-1 p-absolute"></div>
          <div class="h-card-text">
            <h2>1000</h2>
            <p>PROJECTS COMPLETE</p>
          </div>
        </div>
      </div>
      <!-- row -->
      <div class="h-card p-relative">
        <div class="h-card-inner p-relative">
          <div class="h-card-bg p-absolute">
            <i class="fa-solid fa-face-smile t-white"></i>
          </div>
          <div class="h-card-bg-1 p-absolute"></div>
          <div class="h-card-text">
            <h2>235</h2>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
      <!-- row -->
      <div class="h-card p-relative">
        <div class="h-card-inner p-relative">
          <div class="h-card-bg p-absolute">
            <i class="fa-solid fa-heart t-white"></i>
          </div>
          <div class="h-card-bg-1 p-absolute"></div>
          <div class="h-card-text">
            <h2>800</h2>
            <p>LOVE US</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- feature category -->
  <div class="flex-container home-cat">
    <div class="q3-row centered-content">
      <h2 class="main-title">Top Category</h2>
      <p>Every single product that carries your brand is an opportunity to make a
        lasting impression</p>
    </div>
    <div class="cat-row">
      <div class="half">
        <div class="f-width image-container">
          <div class="cat-text">Business Cards</div>
          <div class="shading-overlay"></div>
        </div>
      </div>
      <div class="half">
        <div class="f-width side-2 image-container">
          <div class="cat-text">Business Cards</div>
          <div class="shading-overlay"></div>
        </div>
        <div class="f-width side-2 image-container">
          <div class="cat-text">Business Cards</div>
          <div class="shading-overlay"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- services -->
   <div class="flex-container home-cat services">
    <div class="half p-relative">
      <div class="bg-flower-1 p-absolute"></div>
      <div class="bg-flower-2 p-absolute"></div>
      <div class="service-img p-absolute">
        <img src="../../assets/images/jacket-2821961_1280.jpg">
      </div>
    </div>
    <div class="half">
      <div class="service-description">
        <h2 class="main-title">Our Services</h2>
        <p>Our services include: editorial design, exhibition design,
          industrial/product design, packaging, brand identity, marketing campaigns,
          digital design</p>
          <div class="flex-container">
            <div class="half"><i class="fa-solid fa-angle-right"></i> Editorial design</div>
            <div class="half"><i class="fa-solid fa-angle-right"></i> Exhibition design</div>
            <div class="half"><i class="fa-solid fa-angle-right"></i> Product design</div>
            <div class="half"><i class="fa-solid fa-angle-right"></i> Marketing design</div>
          </div>
          <div class="f-width">
            <button class="btn-default">EXPLORE MORE</button>
          </div>
      </div>
    </div>
   </div>
   <!-- reviews -->
   <div class="flex-container home-cat reviews f-width">
    <div class="half">
      <div class="review-card">
        <div class="review-card-top fixed-flexed">
          <img src="../../assets/logo/profile.png"><span>George Kimagut</span>
        </div>
        <div class="review-body">
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div class="fixed-flexed">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div class="review-pagination fixed-flexed">
        <button class="paginate-btn"><i class="fa-solid fa-angle-left"></i></button>
        <button class="paginate-btn"><i class="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
    <div class="half">
      <div class="review-topic h-card">
          <div class="h-card-bg p-absolute">
            <div class="h-card-inner-text">
              <p>"</p>
              <p>What our </p>
              <p>customers </p>
              <p>are saying?</p>
              
            </div>
          </div>
          <div class="h-card-bg-1 p-absolute"></div>
      </div>
    </div>
   </div>
   <!-- footer -->
   <div class="flex-container home-cat footer f-width">
    <div class="col-30">
      <div class="col-body">
        <div class="fixed-flexed">
          <img src="../../assets/logo/g11.png" class="logo-img"> <span>Dwarf Basket</span>
        </div>
        <p>Our passion for design with straight speaking strategy
          to create thoughtful and engaging solutions, ensures we
          serve our clients – big and small – year after year.</p>
          <div class="fixed-flexed footer-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
      </div>
    </div>
    <div class="col-20">
      <div class="col-body">
        <h4>About Us</h4>
        <div class="col-body-link">
          <li><router-link to="/about-us" class="footer-link fixed-flexed"><i class="fa-solid fa-angle-right"></i> About</router-link></li>
          <li><router-link to="/products" class="footer-link fixed-flexed"><i class="fa-solid fa-angle-right"></i> Products</router-link></li>
          <li><router-link to="/services" class="footer-link fixed-flexed"><i class="fa-solid fa-angle-right"></i> Services</router-link></li>
          <li><router-link to="/contact-us" class="footer-link fixed-flexed"><i class="fa-solid fa-angle-right"></i> Contact</router-link></li>
        </div>
      </div>
    </div>
    <div class="col-20">
      <div class="col-body">
        <h4>Get In Touch</h4>
        <div class="col-body-link">
          <li class="touch fixed-flexed"><i class="fa-solid fa-location-pin"></i> Rhapta Heights, 2nd Floor, Rhapta Rd, Westlands</li>
          <li class="touch fixed-flexed"><i class="fa-solid fa-phone"></i> +254 759 200 998</li>
          <li class="touch fixed-flexed"><i class="fa-solid fa-envelope"></i> info@thedwarfbasket.com</li>
        </div>
      </div>
    </div>
    <div class="col-30">
      <div class="col-body">
        <h4>Categories</h4>
        <div class="col-body-link">
          <li class="touch">Tags</li>
          <li class="touch">ThermoRoll Labels</li>
          <li class="touch">Sustainable Labels</li>
          <li class="touch">Office Stationary</li>
        </div>
      </div>
   </div>
  </div>
  <!-- footer bottom -->
  <div class="footer-bottom f-width">
    <p>Copyright &copy; 2025, The Dwarf Basket. All Rights Reserved</p>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/users/NavBar.vue';

export default {
name: 'HomeView',
components: { NavBar },
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
