
//variables globales:
var zoneNom;

window.onload = function(){
	initialiserPage();
}

function displayMessage(txt){
    zoneMsg.innerHTML=txt;
}

function initialiserPage(){
	zoneNom=document.getElementById("name");
	zoneMsg=document.getElementById("msg");
}

function bonjour(){
	var valNom = zoneNom.value;
	var msg = zoneMsg.value;
	makeAjaxGetRequest("../welcome-api/public/" + valNom, function (texteReponse) {
		this.displayMessage(texteReponse);
	});
}




