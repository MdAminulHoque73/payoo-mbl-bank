// console.log("transfer button clicked");


document.getElementById('transfer-btn').addEventListener('click', function () {
  //1- get user number & validate
  const UserAccNumber = getValueFromInput('user-ac-number');

  if (UserAccNumber.length != 11) {
    alert('Invalid Number');
    return;
  }

  //2- get the amount,
  const transferAmount = getValueFromInput('transfer-amount');

  const currentBalance = getBalance();

  //4- calculate Balance
  const newBalance = currentBalance - Number(transferAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert('Invalid Amount');
    return;
  }

  const pin = getValueFromInput('transfer-pin');
  if (pin === '1234') {
  alert(
   `Transfer money Successful from ${UserAccNumber}  at ${new Date()}`,
    );

    setBalance(newBalance);
    //1- history container ke shore niye ashbo
    const history = document.getElementById('history-container');

    //2- new div create korbo
    const newHistory = document.createElement('div');

    //3- new div innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">

        Transfer Money Success to
         ${transferAmount}Taka acc-no ${UserAccNumber} at ${new Date()}

      </div>
      `;

    //4- history container a newDiv append korbo
    history.append(newHistory);
  } else {
    alert('Invalid Pin');
  }
});