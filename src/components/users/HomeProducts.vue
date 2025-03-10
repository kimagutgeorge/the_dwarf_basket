<template>
    <UserResponse v-if="responseClass.includes('displayed')" :class="['response-message', responseClass]" :dbResponse="dbResponse" @close="closeResponse" />
    <div class="custom-container centered-content">
    <h2 class="custom-title">Feature Product</h2>
    <p>Every single product that carries your brand is an opportunity to make a lasting impression</p>

    <!-- Slider Wrapper -->
    <div class="custom-slider-wrapper">
      <!-- Previous Button -->
      <button class="custom-slider-nav custom-prev" @click="prevSlide">
        <i class="fa-solid fa-angle-left"></i>
      </button>

      <!-- Slider Content -->
      <div class="custom-slider-content">
        <div class="custom-slider-inner" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <!-- Product Card -->
          <div class="custom-product-card" v-for="(product, index) in products.slice(0, 8)" :key="index">
            <div class="custom-product-image">
              <img :src="product.imageUrl" alt="Product Not Found">
            </div>
            <RouterLink :to="{ name: 'Product Details', params: { product_name: product.product_name }}" :key="$route.fullPath">
              <div class="custom-product-overlay"></div>
            </RouterLink>
            <div class="custom-product-action">
              <RouterLink :to="{ name: 'Product Details', params: { product_name: product.product_name }}" :key="$route.fullPath">
                <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
              </RouterLink>
            </div>
          </div>
          <!-- End Product Card -->
        </div>
      </div>

      <!-- Next Button -->
      <button class="custom-slider-nav custom-next" @click="nextSlide">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>

    <!-- Explore More Button -->
    <div class="custom-explore-more centered-content">
      <router-link to="/products">
        <button class="custom-explore-btn">EXPLORE MORE <i class="fa-solid fa-angle-right"></i></button>
      </router-link>
    </div>
  </div>
  </template>

<script>
import UserResponse from '@/components/users/UserResponse.vue';
export default {
    name: 'HomeProducts',
    components: { UserResponse },
  data() {
    return {
      products: [],
      currentSlide: 0, // Tracks the current slide
      slidesToShow: 4, // Number of slides to show at once
    categories: [],
    responseClass: '',
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    nextSlide() {
        if(this.currentSlide >= 1){
            return
        }
      if (this.currentSlide < this.products.length - this.slidesToShow) {
        this.currentSlide++;
      }
    },
    async getProducts() {
      try {
        // Fetch products from the 'products' table
        const { data, error } = await this.$supabase
          .from("products")
          .select("*")
          .order("created_at", { ascending: false });

        // Handle errors
        if (error) {
          this.responseClass = "my-red displayed";
          this.dbResponse = "Failed to fetch products. Please try again.";
          // console.error("Error fetching products:", error);
          return;
        }

        // Fetch image URLs for each product
        this.products = (await Promise.all(
            data.map(async (product) => {
                // Get the public URL for the product image
                const { data: imageData } = await this.$supabase
                .storage
                .from("The Dwaf Basket")
                .getPublicUrl(`products/${product.product_image}`);

                return {
                ...product,
                imageUrl: imageData.publicUrl,
                };
            })
        )).slice(0, 8);

        // console.log("Fetched products with image URLs:", this.products);

      } catch (error) {
        // Handle unexpected errors
        this.responseClass = "my-red displayed";
        this.dbResponse = "Server offline. Please try again later.";
        // console.error("Unexpected error:", error);
      }
    },
  },
  mounted(){
    this.getProducts()
  }
};
</script>

<style scoped>
/* Container */
.custom-container {
  width: 100%;
  /*max-width: 1200px;*/
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.custom-title {
  font-size: 2rem;
  margin-bottom: 10px;
}

/* Slider Wrapper */
.custom-slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 20px 0;
}

/* Slider Content */
.custom-slider-content {
  width: 100%;
  overflow: hidden;
}

.custom-slider-inner {
  display: flex;
  transition: transform 0.5s ease;
}

/* Product Card */
.custom-product-card {
  flex: 0 0 calc(25% - 20px); /* Adjust based on slidesToShow */
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}

.custom-product-image img {
  width: 100%;
  height: auto;
  display: block;
}

.custom-product-overlay,
.custom-product-action {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.custom-product-overlay {
  background: #000;
  opacity: 0.2;
  transition: opacity 0.3s ease;
}
.custom-product-action a{
    background-color: #ffffff;
    padding: 5px;
    font-size: 14px;
    color: #000;
}
.custom-product-action {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.custom-product-card:hover .custom-product-overlay{
/*.custom-product-card:hover .custom-product-action {*/
  opacity: 0.6;
}
.custom-product-card:hover .custom-product-action {
opacity: 1;
}

/* Slider Navigation Buttons */
.custom-slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease;
}

.custom-slider-nav:hover {
  background: rgba(0, 0, 0, 0.8);
}

.custom-prev {
  left: 0px;
}

.custom-next {
  right: 0px;
}

/* Explore More Button */
.custom-explore-btn {
  background-color: rgb(0, 130, 189);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.custom-explore-btn:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .custom-product-card {
    flex: 0 0 calc(33.33% - 20px); /* Show 3 cards */
  }
}

@media (max-width: 768px) {
  .custom-product-card {
    flex: 0 0 calc(50% - 20px); /* Show 2 cards */
  }
}

@media (max-width: 600px) {
    .custom-container {
        width: 94%;
      }
  }

@media (max-width: 480px) {
    .custom-container {
        width: 92%;
      }
  .custom-product-card {
    flex: 0 0 calc(100% - 20px); /* Show 1 card */
  }
}
</style>