document.getElementById("cashout-btn").addEventListener("click", function () {
  //1- get agent number & validate
  const cashoutNumber = getValueFromInput('cashout-number');

  if(cashoutNumber.length != 11) {
    alert("Invalid Number")
    return;
  }

  //2- get the amount,
  const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();
  
  //4- calculate Balance
  const newBalance = currentBalance-Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    alert(`cashout Successful from ${cashoutNumber}  at ${new Date()}`);

    setBalance(newBalance);
    //1- history container ke shore niye ashbo
    const history = document.getElementById('history-container');

    //2- new div create korbo
    const newHistory = document.createElement("div");

    //3- new div innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">

        Cashout Success to
         ${cashoutAmount}Taka acc-no ${cashoutNumber} at ${new Date()}

      </div>
      `;

    //4- history container a newDiv append korbo
    history.append(newHistory);

  } else {
    alert('Invalid Pin');
  }
})

  
//  console.log('button clicked');

//  document.getElementById('cashout-btn').addEventListener('click', function () {
//    //1- get agent number & validate
//    const cashoutNumberInput = document.getElementById('cashout-number');
//    const cashoutNumber = cashoutNumberInput.value;

//    if (cashoutNumber.length != 11) {
//      alert('Invalid Agent Number');
//      return;
//    }

//    //2- get the amount, validate, convert to number
//    const cashoutamountInput = document.getElementById('cashout-amount');
//    const cashoutAmount = Number(cashoutamountInput.value);

//    //3-  get the current balance, validate, convert to number
//    const balanceElement = document.getElementById('balance');
//    const balance = Number(balanceElement.innerText);

//    //4- calculate new balance
//    const newBalance = balance - cashoutAmount;

//    if (newBalance < 0) {
//      alert('Invalid Amount');
//      return;
//    }

//    //5- get the pin and check
//    const cashoutPinInput = document.getElementById('cashout-pin');
//    const pin = cashoutPinInput.value;

//    if (pin === '1234') {
//      //5-1 true:: show an alert > set Balance
//      alert('Cashout successful');
//      balanceElement.innerText = newBalance;
//    } else {
//      //5-2 false:: show an error alert > return
//      alert('Invalid pin');
//      return;
//    }
//  });
  