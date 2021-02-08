// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function(innerParam="special") {
        return `You are ${string}${innerParam}${string}!`
    }
}

let Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

let actionApplyer = function(int, funcArray) {
    let a = int

    for (let i = 0; i < funcArray.length; i++) {
        a = funcArray[i](a)
    }
    return a
}