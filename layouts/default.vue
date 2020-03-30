<template>
  <div id="mainSheet">
    <side-nav />
    <div class="main-container">
      <the-header />
      <nuxt />
    </div>
  </div>
</template>


<script>
import SideNav from "@/components/Navigation/SideNav.vue";
import TheHeader from "@/components/Navigation/TheHeader.vue";
export default {
  components: { SideNav, TheHeader }
};
</script>




<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#mainSheet {
  display: flex;
}
</style>
