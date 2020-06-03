$(document).ready(function(){
$( function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false,
    })
  } );
 

  // Kill Corona tab

  $(document).ready(function () {
    var numProducts = 0;

    $("#tabs").tabs();

    $(".draggable").draggable({revert:"invalid"});

    $(".droppable").droppable({
        drop: function () {
            numProducts++;
            var plural = "";
            if (numProducts > 1) {
                plural = "es";
                
            }
            $(".product-cart").find("h3").text("You have killed " + numProducts + " virus" + plural)
        },
        
    });
})
  
  
  // Playing w Anime tab


  $("#randomBtn").click(function(){
        var images = [];
        var imgElmt = document.getElementsByClassName("shuffle");
        // line above I changed to "pic" because "img" is used elsewere in the code. These are the only images with a #pic in the id tag. But this doesnt work.

        for(var i = 0; i < imgElmt.length; i++){
            images[i] = imgElmt[i].src;
        }

        for(var i = 0; i < 4; i++){
            var pos = Math.floor(Math.random()*images.length);
            imgElmt[i].src = 
            images[pos];
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
 
// code for What am i Thinking

$( function() {
    var availableTags = [
      "Pacific",
      "Atlantic",
      "Miami",
      "Venice",
      "Daytona",
      "Santa Cruz",
      "Santa Monica",
      "Manhattan",
      "Hermosa",
      "Malibu",
      "Boardwalk",
      "Sand",
      "Water",
      "tide",
      "surf",
      "shore",
      "relax",
      "Fiji",
      "waves",
      "music",
      "Jamaica",
      "Waikiki",
      "Maui"
    ];
    function split( val ) {
        return val.split( /,\s*/ );
      }
      function extractLast( term ) {
        return split( term ).pop();
      }
   
      $( "#tags" )
        // don't navigate away from the field on tab when selecting an item
        .on( "keydown", function( event ) {
          if ( event.keyCode === $.ui.keyCode.TAB &&
              $( this ).autocomplete( "instance" ).menu.active ) {
            event.preventDefault();
          }
        })
        .autocomplete({
          minLength: 0,
          source: function( request, response ) {
            // delegate back to autocomplete, but extract the last term
            response( $.ui.autocomplete.filter(
              availableTags, extractLast( request.term ) ) );
          },
          focus: function() {
            // prevent value inserted on focus
            return false;
          },
          select: function( event, ui ) {
            var terms = split( this.value );
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push( ui.item.value );
            // add placeholder to get the comma-and-space at the end
            terms.push( "" );
            this.value = terms.join( ", " );
            return false;
          }
        });
    } );

  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "drop",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#reveal" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );




})


