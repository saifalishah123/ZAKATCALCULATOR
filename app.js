// for donation

function donate() {
    window.open('https://www.saylaniwelfare.com/en/donate', '_blank');
}


function calculate(event){
    event.preventDefault();
    let cashInput = document.getElementById("Cash").value;
    let goldInput = document.getElementById("Gold").value;
    let silverInput = document.getElementById("Silver").value;

    if(cashInput == "" & goldInput =="" & silverInput =="" ){
        alert("Please Enter Atlest One Value");

        return;
    }

    let totalNetWorth = parseInt(cashInput|| 0) + parseInt(goldInput || 0) + parseInt(silverInput ||0);

    let totalNetWorthDisplay = "Rs. " + totalNetWorth.toLocaleString();
    let payableDisplay = "Rs. " + (totalNetWorth * 0.025 ).toLocaleString();

    document.querySelector(".Total h4").textContent = totalNetWorthDisplay;
    document.querySelector(".Payable h4").textContent = payableDisplay;
  }