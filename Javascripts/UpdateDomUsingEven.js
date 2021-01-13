var title = document.getElementById("heading");
var firstPara = document.getElementById("firstPara");
var secondPara = document.getElementById("secondPara");

var circle = document.getElementById("circle");
var circleContainer = document.getElementById("circleContainer");
var context = circleContainer.getContext('2d');

// document.addEventListener("keydown", (event) =>{
    
   
//     if(circle && circleContainer)
//     {
//         var clonedCircle = circle.cloneNode(true);
//         if(clonedCircle && circleContainer)
//         {
//             circleContainer.appendChild(clonedCircle);
//         }
//     }
// })

var innerHeight = circleContainer.height;
var innerWidth = circleContainer.width;


var x = Math.floor(Math.random() * innerWidth); 
var y = Math.floor(Math.random() * innerHeight); 
var vx = Math.floor(Math.random() * 2); 
var vy = Math.floor(Math.random() * 4); 
var radius = 10; 



const ChangeTheColorOfCircle = () =>{
  
    console.log("Printing out vx:", vx + "And XY is:", vy);
    requestAnimationFrame(ChangeTheColorOfCircle);
    circleContainer.style.backgroundColor = "red";
    context.clearRect(0,0, innerWidth, innerHeight);
    
    context.beginPath();
    context.strokeStyle = "black";
    context.arc(x, y, radius, 0, Math.PI * 2, false); 
    context.stroke(); 

    if (radius + x > innerWidth) 
            vx = 0 - vx; 
          
 
        if (x - radius < 0) 
            vx = 0 - vx; 
 
        if (y + radius > innerHeight) 
            vy = 0 - vy; 
      
 
        if (y - radius < 0) 
            vy = 0 - vy; 
 
        x = x + vx; 
        y = y + vy; 
    // let number = Math.floor(Math.random() * 167777216).toString(16);
    // let xAxis = circle.getBoundingClientRect();
    // let circleContain = circleContainer.getBoundingClientRect();

    // console.log("location of the circle X:=>", xAxis.left, xAxis.top);
    
    // console.log("location of the circle X:=>", circleContain.width, circleContain.height);
    // circle.style.backgroundColor = `#${number}`;
    // debugger;
    // if(xAxis.top + xAxis.height < circleContain.height)
    // {
    //     circle.style.top = (xAxis.top + (Math.random() * 100)).toString()+ "px";
    //     circle.style.left =(xAxis.width + (Math.random() * 100)).toString()+ "px";
    // }
    // else
    // {

    //     if(xAxis.top > circleContain.height)
    //     {
    //         circle.style.top = (circleContain.height - (xAxis.height + (Math.random() * 100))).toString()+ "px";
    //     } 

    //     if(xAxis.left > circleContain.width)
    //     {
    //         circle.style.left = (circleContain.width - (xAxis.width + + (Math.random() * 100))).toString()+ "px";
    //     }

    //     if(xAxis.left + xAxis.width < circleContain.width)
    //     {
    //         circle.style.left =(xAxis.width - (Math.random() * 100)).toString()+ "px";
    //     }

    //     if(xAxis.top + xAxis.height < circleContain.height)
    //     {
    //         circle.style.top = (xAxis.top - (Math.random() * 100)).toString()+ "px";
    //     }
    // }
    // else{
    //     circle.style.top = (xAxis.top - Math.ceil(Math.random())).toString()+ "px";
    // }
    
    // if(xAxis.left + xAxis.width < circleContain.width)
    // {
    //     circle.style.top = Math.ceil(Math.random()).toString()+ "px";
    //     circle.style.left = Math.ceil(Math.random()).toString()+ "px";
    // }
    // else{
    //     circle.style.left = (xAxis.left - Math.ceil(Math.random())).toString()+ "px";
    // }
    
}

// circle.addEventListener("click", ChangeTheColorOfCircle)

setInterval(ChangeTheColorOfCircle, 2000);

// setTimeout(ChangeTheColorOfCircle, 5);



function blue()
{
    let color = "blue";
   
    title.setAttribute('style', 'color: ' + color);
    firstPara.setAttribute('style', `color: ${color}`);
    secondPara.setAttribute('style', `color: ${color}`);
}

function red()
{
    let color = "red";
   
    title.setAttribute('style', 'color: ' + color);
    firstPara.setAttribute('style', `color: ${color}`);
    secondPara.setAttribute('style', `color: ${color}`);
}

function BtnClicked()
{
    let btn = document.getElementById("transitionBtn");
    let contentDiv = document.getElementById("Content");

    if( btn.textContent === "Collapsed" )
    {
        btn.textContent = "Expand";
        contentDiv.setAttribute("style", 'height: ' + "200px");
    }
    else
    {
        btn.textContent = "Collapsed";
        contentDiv.setAttribute("style", 'height: ' + "400px");
    }
}