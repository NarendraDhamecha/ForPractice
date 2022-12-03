
var obj={
    name: 'nikhil',
    age: 25
};

var student={
    age:20
};

//call function
function printName(lastName)
{
    console.log(this.name + lastName);
}

printName.call(obj,' dhamecha');

//apply function
function printAge(a,b,c)
{
    return this.age + a + b + c;
}

let arr=[5,5,5];
console.log(printAge.apply(obj,arr));

// bind function
var bond = printName.bind(obj);
bond(' bajaj');

//student age
function studentAge()
{
    console.log(this.age);
}

var student_age = studentAge.bind(student);
student_age();

//Currying

function multiply(x, y)
{
   console.log(x * y);
}

function multiply(x)
{
    return function multi(y)
         {
            console.log(x * y);
         }
}

let multiplyBy2 = multiply(2)
multiplyBy2(5);

let multiplyBy3 = multiply(3)
multiplyBy3(10);



