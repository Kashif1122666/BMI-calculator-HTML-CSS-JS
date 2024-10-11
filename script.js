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
var results = document.getElementsByClassName("title")[0];
var checkButton = document.getElementsByClassName("button")[0];

    checkButton.addEventListener('click' , () => {
        var height = document.getElementById("height").value;
        var weight = document.getElementById("weight").value;
        var age = document.getElementById("age").value;
        
        
       var  value = weight/height; 
       if(/[a-zA-Z]/.test(height) || /[a-zA-Z]/.test(weight)){
              alert(`please enter some numeric values to input fields`);
       }
       else if((height === "") || (weight === "") || (age === "")) {
              alert(`please enter values to all required input fields`);
       }
       else if((height < 0) || (weight < 0)) {
        alert(`please enter some  positive values to the input fields`);
 }
       else if (value < 18.5) {
             alert(`Your BMI is ${value} at the age of ${age}  which is below 18.5, and considered underweight`);
        }
            else if (18.5 <= value < 24.9) {
                 alert(`Your BMI is ${value} at the age of ${age}  which is  between 18.5 and 24.9, and considered normal`);
            }
            else if(25 <= value < 29.9) {
                 alert(`Your BMI is ${value} at the age of ${age} which is  between 25 and 29.9, and classified as overweight`);
                }    
            else if (value >= 30) {
                 alert(`Your BMI  ${value} at the age of ${age} which is  above than 30 , and considered obesity`) ; 
                }    
        else{
              alert(`error`);
            }
       

    });
    









