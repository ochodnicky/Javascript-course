// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher' 
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// Object.create

var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1992;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1985 },
    job: { value: 'designer' },
});


// Primitives
var a = 27;
var b = a;

a = 46;

console.log(a);
console.log(b);


// Objects
var obj1 = {
    name: 'John',
    age: 27
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calcAge);
var fullAges = arrayCalc(years, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('Ondřej');
designerQuestion('Ondřej');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');
*/

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game(); */

/* CLOSURES 
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

/*
function retirement(retirementAge) {
    return function(yearOfBirth) {
        var a = ' years left until retirement.';
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990); 

//retirement(66)(1990);

*/

/* Challenge */
/* function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('Ondřej');
interviewQuestion('designer')('Ondřej'); */

// Bind, call and apply
/* 
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2016 - el;
}

function isFullAge(limit,el) {
    return el >= limit;
}

var ages = arrayCalc(years, calcAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan); */

(function() {
    function Questions(questionName, answers, correctAnswer) {
        this.questionName = questionName;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Questions.prototype.showQuestion = function() {
        console.log(this.questionName);
        
        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Questions.prototype.isCorrect = function (userAnswer, keepScore) {
        var actualScore;

        if (userAnswer === this.correctAnswer) {
            console.log('Odpověděl jsi správně!');
            actualScore = keepScore(true);
        } else {
            console.log('Špatná odpověď! :(');
            actualScore = keepScore(false);
        }
        console.log(actualScore);
        this.displayScore(actualScore);
    }

    Questions.prototype.displayScore = function(score) {
        console.log('Tvé aktuální skóré je: ' + score);
        console.log('=======================================');
    }

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {

        var rand = Math.floor(Math.random() * questionsList.length);

        questionsList[rand].showQuestion();

        var userAnswer = prompt('Odpovězte na otázku.');

        if (userAnswer !== 'exit') {
            questionsList[rand].isCorrect(parseInt(userAnswer), keepScore);
            nextQuestion();
        } else {
            console.log('Konec hry :)');
        }
    }

    var question1 = new Questions('Jaký je rok?', ['2019', '2020'], 0);
    var question2 = new Questions('Jaké je hlavní město České republiky?', ['Moskva', 'Praha', 'Berlín'], 1);
    var question3 = new Questions('Kdy vznikla Česká republika?', ['1992', '1986', '1993'], 2);
    var question4 = new Questions('Kolik má rok měsíců?', ['12', '5'], 0);

    var questionsList = [question1, question2, question3, question4];

    nextQuestion();

})();