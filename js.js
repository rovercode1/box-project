var inner = document.querySelectorAll(".in");
var colours = ["rgba(156, 156, 156, 0.089)", "rgba(156, 156, 156, 0.089)","rgba(156, 156, 156, 0.089)",]
for(i = 0; i < inner.length;i++){
  inner[i].addEventListener("click", function(){
    for(i = 0; i < inner.length +1 ;i++){
      inner[i].style.transition="0.2s"
      inner[i].style.background="rgba(255, 0, 0, 0.356)";
      this.style.background="rgba(156, 156, 156, 0.356)";
    }
  })
}