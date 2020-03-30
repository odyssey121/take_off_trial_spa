<template>
  <div class="input-control">
    <label>
      <slot />
    </label>
    <input v-bind="$attrs" :value="value" @input="$emit('input', $event)" />
  </div>
</template>

<script>
export default {
  name: "AppInputControl",
  props: {
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 5px;
  height: 33px;
}

.input-control input:focus {
  background-color: #eee;
  outline: none;
}
</style>


