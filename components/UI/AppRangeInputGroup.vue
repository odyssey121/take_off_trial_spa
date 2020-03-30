<template>
  <div class="range-control flex oneHeight">
    <label class="label">
      <slot />
    </label>
    <div class="range-group flex">
      <label class="label-range">от</label>
      <AppControlInput
        :name="`диапазон_от_${countRange}`"
        :value="fieldsVal[`диапазон_от_${this.countRange}`]"
        @input="$emit('input', $event)"
        class="grup-input"
        type="number"
      ></AppControlInput>
      <label class="label-range">до</label>
      <AppControlInput
        :name="`диапазон_до_${countRange}`"
        :value="fieldsVal[`диапазон_от_${this.countRange}`]"
        @input="$emit('input', $event)"
        class="grup-input"
        type="number"
      ></AppControlInput>
    </div>
  </div>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput.vue";
export default {
  props: {
    fieldsVal: {
      type: Object,
      required: true,
      default: {}
    },
    countRange: {
      type: Number,
      required: true
    },
    countCondition: {
      type: Number,
      required: true
    }
  },
  name: "AppRangeInputGroup",
  computed: {}
};
</script>

<style scoped>
.range-group {
  display: grid;
  grid-template-columns: repeat(4, max-content);
  column-gap: 16px;
  vertical-align: center;
  height: 33px;
}
.label-range {
  height: 33px;
  line-height: 33px;
}
</style>


