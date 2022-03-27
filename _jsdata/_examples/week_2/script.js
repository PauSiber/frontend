const activeUserEl = document.getElementsByClassName("active-account")[0];
const activeUserBalanceEl = document.getElementsByClassName("total-money")[0];

const accounts = [];
let activeUser = null;

function createAccount() {
  let name = prompt("Hesap adinizi giriniz.");
  let password = prompt("Sifrenizi giriniz.");

  let newAccount = {
    id: accounts.length + 1,
    name: name,
    password: password,
    balance: 0,
  };

  accounts.push(newAccount);
  alert("Hesap başarıyla eklendi.");
}

function changeAccount() {
  let name = prompt("Hesap adinizi giriniz.");
  let password = prompt("Sifrenizi giriniz.");

  for (let i = 0; i < accounts.length; i++) {
    if (name === accounts[i].name && password === accounts[i].password) {
      // We found the user
      activeUser = accounts[i];
      console.log("Found user:", activeUser);
      updateAccount(activeUser);
      alert("Hesaba giriş başarılı.");
      break;
    }
  }
}

function updateAccount(user) {
  activeUserEl.innerHTML = `Account Name: ${user.name}`;
  activeUserBalanceEl.innerHTML = `Balance: ${user.balance}`;
  // Transaction process
}
