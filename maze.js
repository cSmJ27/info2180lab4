var touchWall=false;

window.onload = function(){
    $("start").onclick=moveOverStart;
    $("end").onmouseover=moveOverEnd;
    var boundaries=$$("div#maze div.boundary");
    for (i=0; i<boundaries.length; i++) {
        boundaries[i].onmouseover=boundaryTouch;
    }
	document.body.observe("mousemove", outOfMaze);
};

function outOfMaze(event){
	if(touchWall===false && event.element()===document.body){
		boundaryTouch(event);
	}
}

function boundaryTouch(){
	if(touchWall===false){
		touchWall=true;
		$("status").textContent="You lose!";
		var boundaries=$$("div#maze div.boundary");
		for (i=0; i<boundaries.length; i++) {
			boundaries[i].addClassName("youlose");
		}
		event.stop();
	}
}

function moveOverStart(){
    touchWall=false;
    $("status").textContent="Try again.";
    var boundaries=$$("div#maze div.boundary");
    for (i=0; i<boundaries.length; i++){
        boundaries[i].removeClassName("youlose");
    }
}

function moveOverEnd(){
    if(!touchWall){
        $("status").textContent="You win!";
    }
}