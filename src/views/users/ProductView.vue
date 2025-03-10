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
              <select class="f-input-contact f-width" v-model="cat_search" @change="searchCategory">
                <option value="All">All Categories</option>
                <option v-for="(category, index) in categories" :key="index" :value="category.id">{{ category.category_name }}</option>
              </select>
            </div>
        </div>
    </div>
    <div class="width-70 d-flex shop-page">
    <!-- poroducts table -->
    <div class="custom-product-container">
      <!-- Product Grid -->
      <div class="custom-product-grid">
        <div class="custom-product-card custom-relative custom-width-q4" v-for="(product, index) in paginatedProducts" :key="index">
          <div class="custom-product-image custom-absolute">
            <img :src="product.imageUrl" alt="Product Not Found">
          </div>
          <RouterLink :to="{ name: 'Product Details', params: { product_name: product.product_name }}" :key="$route.fullPath">
            <div class="custom-product-overlay custom-absolute"></div>
          </RouterLink>
          <div class="custom-product-action custom-absolute">
            <RouterLink :to="{ name: 'Product Enquiry', params: { id: product.product_name }}" :key="$route.fullPath">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </RouterLink>
          </div>
        </div>
      </div>
  
      <!-- Pagination Controls -->
      <div class="custom-pagination-controls">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
      <!-- end of product table -->
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
    products: [],
    cat_search: '',
    currentPage: 1, // Current page number
    productsPerPage: 15, // Number of products per page (3 columns x 5 rows)
  }
},
computed: {
    // Calculate the total number of pages
    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },
    // Get the products for the current page
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.productsPerPage;
      const endIndex = startIndex + this.productsPerPage;
      return this.products.slice(startIndex, endIndex);
    },
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
    // Go to the previous page
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // Go to the next page
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
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

      } catch (error) {
        // Handle unexpected errors
        this.responseClass = "my-red displayed";
        this.dbResponse = "Server offline. Please try again later.";
      }
    },
    async searchCategory(){
      if(this.cat_search == 'All'){
        this.getProducts()
        return
      }
      try {
        // Fetch products from the 'products' table
        const { data, error } = await this.$supabase
          .from("products")
          .select("*")
          .order("created_at", { ascending: false })
          .match({ product_category: this.cat_search })

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
    },
  },
mounted(){
  this.getCategories()
  this.getProducts();
}
}
</script>

<style scoped>
/* Product Container */
.custom-product-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Product Grid */
.custom-product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px; /* Space between products */
}

/* Product Card */
.custom-product-card {
  position: relative;
  overflow: hidden;
  background-color: rgb(240, 240, 240);
}

.custom-product-image img {
  width: 100%;
  height: auto;
  display: block;
}

.custom-product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.custom-product-card:hover .custom-product-overlay {
  opacity: 1;
}

.custom-product-action {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: #ffffff;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.custom-product-action a{
  color: #000;
}

.custom-product-card:hover .custom-product-action {
  opacity: 1;
}

/* Pagination Controls */
.custom-pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
}

.custom-pagination-controls button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-pagination-controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.custom-pagination-controls button:hover:not(:disabled) {
  background-color: #0056b3;
}
</style>