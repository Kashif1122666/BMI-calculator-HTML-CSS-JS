var dayNightMode = document.querySelector(".theme-switch__container");

var body = document.getElementsByTagName("body")[0];
var  inputsContainer = document.getElementsByClassName("inputsContainer")[0];    
var header = document.getElementsByClassName("header")[0];
var button = document.getElementsByClassName("button")[0];
var footer = document.getElementsByClassName("footer")[0];
var logo = document.getElementsByClassName("logo")[0];

  var isNightMode = false;
    
        
        dayNightMode.addEventListener('click' , () => {
            if (!isNightMode){
            body.style.backgroundColor="gray";
            inputsContainer.style.backgroundColor="gray";
            header.style.backgroundColor="gray";
            button.style.backgroundColor="gray";
            footer.style.backgroundColor = "gray";
        
            body.style.color = "white"; 
        inputsContainer.style.color = "white";
        header.style.color = "white";
        button.style.color = "white";
        footer.style.color = "white";
        logo.style.color = "white";
        isNightMode = true;
    } else{
        
            body.style.backgroundColor="";
            inputsContainer.style.backgroundColor="";
            header.style.backgroundColor="";
            button.style.backgroundColor="";
            footer.style.backgroundColor = "";
        
            body.style.color = "";  
        inputsContainer.style.color = "";
        header.style.color = "";
        button.style.color = "";
        footer.style.color = "";
        logo.style.color = "";
        isNightMode = false;
    }

 } 
); 








