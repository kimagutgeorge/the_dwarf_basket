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
            <img :src="product_image">
        </div>
        <div class="half service-full-card d-flex">
            <h3>{{ pro_name }}</h3>
            <h4 style="margin-top:10px;"><span style="background-color: rgb(0, 130, 189); color: #ffffff; padding: 5px; ">CATEGORY:</span> <span style="background-color: transparent; color: #000;">{{ category }}</span></h4>
            <p>
                {{ description }}
            </p>
            <div class="d-flex c-action">
                <div class="fixed-flexed" style="border:1px solid rgb(0, 130, 189); width:fit-content; padding: 5px 10px;">
                    <div class="hire-line"></div> 
                    <RouterLink  style="color:rgb(0, 130, 189)" :to="{ name: 'Product Enquiry', params: { id: product_name }}" :key="$route.fullPath"> ENQUIRE <i class="fa-solid fa-paper-plane" style="font-size: 14px; margin-left:5px;"></i></RouterLink></div>
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
    components: { NavBar, ClientFooter, HomeBanner },
    props: ['product_name'],
    data() {
        return {
            responseClass: '',
            dbResponse: '',
            products: [],
            pro_name: '',
            description: '',
            category:'',
            product_image: ''
        }
    },
    methods: {
    closeResponse() {
        this.responseClass = '';
        this.dbResponse = '';
      },
    /* get products */
    async getProducts() {
      try {
        // Fetch products from the 'products' table
        const { data, error } = await this.$supabase
        .from("products")
        .select(`
            *,
            categories (category_name)
        `)
        .match({ product_name: this.product_name })
        .order("created_at", { ascending: false });
        // Handle errors
        if (error) {
          this.responseClass = "my-red displayed";
          this.dbResponse = "Failed to fetch product. Please try again.";
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

        //single product
        const product = this.products[0]

        this.pro_name = product.product_name
        this.description = product.product_description
        this.category = product.categories.category_name
        this.product_image = product.imageUrl

        

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
    this.getProducts();
}
    }
    </script>