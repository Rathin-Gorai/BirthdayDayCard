window.onload =()=>{
                confetti.start()
                Swal.fire({
                    title:"🎂 Happy Birthday Neha 🎂",
                    text:`Happy birthday! I hope all your birthday wishes and dreams come true.`,
                    button:"Lets Go" 
                }).then((result) => {
   if(result){
     // Do Stuff here for success
     HBDmp.play();
   }else{
    // something other stuff
   }
});
}

