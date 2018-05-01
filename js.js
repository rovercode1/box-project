var inner = document.querySelectorAll(".in");

for(i = 0; i < inner.length;i++){
  inner[i].addEventListener("click", function(){
    for(i = 0; i < inner.length +1 ;i++){
      inner[i].style.background="rgba(156, 156, 156, 0.089)"
      this.style.background="blue"
    }
  })
}