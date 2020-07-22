//spread concept

function max(...vars) {
    
    console.log(...vars);
    
    console.log(Math.max(...vars))
}

function max1(...vars) {
    
    console.log(vars[0]);
    
    console.log(Math.max(...vars))
}

function max2(a,b, ...c) { 

    this.addition = function()
    {
        var totalNum = 0;
        c.forEach(number => {

            return totalNum = totalNum + number;
        });
        
        return (a + b) + totalNum;
    }
}

max(1,2,3,4);
max1(7,8,9);
max1();
max2(7,8,9);

var max2Obj = new max2(1,3,4,5,6,7,8,9); // 
console.log("Getting Total number " + max2Obj.addition()); // Calling function with rest

(function f(number){
    return (( number > 1 ) ? number * f(number -1) : number )
}(4));

var salary = "100$";
(function(){
    console.log("First Salary" + salary);
    var salary = "200$";
    console.log("Promoted salary" + salary);
}());



//Math.prototype.getMinValue = function(value) {
//    
//    if(value === undefined)
//        {
//            console.log("Value is undefined")
//        }
//    if( typeof value === string)
//        {
//            console.log("NAN");
//        }
//    if(typeof value === Array)
//        {
//            var minValue = value[0]; 
//            for(var index = 0; index < value.length ; index++)
//                {              
//                    if(minValue > value[index])
//                        {
//                            minValue = value[index];
//                        }
//                }
//            
//            console.log(minValue);
//        }
//}




function Device(Kind)
{
    this.Kind = Kind;    
}

Device.prototype.printKind = function ()
{
    console.log(this.Kind)
}

function AppleProduct(name, Kind)
{
    this.Name = name;
    Device.call(this, Kind);
}

var apple = new AppleProduct("Mac", "Laptop");

console.log(apple);
apple.protoype = Object.create(Device.prototype);

console.log(apple.Kind);



var Device = {
    Kind: "Laptop"
}

var appleDevice = Object.Create(Device,
                                {
                                    Name: "Mac"
                                });

var copyDevice = Object.Crete(appleDevice);

console.log(copyDevice);
console.log(copyDevice.Name);
