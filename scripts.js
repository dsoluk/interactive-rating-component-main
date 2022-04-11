let submitBtn = document.getElementById("submit");

//event listener for the main form of radio buttons for user to select rank

document.forms[0].addEventListener('change', function(e) {

  let target = e.target;
  let rankBtn = document.querySelector("#lbl" + target.id);

  // change colours on rank buttons to show selected

  rankBtn.style.backgroundColor =  "#FC7614";
  rankBtn.style.color = "#FFFFFF";

  // activate the submit button

  submitBtn.disabled = false;

  // update result text with selected rank value

  let resultText = document.getElementById("rankResult");
    
  resultText.innerText = target.id;

});

//-------------------------------------------------------------

// to flip the card showing thank you with rank selected...relies on listener=submitBtn

function flipCard() {
  // flip the card to show thank you and results upon click
  
  let flipObj = document.querySelector(".flip-card .flip-card-inner");
  
  flipObj.classList.toggle("flipTheCard");
}

// event listener for submit button.

submitBtn.addEventListener("click", flipCard);