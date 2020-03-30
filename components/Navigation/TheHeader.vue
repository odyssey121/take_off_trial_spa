<template>
  <div class="header-container">
    <header class="the-header">
      <div class="top-area flex">
        <app-control-input class="search-input" placeholder="Поиск по системе">
          <font-awesome-icon class="seacrh-svg" :icon="['fas', 'search']" />
        </app-control-input>
        <div class="user-area flex">
          <div class="ava"></div>
          <div class="info">
            <h3>Alexandr C.</h3>
            <p>Администратор</p>
          </div>
        </div>
      </div>
      <div class="bottom-area">
        <nav class="bread-crumbs">
          <font-awesome-icon :icon="['fas', 'home']" />
          <template v-for="(crumbs,index) in getBreadCrumbs">
            <font-awesome-icon :key="index" :icon="['fas', 'arrow-right']" />
            {{crumbs}}
          </template>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput.vue";
import { mapGetters } from "vuex";
export default {
  name: "TheHeader",
  components: {},
  computed: {
    ...mapGetters("main", ["getBreadCrumbs"])
  }
};
</script>


<style scoped>
.header-container {
  height: 120px;
  width: 100%;
  padding: 16px;
  border-bottom: 1px lightgray;
  background: whitesmoke;
}
.top-area {
  justify-content: space-between;
}
.search-input {
  flex-grow: 1;
}
.info {
  align-self: center;
  margin: 0 16px;
}
.ava {
  background-image: url("../../assets/image/ava.png");
  background-position: center;
  background-repeat: no-repeat;
  height: 64px;
  width: 64px;
  border-radius: 50%;
}
.seacrh-svg {
  position: relative;
  top: 28px;
  left: 8px;
}
</style>
