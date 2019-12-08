/* CHALLENGE 1 
**************

var kubaHeight = 1.8;
var ondraHeight = 1.75;
var kubaWeight = 84;
var ondraWeight = 79;

var kubaBMI = kubaWeight / (kubaHeight * kubaHeight);
var ondraBMI = ondraWeight / (ondraHeight * ondraHeight);

var ondraFatter = ondraBMI > kubaBMI ? true : false;

console.log('Je Ondra tlustější než Kuba? ' + ondraFatter );
console.log('Ondra BMI: ' + ondraBMI);
console.log('Kuba BMI: ' + kubaBMI);

******************
END CHALLENGE 1 */

/* CHALLENGE 2 
**************

var johnScore = (689 + 120 + 103) / 3;
var mikeScore = (116 + 94 + 123) / 3;
var maryScore = (97 + 134 + 105) / 3;

console.log(johnScore);
console.log(mikeScore);
console.log(maryScore);

//var message = johnScore > mikeScore ? 'John\'s team WIN!' : 'Mike\'s team WIN!';

if (johnScore > mikeScore && johnScore > maryScore) {
    message = 'John\'s team WIN!';
} else if (mikeScore > johnScore && mikeScore > maryScore) {
    message = 'Mike\'s team WIN!';
} else if (maryScore > johnScore && maryScore > mikeScore) {
    message = 'Mary\'s team WIN!'
}
console.log(message);

******************
END CHALLENGE 1 */

/* CHALLENGE 3
**************
var bills = [124,48,268];
var billsExtra = [124,48,268,345,123,498,90];

function calcTip(bill) {
    var tipPercent;
    if (bill < 50) {
        tipPercent = 0.2;
    } else if (bill >= 50 && bill <= 200 ) {
        tipPercent = 0.15;
    } else {
        tipPercent = 0.1;
    }
    return bill * tipPercent;
}

var tips = [];
tips.push(calcTip(bills[0])); 
tips.push(calcTip(bills[1])); 
tips.push(calcTip(bills[2]));

var billsWithTips = [];
billsWithTips.push(bills[0] + tips[0]);
billsWithTips.push(bills[1] + tips[1]);
billsWithTips.push(bills[2] + tips[2]);

var tipsExtra = [];
var billsWithTipsExtra = [];
for(var i = 0; i < billsExtra.length; i++) {
    var currentTip = calcTip(billsExtra[i]);
    tipsExtra.push(currentTip);
    billsWithTipsExtra.push(billsExtra[i] + currentTip);
}

console.log('Tips: ' + tips);
console.log('Bills with tips: ' + billsWithTips);

console.log('Extra tips: ' + tipsExtra);
console.log('Extra bills with tips: ' + billsWithTipsExtra);

******************
END CHALLENGE 3 */

/* CHALLENGE 4
**************
var ondra = {
    fullName: 'Ondřej Ochodnický',
    mass: 79,
    height: 1.75,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    } 
}

var kuba = {
    fullName: 'Jakub Trčálek',
    mass: 84,
    height: 1.8,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    } 
}

if (ondra.calcBMI() > kuba.calcBMI()) {
    console.log(ondra.fullName + ' je tlustější a jeho BMI je ' + ondra.BMI);
} else if (kuba.calcBMI() > ondra.calcBMI()) {
    console.log(kuba.fullName + ' je tlustější a jeho BMI je ' + kuba.BMI);;
} else {
    console.log('Máme stejné BMI');
}

******************
END CHALLENGE 4 */

var john = {
    fullName: 'John\'s family',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.billsWithTips = [];

        for(var i = 0; i < this.bills.length; i++) {
            var tipPercent;
            var bill = this.bills[i];

            if (bill < 50) {
                tipPercent = 0.2;
            } else if (bill >= 50 && bill <= 200 ) {
                tipPercent = 0.15;
            } else {
                tipPercent = 0.1;
            }
            this.tips[i] = bill * tipPercent;
            this.billsWithTips[i] = bill + bill * tipPercent;
        }
    }
}
var mark = {
    fullName: 'Marks\'s family',
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.billsWithTips = [];
        for(var i = 0; i < this.bills.length; i++) {
            var tipPercent;
            var bill = this.bills[i];

            if (bill < 100) {
                tipPercent = 0.2;
            } else if (bill >= 100 && bill <= 300 ) {
                tipPercent = 0.1;
            } else {
                tipPercent = 0.35;
            }
            this.tips[i] = bill * tipPercent;
            this.billsWithTips[i] = bill + bill * tipPercent;
        }
    }
}

function avarageTips(tips) {
    var sum = 0;
    for(var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.avage = avarageTips(john.tips);
mark.avage = avarageTips(mark.tips);
console.log(john,mark);

if (john.avage > mark.avage) {
    console.log( john.fullName + ' has highest tips, their AVG tips is $' + john.avage);
} else if (mark.avage > john.avage) {
    console.log( mark.fullName + ' has highest tips, their AVG tips is $' + mark.avage);
} else {
    console.log('Both family has same tips');
}