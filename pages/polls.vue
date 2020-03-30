<template>
  <the-tabs>
    <nuxt-child />
  </the-tabs>
</template>

<script>
import TheTabs from "@/components/Navigation/TheTabs.vue";
export default {
  components: { TheTabs },
  created() {
    this.$router.push("/polls/respondents");
  }
};
</script>

<style>
.main-container {
  width: 100%;
  min-height: 100vh;
}
</style>
