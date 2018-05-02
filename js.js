var inner = document.querySelectorAll(".in");
var colours = ["rgba(156, 156, 156, 0.089)", "rgba(156, 156, 156, 0.089)","rgba(156, 156, 156, 0.089)",]
var bg = document.querySelector(".contain");

for(i = 0; i < inner.length;i++){
  inner[i].addEventListener("click", function(){
    for(i = 0; i < inner.length ;i++){
      this.style.background="rgba(156, 156, 156, 0.356)";
      inner[i].style.transition="0.2s"
      inner[i].style.background="rgba(255, 0, 0, 0.356)";

    }
  })
}

if(1 < 2){
  for(var i = 0; i < 2;i++){
    console.log("Hello!" + i)
  }
}