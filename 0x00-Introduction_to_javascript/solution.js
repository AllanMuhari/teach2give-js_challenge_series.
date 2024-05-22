//Sum of two numbers

function sum (a,b){
    return a+b;
}
console.log(sum(3, 2) )
console.log(sum(-4,-8))
console.log(sum(-3,5))

//return the next number from the number passed

function nextNumber(num){
    return num +1
}
console.log(nextNumber(1))
console.log(nextNumber(0))
console.log(nextNumber(-1))

//find the perimeter of a rectangle

function rectanglePerimeter(length , width){

    return 2*(length +width)
}
console.log(rectanglePerimeter(2,5))
console.log(rectanglePerimeter(3,5))
console.log(rectanglePerimeter(10,20))

// return sommething to me

function returnSomethingToMe(string){
     return "something" + " "+ string
}

console.log(returnSomethingToMe("is better than nothing"))
console.log(returnSomethingToMe ("something jack daniels"))
console.log(returnSomethingToMe("pinocchio"))

//Bobs BMI vs Janes BMI

function greaterBMI (BobBmi, JaneBmi){
   if (BobBmi >JaneBmi){
          return "Bob";
   }else if (BobBmi < JaneBmi){
       return "Jane";
   }else{
    return "Equal";
   }
}

console.log (greaterBMI(30,25))
console.log (greaterBMI(35,40))
console.log (greaterBMI(35,35))

//Basketball points

function basketBallPoints(twoPointer, threePointer){

    return (twoPointer*2) + (threePointer*3)

}
console.log(basketBallPoints(1,1))
console.log(basketBallPoints(7,5))
console.log(basketBallPoints(0,5))


//if sum is less than 100 return true else false

function isSumMoreThan100(a,b){

    if(a +b < 100){
        return true
    } else{
        return false
    }

}
console.log(isSumMoreThan100(25,55))
console.log(isSumMoreThan100(72,38))

//convert minutes to seconds

function convertToSeconds (minutes){
   const seconds = minutes * 60;
   if (seconds === 0){
    return "0";
   }else if (seconds === 1){
    return "1 second";
   }else {
    return `${seconds} seconds`;
   }
}

console.log(convertToSeconds(5))
console.log(convertToSeconds(0))
console.log(convertToSeconds(1))


//greater among the three

function greater(a,b,c){
    if(a > b && a > c){
        return a;
    }else if(b > a && b > c){
        return b;
    }else{
        return c;
    }

}

console.log(greater(2,35,9))
console.log(greater(23,23,23))

//less among the three

function least(a,b,c){
     if (a < b && a < c){
         return a;
     }else if(b < a && b < c){
         return b;
     }else{
            return c;
        }   

}

console.log(least(2,35,9))
console.log(least(23,23,23))

//football points
 function footballPoints(win,draw,loss){
        return (win*3) + (draw*1) + (loss*0)

 }
 console.log(footballPoints(5,0,2))
 console.log(footballPoints(0,0,2))
 console.log(footballPoints(5,2,0))

 //even numbers

 function isEven(n){
     return n % 2 === 0;
 }
     for (let i = 0; i <= 100; i++){
         if (isEven(i)){
             console.log(i);
         }
     }
        console.log(isEven(2))


    console.log(isEven(7))