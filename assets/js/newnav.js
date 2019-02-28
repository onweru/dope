var btnContainer = document.getElementById("nav");

var btns = btnContainer.getElementsByClassName("smooth");

function nervous() {
var currentA = location.pathname;

Array.prototype.forEach.call(btns, function(){ 
    if(this.getAttribute('href').indexOf(currentA)!== -1){

        this.className += " current";
    }
});
}
