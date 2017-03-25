var filmlist = sessionStorage.getItem("chosenFilm");
var $

filmlist = JSON.parse(filmlist);

$(function (){
   $("#web-title").text(filmlist["name"])
   $("#date").html(filmlist["date"])
   $("#filmtype").html(filmlist["type"])
   $("#actors").html(filmlist["actors"])
   $("#filmcover").attr("src",filmlist["cover"])
   $("#filmcontent").html(filmlist["review"])
   $("#filmthumb").attr("src",filmlist["content"])
   $("#trailer").attr("src",(filmlist["trailer"]))
   $("#Director").html(filmlist["director"])

});

window.onload=function getswitch(){
  document.getElementById("mySwitch").addEventListener("toggle",function(event){
  if(event.detail.isActive){
    console.log("你启动了开关");
    //$.session.set('selectfilm', JSON.stringify(filmlist["movies"][2]["id"]));
  }else{
    console.log("你关闭了开关");  
  }
})
};

