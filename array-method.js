// forEach

function forEach(array,action) {
    for(let i=0; i<array.length; i++) {
    action(array[i]);
    }
}

// filer

function filter(array, filter) {
    let passed = [];
    for(let i=0; i<array.length; i++) {
        if(filter(array[i])) {
            passed.push(array[i]);
        }
    }
    return passed;
}

// Map

function map(array, transform) {
    let mapped = [];
    for(let i=0; i<array.length; i++) {
        mapped,push(transform(array[i]));
    }
    return mapped;
}

// Reduce

function reduce(array, combine, start) {
    let current = start;
    for(let i=0; i<array.length; i++) {
        current = combine(current, array[i]);
    }
    return current;
}

// Every
function every(array, action) {
    let flag = false;
    for(let i = 0; i < array.length; i++) {
        if(action(array[i])) {
            flag = true;
        } else {
            flag = false;
        }
    }
    return flag;
}

// Some
function some(array,action) {
    for (let i = 0; i < array.length; i++) {
        if(action(array[i])){
            return true;
        }
    }
}
