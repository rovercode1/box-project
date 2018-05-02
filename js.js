var inner = document.querySelectorAll(".in");
var colours = ["rgba(115, 130, 33, 0.5)", "rgba(156, 156, 156, 0.089)","rgba(156, 156, 156, 0.089)",]
var bg = document.querySelector(".contain");

for(i = 0; i < inner.length;i++){
  inner[i].addEventListener("click", function(){
    for(i = 0; i < inner.length ;i++){
      this.style.background=colours[0];
      inner[i].style.transition="0.2s"
      inner[i].style.background="rgba(255, 0, 0, 0.356)";
      if (this.id === "a") { 
      this.style.background="rgba(195, 100, 144, 0.356)";
      bg.style.backgroundImage="url(img/left-black.jpeg)"
      bg.style.backgroundSize="cover"; 
      }
      else if (this.id === "b") { 
      this.style.background="rgba(130, 160, 72, 0.356)";
       bg.style.background="url(img/left-woman.jpeg)"
       bg.style.backgroundSize="cover"; 
      }
      else if (this.id === "c") { 
      this.style.background="rgba(71, 158, 142, 0.356)";
       bg.style.background="url(img/right-black.jpeg)"
       bg.style.backgroundSize="cover"; 
      }
      else if (this.id === "d") { 
      this.style.background="rgba(241, 137, 76, 0.356)";
       bg.style.background="url(img/right-white.jpeg)"
       bg.style.backgroundSize="cover"; 
      }
    }
  })
}

// for(i = 0; i< 4; i++){
//   if (inner[i].id === "a") { 
//   console.log("Hi")
//   }
// }
