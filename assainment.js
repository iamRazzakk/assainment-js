function cubeNumber(number){
    const num = number
    const pow = 3
    return Math.pow(num,pow)
}

function matchFinder(string1, string2) {
    if(string1.includes(string2)){
        return true
    }
    else{
        return false
    }
}


function sortMaker(arr) {
    if (arr[0] <= 0 || arr[1] <= 0) {
        return "invalid input"
    } else if (arr[0] > arr[1]) {
        return arr
    } else if (arr[1] > arr[0]) {
        let makeReverse = arr.reverse()
        return makeReverse
    } else if (arr[0] === arr[1]) {
        return "equal"
    }
}


function findAddress(obj) {
    let streetValue = obj.street;
    let houseValue = obj.house;
    let societyValue = obj.society;
    if (streetValue === undefined) {
        streetValue = '__'
    }
    if (houseValue === undefined) {
        houseValue = '__'
    }
    if (societyValue === undefined) {
        societyValue = '__'
    }
    let allValue = streetValue + ',' + houseValue + ',' + societyValue;
    return allValue;
}
findAddress(person)


function canPay(changeArray, totalDue) {
    const sum = changeArray.reduce((a, b) => a + b, 0);
    if (sum >= totalDue) {
        return true
    } else if (sum < totalDue) {
        return false
    }else if(changeArray.length === 0){
        return "This is not a empty array"
    }
}