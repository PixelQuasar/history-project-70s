//
//  Сюда пишем диалоги интервью! Делайте как в шаблоне
//
export const dialogs = [
    // Пример интервью-объекта
    {
        interviewee_name: "Котенок",        // Имя опрашиваемого
        interviewee_photo: "kitten.png",    // Фото кидайте в папку src/assets/images/
        interviewee_desc: "Это описание котенка.",

        content: [                          // массив из фраз интервью
            {
                interviewee: false,         // если false - речь корреспондента, если true - речь опрашиваемого
                text: "Здравствуйте, начнем интервью"
            },
            {
                interviewee: true,
                text: "Мяу"
            },
            {
                interviewee: false,
                text: "Объясните свою маленькость"
            },
            {
                interviewee: true,
                text: "Я котенок"
            }
        ]
    }
    // добавляйте сюда будущие интервью
]
