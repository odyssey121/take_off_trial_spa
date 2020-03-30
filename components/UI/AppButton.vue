<template>
  <button class="button" :class="btnStyle" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnStyle: {
      type: String,
      default: ""
    }
  }
};
</script>


<style scoped>
.button {
  font: inherit;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid rgba(23, 133, 23, 0.795);
  background: rgba(224, 255, 237, 0.932);
  color: rgba(23, 133, 23, 0.795);
  font-size: 1rem;
  border-radius: 5px;
}

.button:hover,
.button:active {
  background-color: lightgray;
  border: 1px solid lightgray;
  color: black;
}

.inverted {
  background-color: white;
  color: black;
  border: 1px solid transparent;
}

.inverted:hover,
.inverted:active {
  color: #ccc;
  background-color: white;
  border: 1px solid transparent;
}

.cancel {
  background-color: red;
  color: white;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  background-color: salmon;
  border: 1px solid transparent;
  color: white;
}
</style>
