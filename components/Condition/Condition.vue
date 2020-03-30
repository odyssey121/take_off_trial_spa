<template>
  <div class="contition-layout">
    <div class="flex">
      <label class="label">Условие {{conditionCount}}</label>
      <v-select
        placeholder="выберите условие"
        class="select"
        @input="opt => selectOnChange(`Условие_${conditionCount}`,opt)"
        :options="optionsCondition.conditions"
        :value="localValues[`Условие_${conditionCount}`]"
      />
    </div>
    <div class="flex" v-show="!optionsCondition.range" v-for="i in localRange" :key="i+1">
      <label class="label">{{`${getLabel}_${i}`}}</label>
      <v-select
        @input="opt => selectOnChange(`${getLabel}_${i}`,opt)"
        :placeholder="getPlaceholder"
        class="select"
        :options="optionsCondition.selectOptions"
        :value="localValues[`${getLabel}_${i}`]"
      />
    </div>

    <app-range-input-group
      v-show="optionsCondition.range"
      v-for="i in localRange"
      :key="i+10"
      @input="e => onChange(e)"
      :countRange="i"
      :countCondition="conditionCount"
      :fieldsVal="localValues"
    >диапазон {{i}}</app-range-input-group>
    <div class="btn-area flex twoHeight">
      <AppButton class="addBtn" @click="addRange">
        <font-awesome-icon style="margin-right:8px;" :icon="['fas', 'plus']" />
        {{optionsCondition.addTitle}}
      </AppButton>
      <AppButton @click="$emit('deleteCondition', conditionCount)">
        <font-awesome-icon style="margin-right:8px;" :icon="['fas', 'trash-alt']" />Удалить условие
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton.vue";
import AppRangeInputGroup from "@/components/UI/AppRangeInputGroup.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Condition",
  props: {
    localValues: { type: Object, required: true, default: {} },
    localRange: {
      type: Number,
      required: true
    },
    conditionCount: {
      type: Number,
      required: true
    },
    optionsCondition: {
      type: Object,
      required: true
    }
  },
  components: {},
  computed: {
    getPlaceholder() {
      return `Выберите ${this.optionsCondition.addTitle
        .split(" ")
        .slice(-1)
        .pop()}`;
    },

    getLabel() {
      const label = this.optionsCondition.addTitle
        .split(" ")
        .slice(-1)
        .pop();
      return label;
    }
  },
  methods: {
    async addRange() {
      await this.$store.dispatch("main/addRange", this.conditionCount);
    },
    onChange(e) {
      const { name, value } = e.target;
      const fieldObj = { [name]: value };
      const conditionCount = this.conditionCount;
      this.$store.dispatch("main/setField", { fieldObj, conditionCount });
    },
    selectOnChange(name, value) {
      const fieldObj = { [name]: value };
      const conditionCount = this.conditionCount;
      this.$store.dispatch("main/setField", { fieldObj, conditionCount });
    }
  },
  data() {
    return {
      rangeCount: 1
    };
  }
};
</script>


<style scoped>
.select {
  width: 368px;
  margin-bottom: 24px;
}
.btn-area {
  justify-content: space-around;
}
</style>
