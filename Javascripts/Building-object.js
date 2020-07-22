//Protoypal inheritance

var Student = {    
    FisrtName: "John",
    LastName : "Doe",
    Registration : function (){
        return this.FisrtName + " " + "registered";
    }
} //this is this one way we can create an object


var CopyStudent = Object.create(Student) //Another way to create an object
CopyStudent.FisrtName = "Joe";  // override the property but it created against copyStudent. 
console.log(CopyStudent);

//Pollyfill -to support older engine with new features

if(!Object.create) //if browser does not supprt object.create
    {
        Object.create = function(passedObj) {
            if(arguments.length > 1)
                {
                    throw new Error("Object creation only accept first parameter");
                }
            function func() {}; // create an empry function
            func.prototype = passedObj; // Assign the prototype with passedObject imp!!!!
            return new func(); // create function constructor using new
        }
    }

//ES6 way to create object 

class Student {
    
    constructor (firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName  = lastName;
    }
    
    Registration() {
        return this.firstName + " " + "registered";
    }
}

var object = new Student("John", "doe");

//Inheritance - extending school for student

class Student extends School {
    
}