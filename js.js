var inner = document.querySelectorAll(".in");
var colours = ["rgba(156, 156, 156, 0.089)", "rgba(156, 156, 156, 0.089)","rgba(156, 156, 156, 0.089)",]
for(i = 0; i < inner.length;i++){
  inner[i].addEventListener("click", function(){
    for(i = 0; i < inner.length +1 ;i++){
      inner[i].style.transition="0.2s"
      inner[i].style.background="red";
      inner[i].style.opacity="0.5"
      this.style.background="rgb(156, 156, 156";
    }
  })
}