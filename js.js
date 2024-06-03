// mobile bar start
function openNav() {
    document.getElementById("myNav").style.height = "600px";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0px";
  }
  // mobile bar End

  // Silaider Start
  setInterval(function(){
            if(document.getElementsByClassName("slider-item")[0].classList.contains("active")){
                document.getElementsByClassName("slider-item")[1].classList.add("active");
                document.getElementsByClassName("slider-item")[0].classList.remove("active");
    } else if(document.getElementsByClassName("slider-item")[1].classList.contains("active")){
                document.getElementsByClassName("slider-item")[2].classList.add("active");
                document.getElementsByClassName("slider-item")[1].classList.remove("active");
    } else if(document.getElementsByClassName("slider-item")[2].classList.contains("active")){
                document.getElementsByClassName("slider-item")[3].classList.add("active");
                document.getElementsByClassName("slider-item")[2].classList.remove("active");
    } else if(document.getElementsByClassName("slider-item")[3].classList.contains("active")){
                document.getElementsByClassName("slider-item")[4].classList.add("active");
                document.getElementsByClassName("slider-item")[3].classList.remove("active");
    } else if(document.getElementsByClassName("slider-item")[4].classList.contains("active")){
                document.getElementsByClassName("slider-item")[5].classList.add("active");
                document.getElementsByClassName("slider-item")[4].classList.remove("active");
    } else if(document.getElementsByClassName("slider-item")[5].classList.contains("active")){
                document.getElementsByClassName("slider-item")[0].classList.add("active");
                document.getElementsByClassName("slider-item")[5].classList.remove("active");
    }
},1000);
// Silaider End