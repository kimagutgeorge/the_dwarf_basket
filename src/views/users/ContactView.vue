<template>
<UserResponse v-if="responseClass.includes('displayed')" :class="['response-message', responseClass]" :dbResponse="dbResponse" @close="closeResponse" />
    <NavBar/>
    <div class="about-banner">
      <HomeBanner title="Contact Us" text="| Contact us" home="Home "/>
     </div>
    <!-- shop -->
    <!-- services -->
  <div class="flex-container main-about f-width"  style="height:fit-content !important; overflow:visible;">
    <div class="half f-height">
      <div class="review-card with-bg">
        <div class="review-card-top fixed-flexed">
          <h2 class="main-title">Get In Touch</h2>
        </div>
        <div class="review-body">
          <p>
            For any inquiries, support, or collaboration, feel free to reach out to us. We’re here to assist you and look forward to connecting with you.
          </p>
        </div>
      </div>
    </div>
    <div class="half services" >
    <div class="q3-row d-flex">
      <form @submit.prevent="addContact" class="f-width">
      <div class="f-width with-top">
        <label>Your Name <span class="must">*</span></label>
        <input type="text" v-model="name" class="f-width f-input-contact" required>
      </div>
      <div class="f-width with-top">
        <label> Email<span class="must">*</span></label>
        <input type="email" v-model="email" class="f-width f-input-contact" required>
      </div>
      <div class="f-width with-top" >
        <label > Subject <span class="must">*</span></label><br>
        <input type="text" v-model="subject" class="f-width f-input-contact" required>
      </div>
      <div class="f-width with-top" >
        <label > Message<span class="must">*</span></label><br>
        <textarea class="f-width f-input-contact" v-model="message" required></textarea>
      </div>
      <div class="f-width with-top" >
        <button class="btn-default" style="margin-left:2.5%">SEND</button>
      </div>
    </form>
    </div>
   </div>
   </div>
    <ClientFooter/>
    </template>
    
    <script>
    import NavBar from '@/components/users/NavBar.vue';
    import ClientFooter from '@/components/users/ClientFooter.vue';
    // import PageBanner from '@/components/users/PageBanner.vue';
    import HomeBanner from '@/components/users/HomeBanner.vue';
    import UserResponse from '@/components/users/UserResponse.vue';
    import axios from 'axios';
    
    export default {
    name: 'ContactView',
    components: { NavBar, ClientFooter, HomeBanner, UserResponse },
    data(){
      return{
        responseClass: '',
        dbResponse: '',
        name:'',
        email:'',
        subject:'',
        message:'',
        config: [],
      }
    },
    methods: {
      closeResponse() {
      this.responseClass = '';
      this.dbResponse = '';
    },
    async addContact(){
      if(this.name == '' || this.email == '' || this.subject == '' || this.message == ''){
        this.responseClass = 'my-red displayed';
        this.dbResponse = 'Please Fill the Required Fields';
        return
      }
      //insert
      try{
        const {error} = await this.$supabase
        .from('contacts')
        .insert([
          {
            contact_name: this.name,
            contact_email: this.email,
            contact_subject: this.subject,
            contact_message: this.message,
          },
        ])
        const formData = new FormData()
        formData.append("name", this.name)
        formData.append("email", this.email)
        formData.append("subject", this.subject)
        formData.append("message", this.message)
        //submit
        const response = await axios.post('http://127.0.0.1:5000/send-email', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
        }});
        const response_data = response.data
        // console.log(response_data.message)
        if(response_data.message == '1'){
          /* response */
        this.responseClass = 'my-success displayed';
        this.dbResponse = 'Thank you. We will get back to you.';
        }else{
          /* response */
          this.responseClass = 'my-red displayed';
          this.dbResponse = 'Failed, please retry.';
        }
        

        //clear
        this.name= ''
        this.email= ''
        this.subject= ''
        this.message= ''
        
        if(error == ''){
          console.log(error)
        }
      }catch(error){
        this.responseClass = 'my-red displayed';
        this.dbResponse = 'Server Offline. Please try again later.';
      }
    },
    
    }
  }
    
    </script>