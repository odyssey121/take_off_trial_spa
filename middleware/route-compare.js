export default function ({ store, route }) {
    store.dispatch('main/setCurrentRouteName', RoutesAndBreadCrumbs[route.path])

}

const RoutesAndBreadCrumbs = {
    '/polls/respondents': ['Опросы', 'Добавить опрос'],
    '/polls/logic': ['Опросы', 'Логика'],
    '/polls/parametrs': ['Опросы', 'Параметры'],
    '/polls/questions': ['Опросы', 'Вопросы'],
    '/polls/condition': ['Опросы', 'Условия'],
    '/users': ['Пользователи'],
    '/lists': ['Черные Списки'],
    '/calls': ['Колл центр'],
    '/helps': ['Помощь']
}