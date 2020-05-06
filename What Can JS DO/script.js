var header= document.getElementById("docHeader");

var hColorChangeBtn = document.getElementById("headerColorControl");

var headerColorChange = function(){
    var redComp = Math.random() * 255;
    console.log(redComp)
    var greenComp = Math.random() * 255;
    var blueComp = Math.random() * 255;
    
    // rgb(255, 255, 255)
    // rbg(|- a number for Red -|, 255, 255)
    
    header.style.backgroundColor="rgb(" + redComp  + ", "+ greenComp +", " + blueComp + ")";
}



hColorChangeBtn.addEventListener("click", headerColorChange);