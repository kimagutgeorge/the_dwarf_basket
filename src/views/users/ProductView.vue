<template>
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
              <select name="" id="" class="f-input-contact f-width">
                <option value="">Office Stationary</option>
                <option value="">Indoor Printing</option>
                <option value="">Outdoor Printing</option>
                <option value="">Office Stationary</option>
                <option value="">Drink-ware</option>
              </select>
            </div>
        </div>
    </div>
    <div class="width-70 d-flex shop-page">
        <!-- card -->
        <div class="cat-card-holder p-relative width-q4">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
        <!-- card -->
        <div class="cat-card-holder p-relative width-q4">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
        <!-- card -->
        <div class="cat-card-holder p-relative width-q4">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
        <!-- card -->
        <div class="cat-card-holder p-relative width-q4">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
        <!-- card -->
        <div class="cat-card-holder p-relative width-q4">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
        <!-- card -->
        <div class="cat-card-holder p-relative width-q4">
            <div class="cat-card-holder-img p-absolute">
              <img src="../../assets/images/jacket-2821961_1280.jpg">
            </div>
            <div class="cat-card-holder-bg p-absolute"></div>
            <div class="cat-card-holder-front p-absolute">
              <p>ENQUIRE <i class="fa-solid fa-paper-plane"></i></p>
            </div>
          </div>
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

export default {
name: 'ProductView',
components: { NavBar, ClientFooter, HomeBanner }
}
</script>