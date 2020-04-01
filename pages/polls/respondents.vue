<template>
  <div class="respondents">
    <div class="top">
      <p class="title">Добавить опрос</p>
    </div>
    <div class="content">
      <Condition
        v-for="(count,i) in getConditionCount"
        :key="i"
        @deleteCondition="deleteCondition(count)"
        :conditionCount="count"
        :optionsCondition="respondentsData[count-1]"
        :localRange="getRanges[count]"
        :localValues="getConditionForm[count]"
      ></Condition>
    </div>
    <div class="add-area" v-show="this.respondentsData[getConditionCount.length]">
      <section @click="addCondition">
        <font-awesome-icon :icon="['fas', 'plus']" />
        <div>
          <p>Нажмите чтобы добавить новое условие выборки.</p>
          <p>Все условия связываются между собой логическим "И".</p>
        </div>
      </section>
    </div>
    <app-modal v-if="showModal" @close="showModal = false">
      <template #header>
        <h3>Результаты опроса:</h3>
      </template>
      <template #body>
        <pre>{{JSON.stringify(getConditionForm,null,2)}}</pre>
      </template>
    </app-modal>
    <div class="respondents-footer">
      <app-button @click="showModal = true">
        <div>
          <font-awesome-icon style="margin-right:8px;" :icon="['fas', 'file-signature']" />Протестировать опрос
        </div>
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton.vue";
import Condition from "@/components/Condition/Condition.vue";
import { respondentsData } from "~/assets/data/respondentsData";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { Condition, AppButton },
  created() {
    this.respondentsData = [...respondentsData];
  },
  computed: {
    ...mapGetters("main", [
      "getConditionForm",
      "getConditionCount",
      "getRanges"
    ])
  },
  methods: {
    addCondition() {
      const conditionCount = this.getConditionCount;
      if (conditionCount.length) {
        for (let i = 1; i <= conditionCount.length + 1; i++) {
          if (!conditionCount.includes(i)) {
            this.$store.dispatch("main/addConditionCount", i);
            break;
          }
        }
      } else {
        this.$store.dispatch("main/addConditionCount", 1);
      }
    },
    async deleteCondition(count) {
      await this.$store.dispatch("main/deleteConditionCount", count);
    }
  },
  data() {
    return {
      showModal: false,
      respondentsData: []
    };
  }
};
</script>

<style scoped>
.title {
  font-size: 1rem;
  font-weight: 500;
}
.respondents > * {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.add-area:hover {
  border: 2px solid lightgray;
}
.add-area {
  color: rgba(23, 133, 23, 0.795);
  max-width: 60%;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid rgba(23, 133, 23, 0.795);
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-area > section {
  display: flex;
  flex-direction: column;
}
.add-area > section:hover {
  cursor: pointer;
  color: lightgray;
}
.add-area > section > svg {
  width: 25px;
  height: 25px;
  align-self: center;
}
</style>