$(document).ready(function(){
$( function() {
    $( "#accordion" ).accordion({
        collapsible: true
    })
  } );
 



  // playing w anime tab

  $("#randomBtn").click(function(){
    var images = [];
    var imgElmt = document.getElementsByTagName("img");

    for(var i = 0; i < imgElmt.length; i++ ){
        images[i] = imgElmt[i].src;
    }

    for(var i = 0; i < 4; i++ ){
        var pos = Math.floor(Math.random()*images.length);

        imgElmt[i].src = images[pos];
        images.splice(pos, 1);
        console.log(images);
    }
    
})

$("#fadeBtn").click(function(){
    $("#pic4").fadeOut(1000);    
})

$("#shrinkBtn").click(function(){
$("#pic3").slideUp(1000);
})

$("#flipBtn").click(function(){
    $("#pic2").animate({rotate:"360deg"},1000)
})
$("#resetBtn").click(function() {
location.reload();
});
  
})

