const mon = Math.floor(Math.random() * 3); 

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Светлана",
            "id_3": "Яна",
            "id_4": "Екатерина",
            "id_5": "Ксения",
            "id_6": "Дарина",
            "id_7": "Полина",
            "id_8": "Александра",
            "id_9": "Евгения",
            "id_10": "Елизавета"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Константинов",
            "id_2": "Евгеньев",
            "id_3": "Иванов",
            "id_4": "Фирдусов",
            "id_5": "Ринатов",
            "id_6": "Рашидов",
            "id_7": "Алексеев",
            "id_8": "Тимофеев",
            "id_9": "Данилов",
            "id_10": "Владимиров"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Шахтер",
            "id_2": "Дальнобойщик",
            "id_3": "Таксист",
            "id_4": "Охранник",
            "id_5": "Строитель",
            "id_6": "Инженер",
            "id_7": "Модель",
            "id_8": "Писатель",
            "id_9": "Повар",
            "id_10": "Художник"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Преподаватель",
            "id_2": "Няня",
            "id_3": "Менеджер",
            "id_4": "Геолог",
            "id_5": "Картограф",
            "id_6": "Блогер",
            "id_7": "Адвокат",
            "id_8": "Стюардесса",
            "id_9": "Дизаинер",
            "id_10": "Стоматолого"
        }
    }`,

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min), 

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomPatronymic: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    randomSurname: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomMonth31: function randomMonth() { 
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() { 
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() { 
		let month = `февраля`
		return month;
	},

    rendomYear: function() { 
        return this.randomIntNumber(1960, 2003) + " г.р.";
    },

    randomРrofession: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31); 
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30); 
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28); 
        }
        this.person.year = this.rendomYear(1960, 2003);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};