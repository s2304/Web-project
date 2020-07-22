// Function Constructor convention should be capital letter

function Student(firstName, lastName, rollNo) 
{
    console.log(this);
    this.firstName = firstName;
    this.lastName  = lastName;
    this.rollNo    = rollNo;
    
    console.log("This is function and getting invoked");
};

Student.prototype.getStudentRollNo = function(){
    return this.rollNo;
}

//var student1 = new Student("Jack", "daniel", 1); //creatting constructor -- student object

var student1 = Student("Jack", "daniel", 1);  // Just invoked the function

console.log(student1);

//var student2 = new Student("Jack1", "daniel1", 2) //creatting second constructor -- student object

var student2 = Student("Jack1", "daniel1", 2) //Just invoked function with another parameter

console.log(student2);

Student.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

console.log(getFullName());

//Built In function constructor - premetive type
//Number(3)
//Boolean
//String
//Date

var a = 3;
var b = new Number(a);

a == b //true -> this is object comparison
a === b // false -> this is comparison with object and primitve value
