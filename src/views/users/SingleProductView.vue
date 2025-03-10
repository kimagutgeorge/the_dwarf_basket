<template>
  <UserResponse v-if="responseClass.includes('displayed')" :class="['response-message', responseClass]" :dbResponse="dbResponse" @close="closeResponse" />
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
            <div class="f-width fixed-flexed pro-btn">
              <span @click="viewDescription" :class="{'is-active' : desc_ription}">DESCRIPTION</span>
              <span @click="viewReviews" :class="{'is-active' : reviews}">REVIEWS</span>
            </div>
            <div class="f-width" v-if="desc_ription">
              <p>
                {{ description }}
            </p>
            </div>
            <div class="f-width" v-if="reviews">
              <div class="review-tab f-width">
                <div class="rev-card f-width" v-for="(review, index) in product_reviews.slice(0, 8)" :key="index">
                  <h5>{{ review.reviewer }}</h5>
                  <p>{{ review.review }}</p>
                  <div class="review-stars-btn">
                    <span
                      v-for="star in review.review_stars"
                      :key="star"
                      class="star active"
                    >
                      &#9733;
                    </span>
                  </div>
                </div>
              </div>
              <div class="f-width write-review">
                <form class="f-width" @submit.prevent="leaveReview" style="margin-top:30px;">
                <label>Your Name <span class="must">*</span></label>
                <input type="text" v-model="review_name" style="border-radius:0px; margin-left:0%; margin-bottom:20px;" class="f-width f-input-contact" required>

                <label>Review <span class="must">*</span></label>
                <textarea class="f-width f-input-contact" style="height: 50px; border-radius:0px; margin-left: 0%; margin-bottom:20px;" v-model="review_message" required></textarea>
                <label>Rating</label>
                <div class="review-stars-btn">
                  <span
                    v-for="star in 5"
                    :key="star"
                    class="star"
                    :class="{ active: star <= selectedRating }"
                    @click="setRating(star)"
                  >
                    &#9733;
                  </span>
                </div>
                <button class="btn-default" style="margin-left:0%; border-radius:0px; margin-top:10px;">Leave A Review</button>
                </form>
              </div>
            </div>
            
            <div class="d-flex c-action">
              <div class="fixed-flexed" style="border:1px solid rgb(0, 130, 189); width:fit-content; padding: 5px 10px;">
                  <div class="hire-line"></div> 
                  <RouterLink  style="color:rgb(0, 130, 189)" :to="{ name: 'Product Enquiry', params: { id: product_name }}" :key="$route.fullPath"> ENQUIRE <i class="fa-solid fa-paper-plane" style="font-size: 14px; margin-left:5px;"></i></RouterLink></div>
              </div>
        </div>
    </div>
   </div>
   <!-- other products -->
   <div class="flex-container home-cat">
    <HomeProducts/>
    </div>
    <ClientFooter/>
    </template>
    
    <script>
    import NavBar from '@/components/users/NavBar.vue';
    import ClientFooter from '@/components/users/ClientFooter.vue';
    import HomeBanner from '@/components/users/HomeBanner.vue';
    import UserResponse from '@/components/users/UserResponse.vue';
    import HomeProducts from '@/components/users/HomeProducts.vue';
    
    export default {
    name: 'SingleProductView',
    components: { NavBar, ClientFooter, HomeBanner, UserResponse, HomeProducts },
    props: ['product_name'],
    data() {
        return {
            responseClass: '',
            dbResponse: '',
            products: [],
            pro_name: '',
            description: '',
            category:'',
            product_image: '',
            desc_ription: true,
            reviews: false,
            selectedRating: 0,
            review_name: '',
            review_message: '',
            pro_id: '',
            status: '0',
            product_reviews: []
        }
    },
    methods: {
    closeResponse() {
        this.responseClass = '';
        this.dbResponse = '';
      },
      viewReviews(){
        this.desc_ription = false
        this.reviews = true
      },
      setRating(rating) {
        // Update the selected rating
        this.selectedRating = rating;
      },
      viewDescription(){
        this.desc_ription = true
        this.reviews = false
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
        this.pro_id = product.id
        // console.log("Fetched products with image URLs:", this.products);

      } catch (error) {
        // Handle unexpected errors
        this.responseClass = "my-red displayed";
        this.dbResponse = "Server offline. Please try again later.";
        // console.error("Unexpected error:", error);
      }
    },
    async leaveReview(){
      try{
        const {error} = await this.$supabase
        .from('reviews')
        .insert([
          {
            reviewer: this.review_name,
            review: this.review_message,
            review_stars: this.selectedRating,
            review_status: this.status,
            product: this.pro_id
          },
        ])
        /* done */
        this.responseClass = 'my-success displayed';
        this.dbResponse = 'Thank you for the review.';

        this.getReviews();

        if(error){
          console.log(error)
        }  

      }catch(error){
        this.responseClass = 'my-red displayed';
        this.dbResponse = 'Server Offline. Please try again later.';
      }
    },
    /* get reviews */
      /* get products */
      async getReviews() {
        try {
          const { data, error } = await this.$supabase
          .from("reviews")
          .select(`
            *,
            products!inner (product_name)
          `)
          .eq('products.product_name', this.product_name) 
          .eq('review_status', 1);

            if (error) {
              console.log(error)
                this.responseClass = 'my-red displayed';
                this.dbResponse = 'Failed to fetch reviews. Please try again.';
            } else {
                this.product_reviews = data;
                console.log(this.product_reviews)
            }
        } catch (error) {
            this.responseClass = 'my-red displayed';
            this.dbResponse = 'Server Offline. Please try again later.';
        }
    },
},
mounted(){
    this.getProducts();
    this.getReviews();
}
    }
    </script>