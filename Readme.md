# farid-fdate
This JS library is just a collection of functions for manipulating date and time. It's small, simple, and easy to learn.

<!-- NOTE - Installation -->
## Installation
Inside your project folder do:
```bash
    npm install --save farid-fdate
```

or, install it globally to use `FDate` from the command line.
```bash
    npm install -g farid-fdate
```

<!-- NOTE - Usage -->
## Usage
### NodeJS or ES6/ES7
Require the module `farid-fdate`
```js
    const FDate = require("farid-fdate")

    var date = new FDate("2022-12-10 11:20");
```

<!-- NOTE - Methods -->
### Methods
* [getDay](#getday)
    * Get the day.

* [getDayName](#getdayname)
    * Get the name of the day.

* [getMonth](#getmonth)
    * Get the month.

* [getMonthName](#getmonthname)
    * Get the name of the month.

* [getYear](#getyear)
    * Get the year.

* [addDay](#adddayday)
    * Adding days.

* [removeDay](#removedayday)
    * Removing days.

* [addMonth](#addmonthmonth)
    * Adding months.

* [removeMonth](#removemonthmonth)
    * Removing months.

* [addYear](#addyearyear)
    * Adding years.

* [removeYear](#removeyearyear)
    * Removing years.

* [diffForHumain](#diffforhumain)
    * Get the diff between date and now string.
    
* [diffForHumainStructure](#diffforhumainstructure)
    * Get the diff between date and now object.

* [format](#format)
    * Formatting date and time objects.

<!-- NOTE - Preview -->
### Preview
Examples of `FDate` methods:

#### getDay()
```js
    date.getDay(); // => 10
```

#### getDayName()
```js
    date.getDayName(); // => 'Friday'
```

#### getMonth()
```js
    date.getMonth(); // => 12
```

#### getMonthName()
```js
    date.getMonthName(); // => 'December'
```

#### getYear()
```js
    date.getYear(); // => 2022
```

#### addDay(day)
Parameter day by default equalt 1
```js
    date.addDay(2); // => from '10/12/2022 11:20' to '12/12/2022 11:20'
```

#### removeDay(day)
Parameter day by default equalt 1
```js
    date.removeDay(2); // => from '10/12/2022 11:20' to '8/12/2022 11:20'
```

#### addMonth(month)
Parameter month by default equalt 1
```js
    date.addMonth(2); // => from '10/12/2022 11:20' to '10/2/2023 11:20'
```

#### removeMonth(month)
Parameter month by default equalt 1
```js
    date.removeMonth(2); // => from '10/12/2022 11:20' to '10/10/2022 11:20'
```

#### addYear(year)
Parameter year by default equalt 1
```js
    date.addYear(2); // => from '10/12/2022 11:20' to '10/12/2024 11:20'
```

#### removeYear(year)
Parameter year by default equalt 1
```js
    date.removeYear(2); // => from '10/12/2022 11:20' to '10/12/2020 11:20'
```

#### diffForHumain()
```js
    date.diffForHumain(); // => '1h 35min 20s 4d 1y'
```

#### diffForHumainStructure()
```js
    date.diffForHumainStructure(); // => { hours: 15, seconds: 46.389, minutes: 38, days: 0, months: 0, years: 0 }
```

#### format()
```js
    date.format(now, 'd/m/Y H:i'); // => '10/12/2022 11:20'
```

<!-- NOTE - Tokens -->
Available tokens and their descriptions are as follows:
|Token|Description|Output|
|-----|-----------|------|
|h|12-hour|11|
|H|24-hour|23|
|i|minute|20|
|s|second|30|
|l|millisecond|753|
|d|day (int)|10|
|D|day name (string)|Friday|
|m|month (int)|12|
|M|month name (string)|December|
|y|two digits year|22|
|Y|four digits year|2022|

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Keywords
[Date](https://www.npmjs.com/search?q=keywords:date)
[Time](https://www.npmjs.com/search?q=keywords:time)
[DateTime](https://www.npmjs.com/search?q=keywords:datetime)
[Format](https://www.npmjs.com/search?q=keywords:format)
[Parse](https://www.npmjs.com/search?q=keywords:parse)
[Hour](https://www.npmjs.com/search?q=keywords:hour)
[Minute](https://www.npmjs.com/search?q=keywords:minute)
[Second](https://www.npmjs.com/search?q=keywords:second)
[Day](https://www.npmjs.com/search?q=keywords:day)
[Month](https://www.npmjs.com/search?q=keywords:month)
[Year](https://www.npmjs.com/search?q=keywords:year)