let screen = document.querySelector("#screen");
let calculator = document.querySelector("#calculator");
let buttonContainer = document.querySelector("#buttons");
let buttons = document.querySelectorAll("button");
let calculation = [];
let acum;


function calculat(button){
    
    let val = button.textContent;
    if(val === "Clear"){
calculation = [];
screen.textContent = '.'
    } 
    else if(val === "="){
        console.log(acum);
screen.textContent = eval(acum)

    } 
    else {
        calculation.push(val);
        acum = calculation.join('');
        screen.textContent = acum;
    }
    
    //console.log(acum)

}






buttons.forEach(function(button){
button.addEventListener("click", function(){
    calculat(button);
  
})
});




