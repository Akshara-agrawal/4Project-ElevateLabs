document.querySelectorAll(".nav a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    alert("You clicked " + a.textContent.trim());
  });
});

function sidebar(){
    let sidePanel=document.querySelector('.sidebar');
    // let togglebtn=document.querySelector('.toggle-btn');
    if(window.innerWidth<='768'){
        sidePanel.classList.toggle('open');
    }
}
