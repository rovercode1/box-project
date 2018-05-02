var inner = document.querySelectorAll(".in");
var colours = ["rgba(115, 130, 33, 0.5)", "rgba(156, 156, 156, 0.089)","rgba(156, 156, 156, 0.089)",]
var bg = document.querySelector(".contain");

var idKey = {
  a:{
    id:"a",
    color:"rgba(195, 100, 144, 0.356)",
  },
  b:{
    id:"b",
    color:"rgba(200, 134, 86, 0.5)",

  },
  c:{
    id:"c",
    color:"rgba(151, 232, 154, 0.5)"
  },
  d:{
    id:"d",
    color:"rgba(151, 194, 240, 0.5)"
  }
}

defaultColours()
v2()


function v2(){
  for(i = 0; i < inner.length;i++){
    inner[i].addEventListener("click", function(){
      defaultColours()
      // Sets rest of boxes to selected colour
      if(this.id == idKey[this.id].id){
        // Change to specified background image
        this.style.background=idKey[this.id].color;
      }
    })
  }
}

function defaultColours() {
  for(i = 0; i < inner.length ;i++){
    inner[i].style.transition="0.2s"
    inner[i].style.background="rgba(255, 255, 255, 0.156)";
  }
}




function v1() {
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
        bg.style.transition="0.2s"
        }
        else if (this.id === "b") { 
        this.style.background="rgba(130, 160, 72, 0.356)";
         bg.style.background="url(img/left-woman.jpeg)"
         bg.style.backgroundSize="cover"; 
         bg.style.transition="0.2s"
        }
        else if (this.id === "c") { 
        this.style.background="rgba(71, 158, 142, 0.356)";
         bg.style.background="url(img/right-black.jpeg)"
         bg.style.backgroundSize="cover"; 
         bg.style.transition="0.2s"
        }
        else if (this.id === "d") { 
        this.style.background="rgba(241, 137, 76, 0.356)";
         bg.style.background="url(img/right-white.jpeg)"
         bg.style.backgroundSize="cover"; 
         bg.style.transition="0.2s"
        }
      }
    })
  }
}
