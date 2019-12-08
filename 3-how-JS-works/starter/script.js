///////////////////////////////////////
// Lecture: Hoisting

// functions
/*
calculateAge(1992);

function calculateAge(year) {
    console.log(2019 - year);
}

//retirement(1992);
var retirement = function(year) {
    console.log(65 - (2019 - year));
}
*/

// variables
/*
console.log(age);
var age = 27;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}

*/

//console.log(this);
/*
calculateAge(1992);

function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}
*/
var ondra = {
    name: 'Ondřej',
    yearOfBirth: 1992,
    calculateAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

ondra.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1990
};

mike.calculateAge = ondra.calculateAge;
mike.calculateAge();



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









