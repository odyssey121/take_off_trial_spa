export const respondentsData = [
    {
        conditions: ['Возраста респондента'],
        range: true,
        addTitle: 'Добавить диапазон'
    },
    {
        conditions: ['Тип карты лояльности'],
        range: false,
        selectOptions: ['Gold', "White", "Bronze", "Brillant"],
        addTitle: 'Добавить тип'
    },
    {
        conditions: ['Статус карты лояльности'],
        range: false,
        selectOptions: ['Актина', "Заблокирована", "Приостановлена", "Выпускается"],
        addTitle: 'Добавить статус'
    },
    {
        conditions: ['Условие 1', 'Условие 2'],
        range: false,
        addTitle: 'Добавить опция',
        selectOptions: ['Опция1', "Опция2", "Опция3", "Опция4"]
    },

]