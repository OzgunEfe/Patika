
let userName = document.querySelector(".user-name");


let AskUserName = prompt("Adınız Nedir?");

if (AskUserName.length === 0){
    userName.innerHTML = `Merhaba, Guest! Hoş geldin!`;
}
else{
    userName.innerHTML = `Merhaba, ${AskUserName}! Hoş geldin!`;
};

function showTime() {
    // Days
    var date = new Date();
    var days = new Array("Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi")
    var dayName = date.getDay();
    // clock
    var hours = zero(date.getHours());
    var minutes = zero(date.getMinutes());
    var seconds = zero(date.getSeconds());
    function zero(startNumber) {
      if (startNumber < 10) {
        return "0" + startNumber
      } else {
        return startNumber
      }
    }
    document.getElementById("myClock").innerHTML = `  ${hours}:${minutes}:${seconds} ${days[dayName]} `;
}

// her 1 saniyede showTime fonksiyonunu yeniden çalıştır
setInterval(showTime, 1000);