<template>
  <NavBar/>
  <!-- <PageBanner title="About Us" text="About" /> -->
   <div class="about-banner">
    <HomeBanner title="About Us" text="| About" home="Home "/>
   </div>
  <!-- below about -->
   <div class="flex-container main-about top-about f-width" style="height: fit-content; overflow:visible;">
    <div class="half f-height">
      <div class="review-card">
        <div class="review-card-top fixed-flexed">
          <h2 class="main-title">Learn About Dwarf Basket</h2>
        </div>
        <div class="review-body">
          <p>
            At Dwarf Basket, we specialize in crafting high-quality branded merchandise, corporate gifts, and safety solutions to enhance your brand presence. With a commitment to excellence, we design, source, and package customized products that leave a lasting impression. Whether you're looking for promotional giveaways, protective workwear, or premium labels, we tailor our offerings to meet your needs. Our passion for branding and quality ensures that every product we deliver strengthens your identity and connects you with your audience.
          </p>
        </div>
      </div>
    </div>
    <div class="half">
      <img src="../../assets/images/g11.png" class="width-60">
    </div>
   </div>
   <!-- stats -->
  <ClientStats/>
  <!-- highlight cards -->
  <div class="flex-container about-cards width-75">
    <!-- card -->
    <div class="card width-q4 d-flex">
      <div class="card-inner d-flex">
        <div class="card-title f-width">
          <i class="fa-solid fa-tag"></i>
        </div>
        <div class="card-title-text">
          <h4>Easy and Quick Peel</h4>
          <p>Our labels are easy to
            peel & apply ensuring
            smooth working, less
            wastage, thus saving time.</p>
        </div>
      </div>
    </div>
    <!-- card -->
    <div class="card width-q4 d-flex">
      <div class="card-inner d-flex">
        <div class="card-title f-width">
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="card-title-text">
          <h4>Premium Quality</h4>
          <p>Our labels are of superior
            quality adhesive – you can
            be certain it stays stuck and
            will last for long.</p>
        </div>
      </div>
    </div>
    <!-- card -->
    <div class="card width-q4 d-flex">
      <div class="card-inner d-flex">
        <div class="card-title f-width">
            <i class="fa-solid fa-shapes"></i>
        </div>
        <div class="card-title-text">
          <h4>Different Shapes and Sizes</h4>
          <p>We have a vast range of label sizes and
            shapes to choose from, ensuring
            no container is big, small or
            shaped that we cant accomplish</p>
        </div>
      </div>
    </div>
  </div>
  <!-- services -->
  <div class="flex-container main-about f-width" style="height:fit-content; overflow:visible;">
    <div class="half f-height">
      <div class="review-card">
        <div class="review-card-top fixed-flexed">
          <h2 class="main-title">Learn About Our Services</h2>
        </div>
        <div class="review-body">
          <p>
            We offer a wide range of branding, printing, corporate gifting, and occupational safety solutions tailored to meet your business needs. Our services are designed to enhance brand visibility, improve workplace safety, and provide high-quality promotional products. Whether you need custom designs, large-format prints, or protective gear, we deliver excellence with every product.
          </p>
          <router-link to="/services"><button class="btn-default" style="margin-left: 0%; margin-top: 40px;">Learn More</button></router-link>
        </div>
      </div>
    </div>
    <div class="half services">
      <div class="q3-row d-flex">
        <!-- service card -->
        <div class="service-card half fixed-flexed">
          <div class="width-q">
            <i class="fa-solid fa-lightbulb"></i>
          </div>
          <div class="width-q-3">
            <h4>Brand Strategy & Identity</h4>
            <p>Developing a unique brand position, messaging, and visual identity to establish a strong market presence.</p>
          </div>
        </div>
        <!-- service card -->
        <div class="service-card half fixed-flexed">
          <div class="width-q">
            <i class="fa-solid fa-paint-brush"></i>
          </div>
          <div class="width-q-3">
            <h4>Logo & Visual Identity</h4>
            <p>Creating logos, color palettes, typography, and brand guidelines to ensure a consistent look and feel.</p>
          </div>
        </div>
        <!-- service card -->
        <div class="service-card half fixed-flexed">
          <div class="width-q">
            <i class="fa-solid fa-file-alt"></i>
          </div>
          <div class="width-q-3">
            <h4>Graphic Design</h4>
            <p>Designing brochures, business cards, product packaging, and promotional materials for branding consistency.</p>
          </div>
        </div>
        <!-- service card -->
        <div class="service-card half fixed-flexed">
          <div class="width-q">
            <i class="fa-solid fa-newspaper"></i>
          </div>
          <div class="width-q-3">
            <h4>Printing Services</h4>
            <p>Designing and producing billboards, magazine ads, newspaper ads, and other offline marketing materials.</p>
          </div>
        </div>
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
// import PageBanner from '@/components/users/PageBanner.vue';
import HomeBanner from '@/components/users/HomeBanner.vue';

export default {
name: 'HomeView',
components: { NavBar, ClientFooter, ClientStats, /* PageBanner,*/ HomeBanner }
}
</script>