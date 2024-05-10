window.onload=function(){
   const inputBox =document.querySelector("#box");
   const copyBtn=document.querySelector(".fas.fa-copy");
   const genbtn=document.querySelector(".gen-btn");
   // Function to generate a random password
   function generatePassword(){
      const length=12;
      const charset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!~@#$%^&*(){}[]'<>/";
      let Password="";
      for(let i=0;i<length;i++)
      {
        let randomIndex=Math.floor(Math.random()*charset.length);
        Password+=charset[randomIndex];

      }
      return Password;
   }
  
    // Event listener for the generate button
    genbtn.addEventListener("click",()=>{
     const newPassword=generatePassword();
    inputBox.value=newPassword;
    });
    // Event listener for the copy icon
    copyBtn.addEventListener("click",()=>{
        inputBox.select();
        document.execCommand("copy");
        alert("text coppied on clipboard");
    })

}