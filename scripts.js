function rankSelected (btn,val) {
    // change color and background color of the button
    let rankObj = document.getElementById(btn.id);

    rankObj.style.backgroundColor =  "#FC7614";
    rankObj.style.color = "#FFFFFF";

    // activate the submit button so can be clicked

    let submitBtn = document.getElementById("submit");

    submitBtn.disabled = false;

    // update result text with selected rank value

    let resultText = document.getElementById("rankResult");
    
    resultText.innerHTML = val;
}

function flipCard() {
  // flip the card to show thank you and results upon click
  
  let flipObj = document.querySelector(".flip-card .flip-card-inner");
  
  flipObj.classList.toggle("flipCard");
}
