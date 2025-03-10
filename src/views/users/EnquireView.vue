<template>
  <UserResponse v-if="responseClass.includes('displayed')" :class="['response-message', responseClass]" :dbResponse="dbResponse" @close="closeResponse" />
    <NavBar/>
    <div class="about-banner">
      <HomeBanner title="Contact Us" text="| Enquire" home="Home "/>
     </div>
    <!-- shop -->
    <!-- services -->
  <div class="flex-container main-about f-width" style="height:fit-content; overflow:visible;">
    <div class="half f-height">
      <div class="review-card">
        <div class="review-card-top fixed-flexed">
          <h2 class="main-title">Enquire</h2>
        </div>
        <div class="review-body">
          <p>
            For any inquiries, support, or collaboration, feel free to reach out to us. We’re here to assist you and look forward to connecting with you.
          </p>
        </div>
      </div>
    </div>
    <div class="half services">
      <div class="q3-row d-flex">
        <form @submit.prevent="addContact" class="f-width">
        <div class="f-width with-top">
          <label>Your Name <span class="must">*</span></label>
          <input type="text" class="f-width f-input-contact" v-model="name" required>
        </div>
        <div class="f-width with-top">
          <label> Email<span class="must">*</span></label>
          <input type="email" class="f-width f-input-contact" v-model="email" required>
        </div>
        <div class="f-width with-top" >
          <label > Subject</label><br>
          <input type="text" class="f-width f-input-contact" v-model="subject" required>
        </div>
        <div class="f-width with-top" >
          <label > Message<span class="must">*</span></label><br>
          <textarea class="f-width f-input-contact"  v-model="message" required></textarea>
        </div>
        <div class="f-width with-top" >
          <button class="btn-default" style="margin-left:2.5%" >SEND</button>
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
    import HomeBanner from '@/components/users/HomeBanner.vue';
    import UserResponse from '@/components/users/UserResponse.vue';
    import axios from 'axios';
    
    export default {
    name: 'EnquireView',
    props: ['id'],
    components: { NavBar, ClientFooter, HomeBanner, UserResponse },
    data(){
      return{
        responseClass: '',
        dbResponse: '',
        name:'',
        email:'',
        subject:'',
        message:'',
      }
    },
    methods: {
      closeResponse() {
      this.responseClass = '';
      this.dbResponse = '';
    },
    async addContact(){
      // if(this.name == '' || this.email == '' || this.subject == '' || this.message == ''){
      //   this.responseClass = 'my-red displayed';
      //   this.dbResponse = 'Please Fill the Required Fields';
      //   return
      // }
      //insert
      try{
        const {error} = await this.$supabase
        .from('enquiries')
        .insert([
          {
            enquiry_name: this.name,
            enquiry_email: this.email,
            enquiry_subject: this.subject,
            enquiry_message: this.message,
            enquiry_service_product: this.id,
          },
        ])
        //submit
        const formData = new FormData()
        formData.append("name", this.name)
        formData.append("email", this.email)
        formData.append("subject", this.subject)
        formData.append("message", this.message)
        formData.append("service", this.id)
        //submit
        const response = await axios.post('http://127.0.0.1:5000/send-enquiry', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
        }});
        const response_data = response.data
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
    }
    }
    }
    </script>