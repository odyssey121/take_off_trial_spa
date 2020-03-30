
export const actions = {
    setField(vuexContext, payload) {
        vuexContext.commit('SET_FIELD', payload)
    },
    setCurrentRouteName(vuexContext, payload) {
        vuexContext.commit('SET_CURRENT_ROUTE_NAME', payload)
    },
    removeRange(vuexContext, payload) {
        vuexContext.commit('REMOVE_RANGE', payload)
    },
    removeCondition(vuexContext, payload) {
        vuexContext.commit('REMOVE_CONDITION', payload)
    },
    addConditionCount(vuexContext, payload) {
        vuexContext.commit('ADD_CONDITION_COUNT', payload)
    },
    deleteConditionCount(vuexContext, payload) {
        vuexContext.commit('DELETE_CONDITION_COUNT', payload)
    },
     addRange(vuexContext, payload) {
         vuexContext.commit('ADD_RANGE', payload)
    },

}

export const mutations = {
    SET_FIELD(state, payload) {
        const { fieldObj, conditionCount } = payload;
        state.conditionForm[conditionCount] = { ...state.conditionForm[conditionCount], ...fieldObj }
    },
    ADD_RANGE(state, conditionCount) {
        const range = state.ranges[conditionCount]
        state.ranges = {...state.ranges, [conditionCount]:range +1}

    },
    DELETE_CONDITION_COUNT(state, count) {
        state.conditionCount = state.conditionCount.filter(record => record !== count)
        delete state.conditionForm[count]
        delete state.ranges[count]
        
    },
    ADD_CONDITION_COUNT(state, count) {
        state.conditionForm[count] = {}
        state.ranges[count] = 1
        state.conditionCount.push(count)

    },
    SET_CURRENT_ROUTE_NAME(state, name) {
        state.currentRoute = name
    },
}


export const getters = {
    getBreadCrumbs: (state, _getters) =>
        state.currentRoute
    ,
    getConditionForm: (state, _getters) =>
        state.conditionForm,

    getConditionCount: (state, _getters) =>
        state.conditionCount,
    getRanges: (state, _getters) =>
        state.ranges,

}

export const state = () => ({ conditionCount: [], currentRoute: '', conditionForm: {}, ranges: {} })