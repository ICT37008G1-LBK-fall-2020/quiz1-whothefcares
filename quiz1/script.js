function getMaxNumber(numbersArray) {
    var max = null;
    for(var i = 0; i < numbersArray.length; i++) {
        if(numbersArray[i] > max) {
            max = numbersArray[i];
        }
    }
    return max;
}

function getPositiveNumbersAverage(numbersArray) {
    var positiveArray = [];
    for(var i = 0; i < numbersArray.length; i++) {
        if(numbersArray[i] > 0) {
            positiveArray.push(numbersArray[i]);
        }
    }
    if(positiveArray.length % 2 == 0) {
        var center = positiveArray.length / 2 - 1;
        return (positiveArray[center] + positiveArray[center + 1]) / 2;
    }
    var center = Math.floor(positiveArray.length / 2);
    return positiveArray[center];
}

function getTopStudents(studentsArray1, studentsArray2) {
    var orderedArray = [];
    var topStudents = [];
    for(var i = 0; i < studentsArray1.length; i++) {
        var inserted = false;
        for(var j = 0; j < orderedArray.length; j++) {
            if(studentsArray1[i].gpa > orderedArray[j].gpa) {
                orderedArray.splice(j, 0, studentsArray1[i]);
                inserted = true;
                break;
            }
        }
        if(!inserted) {
            orderedArray.push(studentsArray1[i]);
        }
    }
    for(var i = 0; i < studentsArray2.length; i++) {
        var inserted = false;
        for(var j = 0; j < orderedArray.length; j++) {
            if(studentsArray2[i].gpa > orderedArray[j].gpa) {
                orderedArray.splice(j, 0, studentsArray2[i]);
                inserted = true;
                break;
            }
        }
        if(!inserted) {
            orderedArray.push(studentsArray2[i]);
        }
    }
    var count = 0;
    for(var i = 0; i < orderedArray.length; i++) {
        if(count <= 5) {
            topStudents.push(orderedArray[i]);
            count++;
        }
        if(count == 5 && i < orderedArray.length - 1 && orderedArray[i].gpa == orderedArray[i + 1].gpa) {
            topStudents.push(orderedArray[i + 1]);
        }
    }
    return topStudents;
}