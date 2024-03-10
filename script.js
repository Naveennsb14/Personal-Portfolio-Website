var tablinks = document.getElementsByClassName("tab_links");
var tabcontents = document.getElementsByClassName("tab_contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active_link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active_tab");
  }
  event.currentTarget.classList.add("active_link");
  document.getElementById(tabname).classList.add("active_tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzXfWFzJ6lJgE7onCv2RgcHcw9Yo_qTjoHNsbe7Q23xpfNh95Fi5ZEN4i1v7j1UdIt_/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById('msg')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML="Message sent successfully"
      setTimeout(function(){
        msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
