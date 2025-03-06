<template>
<UserResponse v-if="responseClass.includes('displayed')" :class="['response-message', responseClass]" :dbResponse="dbResponse" @close="closeResponse" />
  <NavBar/>
  <HomeBanner/>
  <div class="flex-container home-cat">
    <div class="q3-row centered-content">
      <h2 class="main-title">Feature Product</h2>
      <p>Every single product that carries your brand is an opportunity to make a
        lasting impression</p>
        <div class="flex-container cats f-width">
          <!-- card -->
          <div class="cat-card-holder p-relative" v-for="(product, index) in products.slice(0, 8)" :key="index">
            <div class="cat-card-holder-img p-absolute">
              <img :src="product.imageUrl" alt="Product Not Found">
            </div>
            <RouterLink :to="{ name: 'Product Details', params: { product_name: product.product_name }}" :key="$route.fullPath"> 
              <div class="cat-card-holder-bg p-absolute"></div>
            </RouterLink>
            <div class="cat-card-holder-front p-absolute">
            <RouterLink :to="{ name: 'Product Details', params: { product_name: product.product_name }}" :key="$route.fullPath"> 
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </RouterLink>
            </div>
          </div>
          <!-- end -->
           <div class="f-width centered-content">
            <router-link to="/products">
              <button class="btn-default with-top-40">EXPLORE MORE <i class="fa-solid fa-angle-right"></i></button>
            </router-link>
           </div>
        </div>
    </div>
  </div>
  <!-- feature highlights -->
  <ClientStats/>
  <!-- feature category -->
  <div class="flex-container home-cat">
    <div class="q3-row centered-content">
      <h2 class="main-title">Top Category</h2>
      <p>Every single product that carries your brand is an opportunity to make a
        lasting impression</p>
    </div>
    <div class="cat-row">
      <div class="half">
        <div class="f-width image-container" v-for="(category, index) in categories.slice(0,1)" :key="index"  :style="{ backgroundImage: `url(${category.imageUrl})` }">
          <div class="cat-text">{{ category.category_name }}</div>
          <div class="shading-overlay"></div>
        </div>
      </div>
      <div class="half cats-2">
        <div class="f-width side-2 image-container" v-for="(category, index) in categories.slice(1,3)" :key="index"  :style="{ backgroundImage: `url(${category.imageUrl})` }">
          <div class="cat-text">Cooperate Gifts</div>
          <div class="shading-overlay"></div>
        </div>
      </div>
    </div>
    <!-- end -->
    <div class="f-width centered-content">
      <router-link to="/products">
        <button class="btn-default with-top-40">EXPLORE MORE <i class="fa-solid fa-angle-right"></i></button>
      </router-link>
     </div>
  </div>
  <!-- services -->
   <div class="flex-container home-cat services">
    <div class="half p-relative half-to-hide">
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
    <!-- END -->
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
    <div class="half sec">
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
   <ClientFooter/>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/users/NavBar.vue';
import ClientFooter from '@/components/users/ClientFooter.vue';
import ClientStats from '@/components/users/ClientStats.vue';
import HomeBanner from '@/components/users/HomeBanner.vue';
import UserResponse from '@/components/users/UserResponse.vue';

export default {
name: 'HomeView',
components: { NavBar, ClientFooter, ClientStats, HomeBanner, UserResponse },
data(){
  return {
    products: [],
    categories: [],
    responseClass: '',
    dbResponse: '',
  }
},
methods: {
  closeResponse() {
    this.responseClass = '';
    this.dbResponse = '';
  },
  async getCategories() {
    try {
        // Fetch products from the 'categories' table
        const { data, error } = await this.$supabase
          .from("categories")
          .select("*")
          .order("created_at", { ascending: false });

        // Handle errors
        if (error) {
          this.responseClass = "my-red displayed";
          this.dbResponse = "Failed to fetch categories. Please try again.";
          // console.error("Error fetching categories:", error);
          return;
        }

        // Fetch image URLs for each product
        this.categories = await Promise.all(
          data.map(async (category) => {
            // Get the public URL for the product image
            const { data: imageData } = await this.$supabase
              .storage
              .from("The Dwaf Basket") 
              .getPublicUrl(`categories/${category.category_image}`);
            return {
              ...category,
              imageUrl: imageData.publicUrl,
            };
          })
        );

      } catch (error) {
        // Handle unexpected errors
        this.responseClass = "my-red displayed";
        this.dbResponse = "Server offline. Please try again later.";
        // console.error("Unexpected error:", error);
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
        this.products = await Promise.all(
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
        );

        // console.log("Fetched products with image URLs:", this.products);

      } catch (error) {
        // Handle unexpected errors
        this.responseClass = "my-red displayed";
        this.dbResponse = "Server offline. Please try again later.";
        // console.error("Unexpected error:", error);
      }
    }
},
mounted(){
  this.getProducts()
  this.getCategories();
}
}
</script>
