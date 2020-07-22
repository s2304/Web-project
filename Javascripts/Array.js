Array.prototype.IsthisAArray = true; //Adding an another property, so array will have this property now

var arr = [1,2,3,4];

for(var item in arr) // this will take IsThisArray property while looping, property iterator
    {
        console.log(arr[item]);        //Print the item, array is an object with buit in props
    }

for(var i = 0; i < arr.length ; i++) //this is not consider IsthisAArray as it loops through item not property
    {
        console.log(arr[i]);
    }
