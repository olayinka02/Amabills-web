$(document).ready(function () {
    $('#nav-icon3').click(function () {
      $(this).toggleClass('open');
    });
  });


  var icon = document.getElementById("icon");

  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src = "./images/lightdarkmode.svg";
    }
    else{
      icon.src = "./images/darklightmode.svg";
    }
  }  

  var iconx = document.getElementById("iconx");

  iconx.onclick = function(){
    document.body.classList.toggle("dark-theme");
    // if(document.body.classList.contains("dark-theme")){
    //   icon.src = "./images/lightdarkmode.svg";
    // }
    // else{
    //   icon.src = "./images/darklightmode.svg";
    // }
  }  