<template>
<UserResponse v-if="responseClass.includes('displayed')" :class="['response-message', responseClass]" :dbResponse="dbResponse" @close="closeResponse" />
<NavBar/>
<div class="about-banner">
  <HomeBanner title="Product" text="| Product" home="Home "/>
 </div>
<!-- shop -->
<div class="flex-container products q3-row">
    <div class="width-30">
        <div class="search-box fixed-flexed f-90">
            <button class="btn-search"><i class="fa-solid fa-search"></i></button>
            <input type="text" class="f-input" placeholder="Search...">
        </div>
        <div class="f-width product-cats">
            <h4>SERVICES CATEGORIES</h4>
            <div class="the-stats">
              <select class="f-input-contact f-width">
                <option v-for="(category, index) in categories" :key="index" :value="category.id">{{ category.category_name }}</option>
              </select>
            </div>
        </div>
    </div>
    <div class="width-70 d-flex shop-page">
    <!-- card -->
      <div class="cat-card-holder p-relative width-q4" v-for="(product, index) in products" :key="index">
          <div class="cat-card-holder-img p-absolute">
            <img :src="product.imageUrl" alt="Product Not Found">
            
          </div>
          <RouterLink :to="{ name: 'Product Details', params: { product_name: product.product_name }}" :key="$route.fullPath"> 
            <div class="cat-card-holder-bg p-absolute"></div>
          </RouterLink>
          <div class="cat-card-holder-front p-absolute">
            <RouterLink :to="{ name: 'Product Enquiry', params: { id: product.product_name }}" :key="$route.fullPath"> 
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </RouterLink>
          </div>
        </div>
      <!-- end -->
      <!-- pagination -->
      <div class="f-width shop-pagination">
        <div class="shop-btn fixed-flexed">
          <button class="btn-default"><i class="fa-solid fa-angle-left"></i></button>
        <button class="btn-default page-is-active">1</button>
        <button class="btn-default">2</button>
        <button class="btn-default"><i class="fa-solid fa-angle-right"></i></button>
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
import UserResponse from '@/components/users/UserResponse.vue';

export default {
name: 'ProductView',
components: { NavBar, ClientFooter, HomeBanner, UserResponse },
data () {
  return{
    responseClass: '',
    dbResponse: '',
    categories: [],
    products: []
  }
},
methods: {
  closeResponse() {
        this.responseClass = '';
        this.dbResponse = '';
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
    /* get products */
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
              .from("The Dwaf Basket") // Replace with your bucket name
              .getPublicUrl(`products/${product.product_image}`); // Adjust path if needed

            // Add the image URL to the product object
            return {
              ...product,
              imageUrl: imageData.publicUrl, // Add the image URL to the product
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
  this.getCategories()
  this.getProducts();
}
}
</script>