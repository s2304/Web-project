Array.prototype.IsthisAArray = true; //Adding an another property, so array will have this property now

var arr = [1,2,3,4];
var arr1 = [0,7,6,5];
var arr2 = [...arr, ...arr1]


arrObj = new Array();
//console.log(arrObj.length);

arrObj.push(10);
//console.log(arrObj.length);
arrObj.push("testing");
arrObj.push(function(){
    console.log("this is a function");
});
//console.log(arrObj[2]());
arrObj.push({
    firstName : "jack",
    lastName : "decon"
});

console.log(arrObj);
var copyOfarr = arrObj;
var newArrObj = new Array(arrObj);
//arrObj.pop();
arrObj.shift();

//console.log(arrObj);
//console.log(copyOfarr.length);
//console.log(newArrObj);
//
//
//console.log(arrObj);



//console.log(arr2);

for(var item in arr) // this will take IsThisArray property while looping, property iterator
{
        console.log(arr[item]);        //Print the item, array is an object with buit in props
        break;
}

for(var i = 0; i < arr.length ; i++) //this is not consider IsthisAArray as it loops through item not property
{
        console.log(arr[i]);
        break;
}

arr.forEach(item => {
    console.log("for Each", item);
   // break;  //here you cant put break/continue
})

for( item of arr)
{
        console.log("For of", item);
        continue;
}



// performance testing

function perfTesting(noOfTime,  option)
{
    var arr = new Array(noOfTime);
    console.time()
    switch(option)
        {
            case 1: 
                {
                    console.log("Option : ", option);
                    for(let index = 0; index < arr.length; index++)
                    {

                    }
                    break;
                }
                
            case 2: 
                {
                    console.log("Option : ", option);
                    for(item in arr)
                    {

                    }
                    break;
                }
               
             case 3: 
                {
                    console.log("Option : ", option);
                    arr.forEach(item => {
                   
                    })
                    break;
                }
             case 4: 
                {
                    console.log("Option : ", option);
                    for(item of arr)
                    {
                        
                    }
                    break; 
                }
                
        }
    console.timeEnd()
}


perfTesting(1000, 1);
perfTesting(1000, 2);
perfTesting(1000, 3);
perfTesting(1000, 4);
