// this is a technical test done nwith javasctript programming language


//1. fizzbuzz function

function fizzbuzz(){
    for (let i =1;i<=100;i++){
        if(i % 3=== 0 && i % 5 ===0 ){
            console.log("FizzBuzz")

        }else if (i % 3 == 0){
            console.log("Fizz")
        }else if(i % 5 ==0){
            console.log("buzz")
        }else{
            console.log(i)
        }
    }
}
fizzbuzz()

// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.
function fibonacci() {
    let sequence = [0,1];
    while(sequence[sequence.length-1] + sequence[sequence.length-2]   <=100){
        sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2])

    }
    return sequence
}
console.log(fibonacci())


// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.

function isPowerOfTwo(num) {
    if(num <=0){
        return false
    }if (num ===1 ){
        return true
    }while(num >1){
        if(num % 2 !==0){
            return false
        }
        num= num / 2
    }
    return true
}
console.log(isPowerOfTwo(0))


// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string.
function capWords(str){
    let result =''
    let isFirstLetter = true
    for(let char of str){
        if(char=== ' '){
            isFirstLetter= true
            result += true 
        }else if(isFirstLetter){
            result += char.toUpperCase()
            isFirstLetter= false

        }else {
            result += char.toLowerCase()
        }

    }
    return result
}
console.log(capWords("hello "))

// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit
// ordering.

function reverseInteger(num){
    let reversed = 0
    while(num >0){
        reversed = reversed * 10 + num % 10
        num = Math.floor(num / 10)
    }
    return reversed
}
console.log(reverseInteger(90))

// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
function countVowels(str) {
    let count = 0
    const vowels = 'aeiouAEIOU'
    for (let char of str) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}
console.log(countVowels("hello world"))