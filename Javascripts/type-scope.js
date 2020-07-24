var a = 3;
var b = a; //this is gloal scope

function scope()
{
    var b = 4; //this is local scope
    console.log("Inner ", b); //Undefined
}

console.log("Outer ", b)
console.log("Global ", this.a); // This is a global object


//function call
function scope1(a)
{
    console.log(this.a);
    this.a = a; // this here is a global object, so updating the value of the global
    console.log(a);
    return function()
    {
        return a;
    }
}

//fat arrow function call

//function call
var scope2 = (a) =>
{
    console.log(this.a);
    this.a = a; // this here is a global object, so updating the value of the global
    console.log(a);
    return function()
    {
        return this.a;
    }
}

//scope();
//console.log(scope1(7)());
//console.log(scope2(8)()); 

let c = 5;  //block scoping
function scope3()
{
    
    {
        let d = 9;
        console.log("inner1", c);
    }
    //c = d; // d is not defined here as its outside above function block;
    console.log("Inner ", c);
    
}

scope3();

const d = 4; //you have to initalize const type

function scope4()
{
    //d = 5; //typeerror - can't assign const value;
   // d = d +1;// this also cant be done 
    
    const e = 10;
    console.log(d, e);
    {
        const f = 11;
        console.log(d, e);
    }
    console.log(d, f); // const is also follow block scopping
}

scope4();