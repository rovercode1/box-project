var inner = document.querySelectorAll(".inner");

for(i = 0; i < inner.length;i++){
  inner[i].addEventListener("click", function(){
    for(i = 0; i < inner.length +1;i++){
      inner[i].style.background="red"
      this.style.background="blue"
    }
  })
}