<template>
    <div class="flex-container about-banner f-width p-relative">
        <div class="about-banner-front f-width f-height p-absolute"></div>
        <div class="about-banner-text f-width f-height p-absolute d-flex">
          <div class="about-home d-flex f-width centered-content">
            <div class="about-banner-text-inner f-width f-height">
              <h2 class="page-title">{{ title }}</h2>
              <p class="page-title-sub-text"><router-link to="/">Home</router-link> | {{ text }}</p>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    name:'PageBanner',
    props: {
        title: String,
        text: String
    }
}
</script>