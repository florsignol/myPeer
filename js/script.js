function setFocus(id) {
	blackberry.focus.setFocus(id);
}
function actionSync() {
	alert("All media synced");
}
function actionBrowse() {
	location = "browse.html"
}
function actionFind() {
	location = "http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Carleton+University,+Ottawa,+ON,+Canada&aq=2&sll=35.675147,-95.712891&sspn=42.742137,67.236328&ie=UTF8&hq=Carleton+University,+Ottawa,+ON,+Canada&hnear=Carleton+University,+1125+Colonel+By+Dr,+Ottawa,+Ontario+K1S+5B6,+Canada&ll=45.383166,-75.698303&spn=0.001142,0.002052&t=h&z=19"
}
function actionCall() {
	alert("Calling child");
}
function actionOptions() {
	alert("No options available");
}

function browse() {
	var dir = "saved/images/";
	
	getJSON('http://ro.boti.ca/peer/browse.json.php?directory=' + encodeURIComponent(dir) + '&callback=?', function(data){
	   return data.images ? loadImages(data.images) : false;
	});
	
	function loadImages(srcArray) {
		var imageList = document.getElementById("image-list");
		for(var i = 0; i < srcArray.length; i++) {
			var image = document.createElement('a');
			image.setAttribute('href', 'http://ro.boti.ca/peer/saved/' + srcArray[i]);
			image.innerHTML = '<img src="http://ro.boti.ca/peer/saved/' + srcArray[i] + '" height="110" width="110" />';
			imageList.appendChild(image);
		}
	}
}

function getJSON(URL, success){

   // Create new function (within global namespace)
   // (With unique name):
   var uniqueID = 'json'+(+(new Date()));
	   window[uniqueID] = function(data){
		   success && success(data);
	   };

   // Append new SCRIPT element to DOM:
   document.getElementsByTagName('body')[0].appendChild((function(){
	   var script = document.createElement('script');
	   script.type = 'text/javascript';
	   script.src = URL.replace('callback=?','callback=' + uniqueID);
	   return script;
   })());

}

