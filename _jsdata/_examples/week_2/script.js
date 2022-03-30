// Assigning variables to HTML element.
const activeUserEl = document.getElementsByClassName("active-account")[0];
const activeUserBalanceEl = document.getElementsByClassName("total-money")[0];
const balanceInputEl = document.getElementsByClassName("money-input")[0];
const depositTextEl = document.getElementById("deposit-text");
const withdrawTextEl = document.getElementById("withdraw-text");

const accounts = [];
let activeUser = null;

function createAccount() {
  let name = prompt("Enter your account name.").trim(); // " js ".trim() -> "js"
  let password = prompt(
    "Enter your password.\n* You password must be minimum 8 characters long. \n Your password can not include speacial characters (/!@$#?*-_ etc.) \n* Your password must include\n- at least one uppercase letter\n- at least one lowercase letter\n- at least one number.\n* Your password must be minimum 8 characters long."
  );

  if (name === "" || password === "") {
    // Checking if name or password is empty.
    alert("Account name or password can not be empty.");
    return;
  }

  for (let i = 0; i < accounts.length; i++) {
    // Checking if account name is already taken.
    if (accounts[i].name === name) {
      alert("That account name has been using already.");
      return;
    }
  }

  // Password validation - Coded by @eneskaya12
  if (password.length < 8) {
    // Check if it is less than 8 characters.
    alert("Error: Your password must be minimum 8 characters long!");
    return;
  } else if (/[^A-Za-z0-9]/.test(password)) {
    // Check if it includes special characters.
    alert(
      "Error: Your password can not include speacial characters (/!@$#?*-_ etc.)!"
    );
    return;
  } else if (!/[A-Z]/.test(password)) {
    // Check if it includes at least one uppercase letter.
    alert(
      "Error: Your password must include at least one uppercase character!"
    );
    return;
  } else if (!/[a-z]/.test(password)) {
    // Check if it includes at least one lowercase letter.
    alert(
      "Error: Your password must include at least one lowercase character!"
    );
    return;
  } else if (!/[0-9]/.test(password)) {
    // Check if it includes at least one number.
    alert("Error: Your password must include at least one number!");
    return;
  }

  let newAccount = {
    // Creating new account object.
    id: accounts.length + 1, // Assigning id automatically.
    name: name,
    password: password,
    balance: 0,
  };

  accounts.push(newAccount); // Adding new account to accounts array.
  alert("Account has been added successfully!"); // Alerting user that account has been created.
}

function changeAccount() {
  // Change account function.
  let name = prompt("Please enter your account name.");
  let password = prompt("Please enter your password.");

  let isUserFound = false; // Assigning false value to isUserFound variable. It will be used later.
  for (let i = 0; i < accounts.length; i++) {
    if (name === accounts[i].name && password === accounts[i].password) {
      // Checking if user name and password is correct.
      isUserFound = true; // If user name and password is correct, isUserFound variable will be true. User has been found.
      activeUser = accounts[i]; // Assigning activeUser variable to accounts[i] object.
      updateAccount(activeUser); // Updating account information.
      alert("Logged in successfully. Welcome, " + activeUser.name + "!"); // Alerting user that account has been changed.
      updateAfterTransactionText(); // Updating after transaction text.
      break;
    }
  }
  if (!isUserFound) alert("Account not found."); // Alerting user that account is not found.
}

function updateAccount(user) {
  // Updating account information.
  activeUserEl.innerHTML = `Account Name: ${user.name}`; // Updating account name.
  activeUserBalanceEl.innerHTML = `Balance: ${user.balance}$`; // Updating account balance.
}

function deposit() {
  // Deposit function.
  if (activeUser == null) {
    // Checking if user has been logged in.
    alert("You must log in first.");
    return;
  }
  if (balanceInputEl.value === "") {
    // Checking if amount is empty.
    alert("Please enter amount.");
    return;
  }

  let amount = parseInt(balanceInputEl.value); // Assigning amount variable to balanceInputEl value.
  if (amount < 0) {
    // Checking if amount is less than 0.
    alert("Value can not be less than 0$"); // Alerting user that amount is less than 0.
    return;
  }
  activeUser.balance += amount; // Adding amount to activeUser balance.
  alert(amount + "$ has been added to your account successfully."); // Alerting user that amount has been added.
  updateAccount(activeUser); // Updating account information.
  clearInputValue(); // Clearing balanceInputEl value.
}

function withdraw() {
  // Withdraw function.
  if (activeUser == null) {
    // Checking if user has been logged in.
    alert("You must log in first.");
    return;
  }
  if (balanceInputEl.value === "") {
    // Checking if amount is empty.
    alert("Please enter amount.");
    return;
  }
  let amount = parseInt(balanceInputEl.value); // Assigning amount variable to balanceInputEl value.
  if (amount < 0) {
    // Checking if amount is less than 0.
    alert("Value can not be less than 0$"); // Alerting user that amount is less than 0.
    return;
  } else if (amount > activeUser.balance) {
    // Checking if amount is greater than account balance.
    alert("Insufficient balance!"); // Alerting user that amount is greater than account balance.
    return;
  } else {
    activeUser.balance -= amount; // Subtracting amount from activeUser balance.
    alert(amount + "$ has been withdrawn successfully.");
    updateAccount(activeUser); // Updating account information.
    clearInputValue(); // Clearing balanceInputEl value.
  }
}

function updateAfterTransactionText() {
  // Updating after transaction text.
  let amount = parseInt(balanceInputEl.value); // Assigning amount variable to balanceInputEl value.
  if (balanceInputEl.value !== "") {
    // Checking if amount is not a number.
    depositTextEl.innerHTML = `Balance after deposit: ${
      // Updating deposit text.
      amount + activeUser.balance
    }$`;
    withdrawTextEl.innerHTML = `Balance after withdraw: ${
      // Updating withdraw text.
      activeUser.balance - amount
    }$`;
  } else {
    depositTextEl.innerHTML = `Balance after deposit: ${activeUser.balance}$`; // Updating deposit text.
    withdrawTextEl.innerHTML = `Balance after withdraw: ${activeUser.balance}$`; // Updating withdraw text.
  }
}

function clearInputValue() {
  // Clearing input value.
  balanceInputEl.value = "";
}
