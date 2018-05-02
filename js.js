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
      this.style.background="green";
      }
      else if (this.id === "b") { 
      this.style.background="pink";
      }
      else if (this.id === "c") { 
      this.style.background="red";
      }
      else if (this.id === "d") { 
      this.style.background="black";
      }
    }
  })
}

// for(i = 0; i< 4; i++){
//   if (inner[i].id === "a") { 
//   console.log("Hi")
//   }
// }
