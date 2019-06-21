timStart=true;
function tim(dd)
{	
	var d;
	d=(new Date()).valueOf();
	var dif;
	dif=d-dd;
	var mm;
	mm=Math.floor(dif/1000/60);
	var ss;
	ss=Math.floor(dif/1000)-mm*60;
	var x;
	x=null;
	mm=mm.toString();
    if (mm.length == 1){
		mm="0"+mm;
		ss=ss.toString();
	}
	if (ss.length == 1){
		ss="0"+ss;
	}
    postMessage(mm+":"+ss);
}
               
if (timStart){
   var dd=(new Date()).valueOf();
   x=setInterval(function(){tim(dd)},100);
   timStart = false;
}