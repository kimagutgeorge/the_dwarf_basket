<template>
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
          <li class="touch" v-for="(category, index) in categories.slice(0, 8) " :key="index">{{ category.category_name }}</li>
        </div>
      </div>
   </div>
  </div>
  <!-- footer bottom -->
  <div class="footer-bottom f-width">
    <p>Copyright &copy; 2025, The Dwarf Basket. All Rights Reserved</p>
  </div>
  <!-- back to top -->
  <button
  v-if="showButton"
  class="back-to-top"
  @click="scrollToTop"
>
<i class="fa-solid fa-angle-up"></i>
</button>
</template>
<script>
export default {
    name: 'ClientFooter',
    data() {
    return {
      showButton: false, // Controls visibility of the button
      categories: []
    };
  },
  methods: {
    // Scroll to the top of the page
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling
      });
    },
    // Check scroll position to show/hide the button
    handleScroll() {
      this.showButton = window.scrollY > 200; // Show button after scrolling 200px
    },
    async getCategories() {
        try {
            const { data, error } = await this.$supabase
                .from("categories")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                this.responseClass = 'my-red displayed';
                this.dbResponse = 'Failed to fetch categories. Please try again.';
            } else {
                this.categories = data;
            }
        } catch (error) {
            this.responseClass = 'my-red displayed';
            this.dbResponse = 'Server Offline. Please try again later.';
        }
    },
  },
  mounted() {
    this.getCategories();
    // Add scroll event listener when the component is mounted
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Remove scroll event listener when the component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
};

</script>