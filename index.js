function counter(){
    let count = 0;
    return function () {
        count++
        console.log(`${count} number`)
    }
}

let counterFunction = counter()

counterFunction()
counterFunction()
counterFunction()
counterFunction()
counterFunction()