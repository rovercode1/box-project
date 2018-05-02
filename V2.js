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