






var enterpriseImg = document.getElementById("enterpriseImg");
var fireButton = document.getElementById("entChange");
var resetButton = document.getElementById("reset");

var swapEntImage = function(){
    if(enterpriseImg.alt == "enterprise at rest"){
        enterpriseImg.src = "entPhotons.jpg";
        enterpriseImg.alt = "enterprise firing photon torpedoes";
        fireButton.innerText = "Fire Phasers";
    }
    else{
        enterpriseImg.src = "entPhaser.jpg";
        enterpriseImg.alt = "enterprise firing phasers";
        fireButton.innerText = "Fire Photons";
    }
}



// var resetPhaserImage = function (){
    // if (enterpriseImg.alt == "enterprise firing phasers"){
        // enterpriseImg.src = "entNormal.jpg";
        // enterpriseImg.alt = "enterprise at rest";
        // resetButton.innerText = "Weapons Ready";
    // }
// }

// var resetPhotonImage = function (){
    // if (enterpriseImg.alt == "enterprise firing photon torpedoes"){
        // enterpriseImg.src = "entNormal.jpg";
        // enterpriseImg.alt = "enterprise at rest";
        // resetButton.innerText = "Weapons Ready";
    // }
// }


fireButton.addEventListener("click", swapEntImage);

// resetButton.addEventListener("click", resetPhaserImage);
// resetButton.addEventListener("click", resetPhotonImage);