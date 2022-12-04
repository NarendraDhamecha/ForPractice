
//********this keyword practice*************
this.rahul = 'rahul bike';

function cleanBike() {

    function innerFunc() {
        console.log(`clean ${this.rahul}`);
    }

    innerFunc();
}

// cleanBike.call(this);

this.nikhil = {
    bike: 'nikhil bike',

    cleanBike() {
        console.log(`clean ${this.bike}`);
    }
};

let kunal = {
    bike: 'kunal bike',

    cleanBike() {
        console.log(`clean ${this.bike}`);
    }
}

// this.nikhil.cleanBike();
// kunal.cleanBike();

function garage(name) {
    this.name = `${name} bike`
}

garage.prototype.cleanBike = function () {
    console.log(`clean ${this.name}`);
}

let nikhil = new garage('nikhil');
//nikhil.cleanBike();


//**************Design pattern problem**********************
class Student
{
    static count = 0;

    constructor(name,age,phoneNo,boardMarks)
    {
        Student.count = Student.count + 1
        this.name = name
        this.age = age
        this.phoneNo = phoneNo
        this.boardMarks = boardMarks
    }

    checkEligibilty()
    {
        if(this.boardMarks > 40)
           console.log(`${this.name} is eligible`);
         
        else
           console.log(`${this.name} is not eligible`);    
    }

    egligibleForPlacements(marks)
    {
        return (age) => {
            if(marks > 45 && age > 18)
               return true;

            else
               return false;   
        }
    }

    static studentCount()
    {
        console.log(Student.count);
    }
}

let studentList = [  
student_1 = new Student('nikhil', 25, '7271772',46),
student_2 = new Student('kunal', 22, '9263572',38),
student_3 = new Student('rahul', 20, '43561772',56),
student_4 = new Student('rohit', 17, '2441772',62),
student_5 = new Student('manoj', 15, '8881772',30)
];


for(var i=0; i<studentList.length; i++)
{
    if(studentList[i].egligibleForPlacements(studentList[i].boardMarks)(studentList[i].age)===true)
       {
          console.log(`${studentList[i].name} is eligible`)
       }
}

// student_2.checkEligibilty();
// Student.studentCount();


//******************FAT ARROW FUNCTIONS****************************

let square = (a) => {return a*a}
//console.log(square(2));

let x = function(){
    this.val = 1;

    setTimeout(() => {
        this.val++
        console.log(this.val);
    },1)
}

//x();

let y = (...n) => {
    console.log(n[0]);
}

// y(1,2,3);