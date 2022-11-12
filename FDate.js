var days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}, months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
};

module.exports = class FDate {
    constructor(dt = null) {
        if (dt != null && dt != "" && dt != undefined) {
            if (typeof dt == "string") {
                this.date = new Date(dt);
            } else {
                console.error("Parametre must be type of string!");
                return;
            }
        }
        else {
            this.date = new Date();
        }

        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
        this.millisecond = this.date.getMilliseconds();
        this.time = `${this.hour}:${this.minute}:${this.second}`;
        this.timeNumber = this.date.getTime();
        this._day = this.date.getDay();
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
    }

    getDayName() {
        return days[this._day];
    }

    getDay() {
        return this.day;
    }

    addDay(day = 1) {
        this.date.setDate(this.date.getDate() + day);
        this.#_new_date();
        return this;
    }

    removeDay(day = 1) {
        this.date.setDate(this.date.getDate() - day);
        this.#_new_date();
        return this;
    }

    getMonthName() {
        return months[this.month];
    }

    getMonth() {
        return this.month;
    }

    addMonth(month = 1) {
        this.date.setMonth(this.date.getMonth() + month);
        this.#_new_date();
        return this;
    }

    removeMonth(month = 1) {
        this.date.setMonth(this.date.getMonth() - month);
        this.#_new_date();
        return this;
    }

    getYear() {
        return this.year;
    }

    addYear(year = 1) {
        this.date.setFullYear(this.date.getFullYear() + year);
        this.#_new_date();
        return this;
    }

    removeYear(year = 1) {
        this.date.setFullYear(this.date.getFullYear() - year);
        this.#_new_date();
        return this;
    }

    toTimeString() {
        return `${this.hour}:${this.minute}:${this.second}`;
    }

    toDateString() {
        return `${this.year}-${this.month}-${this.day}`;
    }

    toDateTimeString() {
        return `${this.year}-${this.month}-${this.day} ${this.hour}:${this.minute}:${this.second}`;
    }

    #_new_date() {
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
        this.millisecond = this.date.getMilliseconds();
        this.time = `${this.hour}:${this.minute}:${this.second}`;
        this.timeNumber = this.date.getTime();
        this._day = this.date.getDay();
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
    }

    #_format(form, usedClass) {
        let result = form;

        if (result.includes("y")) {
            result = result.replace("y", usedClass.year.toString().substring(2));
        }

        if (result.includes("Y")) {
            result = result.replace("Y", usedClass.year);
        }

        if (result.includes("m")) {
            result = result.replace("m", usedClass.month);
        }

        if (result.includes("M")) {
            result = result.replace("M", months[usedClass.month]);
        }

        if (result.includes("d")) {
            result = result.replace("d", usedClass.day);
        }

        if (result.includes("D")) {
            result = result.replace("D", days[usedClass.day]);
        }

        if (result.includes("H")) {
            result = result.replace("H", usedClass.hour);
        }

        if (result.includes("i")) {
            result = result.replace("i", usedClass.minute);
        }

        if (result.includes("s")) {
            result = result.replace("s", usedClass.second);
        }

        if (result.includes("l")) {
            result = result.replace("l", usedClass.millisecond);
        }

        return result;
    }

    format(form = "Y-m-d") {
        return this.#_format(form, this);
    }

    static now() {
        return new FDate();
    }

    static yesterday() {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return new FDate(yesterday.toString());
    }

    static today() {
        return new FDate();
    }

    static tomorrow() {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return new FDate(tomorrow.toString());
    }

    static getDayName() {
        let date = new Date();
        return days[date.getDay()];
    }

    static getDay() {
        let date = new Date();
        return date.getDate();
    }

    static addDay(day = 1) {
        let date = new Date();
        date.setDate(date.getDate() + day);
        return new FDate(date.toString());
    }

    static removeDay(day = 1) {
        let date = new Date();
        date.setDate(date.getDate() - day);
        return new FDate(date.toString());
    }

    static getMonthName() {
        let date = new Date();
        return months[date.getMonth() + 1];
    }

    static getMonth() {
        let date = new Date();
        return date.getMonth() + 1;
    }

    static addMonth(month = 1) {
        let date = new Date();
        date.setMonth(date.getMonth() + month);
        return new FDate(date.toString());
    }

    static removeMonth(month = 1) {
        let date = new Date();
        date.setMonth(date.getMonth() - month);
        return new FDate(date.toString());
    }

    static getYear() {
        let date = new Date();
        return date.getFullYear();
    }

    static addYear(year = 1) {
        let date = new Date();
        date.setFullYear(date.getFullYear() + year);
        return new FDate(date.toString());
    }

    static removeYear(year = 1) {
        let date = new Date();
        date.setFullYear(date.getFullYear() - year);
        return new FDate(date.toString());
    }

    static format(form = "Y-m-d") {
        let date = new FDate();
        return date.#_format(form, date);
    }
}