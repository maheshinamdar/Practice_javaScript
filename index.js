console.log("hello 112")
// alert("me")
document.write("this is the document")

var num1 = 10;
var num2 = 200;

console.log(num1 + num2);

// Data types in javascript

//  ****************************************** String data type  ***************************************
var str1="myDemo";
var str2="mydemo2";

//  *************************************** number data type  ******************************************
var num3=43;
var num4=56.6;

//  **************************************** Object type  ********************************************

var marks={
    siddhesh:89,
    abhi:87,
    mahesh:98
}

// console.log(marks)


//  ***************************  Boolean type  *******************************************************

var a=true;
var b=false;

// console.log(a);


//  **********************************************  1. Primitive Data types ****************************** 
/* null,
undefine,
number,
boolean,
string,
symbol */  



//  ************************************************* 2. Reference Data types ********************************** 
// Arrays ,
//  objects             


var arr=[1,2,3,4,"hi",6]



//  ****************************************************  Operators  in javascript ***********************************

// 1.Arithmatic operator
var a=10;
var b=30;

console.log("the value is  ",a+b);
console.log("the value is  ",a-b);
console.log("the value is  ",a*b);
console.log("the value is  ",a/b);

// 2. Assignment Operator

var c=a;
console.log(c);

c+=2;
console.log(c);
c-=2;
console.log(c);
c*=2;
console.log(c);
c/=2;
console.log(c);


//  ************************************* Comparision Operators  *****************************

var num6=10;
var num7=40;

console.log(num6==num7);
console.log(num6>=num7);
console.log(num6<=num7);
console.log(num6>num7);
console.log(num6<num7);


// *****************************************  Logical Operator  *************************************

/*
   1.&&  -> AND
   2.|| -> OR
   3. ! ->NOT

*/

console.log(!true);


// *******************************************  Function  **************************************************


function avg(a,b){
    return (a+b)/2;
}

c=avg(10,20);
console.log(c);

// ******************************************  Conditionals In Javascript  ***************************************

var age=35;

if(age>8){
   console.log('you are not a kid');
}else{
    console.log('you are a kid ');
}

//*******************************************  Loops In JavaScript *************************************************


// 1. While Loop **

var count=0;
document.write('loop is started ');

while(count<10){
    document.write("counter number is "+count+"<br />");

    count++
}
document.write("loop is stoped");


// 2.for Loop **

var a=8;

for(var i=1;i<=a;i++){
    document.write("hello for loop here"+"<br />");
}


// ********************************************* Function In JavaScript *************************************************

function myDemo(number){
    return number*2;
}

console.log(myDemo(3));


function trycube(f,num){
    var a= new Array(num.length);

    for(i=0;i<a.length;i++){
        a[i]= f(num[i])
    }
    return a;
}

function cube(n){
    return n*n*n;
}

const num=[1,3,5,4,6 ];
console.log(trycube(cube,num))  //function calling...



function calculateFactorial(num){
    if(num==0 || num==1){
        return 1;
    }else{
        return num*calculateFactorial(num-1)
    }
}

console.log(calculateFactorial(5))

// *********************************************************************************************************************************************