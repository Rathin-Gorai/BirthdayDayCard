window.onload =()=>{
                confetti.start()
                Swal.fire({
                    
                    title:"Happy Birthday Vaishanavi di",
                    text:`I didnt know that today is your birthday I would have created something better
                    Card created by Birthday Card Maker by me.`,
                    button:"Lets Go"

                    
                }).then((result) => {
   if(result){
     // Do Stuff here for success
     HBDmp.play();
   }else{
    // something other stuff
   }

});




                // document.getElementById("HBDmp").play()
                
                }

