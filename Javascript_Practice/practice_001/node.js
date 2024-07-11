let myArray = [1, 2, 3, 4, 5, 6]

let push = function(array, value) {
    let newArray = new Array() 
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i]
    }

    newArray[newArray.length] = value

    return newArray
}

let pop = function(array) {
    let newArray = new Array()
    for (let i = 0; i < (array.length - 1); i++) {
        newArray[i] = array[i]
    }

    return newArray
}

console.log(myArray)
console.log(push(myArray, 10))
console.log(pop(myArray))