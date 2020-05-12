var header= document.getElementById("docHeader");

var hColorChangeBtn = document.getElementById("headerColorControl");

var frenchieImg = document.getElementById("frenchieImg");
var puppyButton= document.getElementById("puppyImgChange");

var headerColorChange = function(){
    var redComp = Math.random() * 255;
    console.log(redComp)
    var greenComp = Math.random() * 255;
    var blueComp = Math.random() * 255;
    
    // rgb(255, 255, 255)
    // rbg(|- a number for Red -|, 255, 255)
    
    header.style.backgroundColor="rgb(" + redComp  + ", "+ greenComp +", " + blueComp + ")";
}

var swapPuppyImage = function(){
    console.log(frenchieImg.alt);
    if(frenchieImg.alt == "Image of a cute Frenchie puppy"){
        frenchieImg.src = "images/corgi-puppy.jpg";
        frenchieImg.alt= "Image of a cute Corgi puppy";
        frenchieButton.innerText="Show the First One"
    }

    else {
        frenchieImg.src = "images/french-puppy.jpg";
        frenchieImg.alt= "Image of a cute Frenchie puppy";
        frenchieButton.innerText="Show the Second One"
    }

    frenchieImg.src = "images/corgi-puppy.jpg";
    puppyButton.innerText="Show the first one";
}

// just when JS first loads
headerColorChange();
// on button click
hColorChangeBtn.addEventListener("click", headerColorChange);

puppyButton.addEventListener("click", swapPuppyImage);
