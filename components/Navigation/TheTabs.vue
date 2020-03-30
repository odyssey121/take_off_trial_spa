<template>
  <div class="tabs-component">
    <ul role="tablist" class="tabs-component-tabs">
      <li
        :class="`tabs-component-tab ${tab.active && 'is-active'}`"
        role="presentation"
        v-for="(tab,index) in computedActive"
        :key="index"
      >
        <nuxt-link class="tabs-component-tab-a" role="tab" :to="tab.route">{{tab.name}}</nuxt-link>
      </li>
    </ul>
    <div class="tabs-component-panels">
      <slot />
    </div>
  </div>
</template>


<script>
export default {
  name: "TheTabs",
  computed: {
    computedActive() {
      return this.tabsRoutes.map(element => {
        if (
          element.route ===
          this.$route.path
            .split("/")
            .slice(-1)
            .pop()
        ) {
          return { ...element, active: true };
        }
        return { ...element };
      });
    }
  },
  data() {
    return {
      tabsRoutes: [
        { name: "Параметры", route: "parametrs" },
        { name: "Вопросы", route: "questions" },
        { name: "Логика", route: "logic" },
        { name: "Условия", route: "condition" },
        { name: "Респонденты", route: "respondents" }
      ]
    };
  }
};
</script>


<style scoped>
.tabs-component {
  margin: 1em 4rem;
}
.active[role="tab"] {
  color: black;
  border: black;
}
.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: 0.5em;
    transform: translateY(2px);
    transition: transform 0.3s ease;
  }
  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: 0.75em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 1rem 0rem;
  margin: 0 1rem;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    padding: 2rem 4em;
  }
}
</style>