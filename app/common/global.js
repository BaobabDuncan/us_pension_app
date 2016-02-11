var DEBUG = true;

var DEBUG_COUNT = 0;
function printLog(sMsg){
	if(!DEBUG){
		return false;
	}
	if(!sMsg) {
		sMsg = DEBUG_COUNT;
		DEBUG_COUNT++;
	}
	console.log(sMsg);
}


var Constants = {	
	Roulette : {
		StartAngle : 4.5,
		Center : 150,
		GroupNumber : 7
	},	
};

var Groups = [ "1조", "2조", "3조", "4조", "5조", "6조", "7조" ];
var GroupsColors = [ "red", "orange", "yellow", "green", "#149cc5", "#183ea8",
		"purple" ];