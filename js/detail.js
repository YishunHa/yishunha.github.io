var filmlist = sessionStorage.getItem("chosenFilm");
var filmID;
filmlist = JSON.parse(filmlist);
filmID = filmlist["id"];

$(function layoutdata(){
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

checkstatus();

function checkstatus(){ //check whether the film has been subscribed by the user before
	if (localStorage.getItem('favourite') == null){
		myswitch();
	}
	else {
		var favouritefilm = JSON.parse(localStorage.getItem('favourite'));
	for (var i = 0; i < favouritefilm.length;i++){
		if(filmID == favouritefilm[i].id){
	   $("#mySwithShows").attr("class","mui-switch mui-switch-blue mui-active")
		}
	};
	myswitch();
	}
	
};


function myswitch(){
    var cart = filmID;
    var favouritelimit = JSON.parse(localStorage.getItem('favourite'));
  	var filmcart = {
    id: cart
  	};
  document.getElementById("mySwitch").addEventListener("toggle",function(){ 	

  if(event.detail.isActive){
  	if(localStorage.getItem('favourite') == null){ // in case the first didn't exist

  	//init array
  	var filmcarts = [];
  	//add to array
  	filmcarts.push(filmcart);
  	//save to local storage
  	localStorage.setItem('favourite',JSON.stringify(filmcarts));
  	favouritelimit = JSON.parse(localStorage.getItem('favourite'));
  	mui.toast('Success! Now you have subcribe'+ ' ' + favouritelimit.length +' '+ 'films.');
  	console.log("you had add the film to the favour");
    };
    //check whether the favourte list is more than 16
   if( favouritelimit.length > 16){ 

  	$("#mySwitch").hide();
  	$("#subs").text("Subscrition films are out of limits");
  	mui.alert('Opps, looks like you had subscribed to much films','Error','btnValue',function (e) {
  	   e.index
  	},'div');
  	//alert("your favourite list is out of limit");
  	}
  
  	else {
     //get the older data from the localstorage
     var filmcarts = JSON.parse(localStorage.getItem('favourite'));
     //add to the array
     filmcarts.push(filmcart);
     //save to the local storage
     localStorage.setItem('favourite',JSON.stringify(filmcarts));
    //alert the user
    favouritelimit = JSON.parse(localStorage.getItem('favourite'));
    mui.toast('Subscribe success! Now you have subcribe'+ ' ' + favouritelimit.length +' '+'films.');
  	}
  	
  
  }
  
  else{ //remove the film from the favourite list
  	//get the data from the local storage
  	var filmcarts = JSON.parse(localStorage.getItem('favourite'));
  	
  	for (var i = 0; i < filmcarts.length;i++){
  		//find the target array
		if(filmID == filmcarts[i].id){
	   //delete the data
	   filmcarts.splice(i, 1);
	   //save the new data to the localstorage
	   localStorage.setItem('favourite',JSON.stringify(filmcarts));
		}
    console.log("you remove the film from favourite");

  };
      favouritelimit = JSON.parse(localStorage.getItem('favourite'));
      mui.toast('Success! Now you have subcribed'+ ' ' + favouritelimit.length +' '+ 'films.');
}
});
};



