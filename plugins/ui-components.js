import Vue from 'vue';
import vSelect from 'vue-select'
import AppButton from '@/components/UI/AppButton.vue';
import AppControlInput from '@/components/UI/AppControlInput.vue';
import AppRangeInputGroup from '@/components/UI/AppRangeInputGroup.vue'
import AppModal from '@/components/UI/AppModal.vue'
import 'vue-select/dist/vue-select.css';
// ijection components intro App

Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
Vue.component('v-select', vSelect)
Vue.component('AppRangeInputGroup', AppRangeInputGroup)
Vue.component('AppModal', AppModal)

