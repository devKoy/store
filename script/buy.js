// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
const btns = document.querySelectorAll(".food_buton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the buy button on modal
var buy_button = document.getElementById("modalBuy");

// When the user clicks the button, open the modal 
btns.forEach(element => {
    element.addEventListener("click", function () {
        modal.style.display = "block";
        processOrder(element.getAttribute("id"));
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	  		modal.style.display = "none";
    document.getElementById("myKilo").value = "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("myKilo").value = "";
    }
}

buy_button.addEventListener("click", function () {
    modal.style.display = "none";
    if (document.getElementById("myKilo").value == "") {
        alert("Please enter the amount of kilos you want to buy");
        document.getElementById("myKilo").value = "";
    } else {
        saveDataSet();
    }

});
