window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
        var img = document.querySelector('img');
        img.src = URL.createObjectURL(this.files[0]);
	}
    resetFunction();
	
	startTimer();
	var w = null;
	function startTimer()
	{
        w = new Worker("timer.js");
		w.onmessage = function (event) {
        document.getElementById("timer").innerHTML = event.data;
		}
	}
	
  });
});

function greyFunction()
{
    document.getElementById('img').setAttribute("class", "styleGrey");
}
function resetFunction()
{
    document.getElementById('img').setAttribute("class", "reset");
}
function blurFunction()
{
    document.getElementById('img').setAttribute("class", "styleBlur");
}
function brightnessFunction()
{
    document.getElementById('img').setAttribute("class", "styleBrightness");
}
function contrastFunction()
{
    document.getElementById('img').setAttribute("class", "styleContrast");
}
function invertFunction()
{
    document.getElementById('img').setAttribute("class", "styleInvert");
}
function opacityFunction()
{
    document.getElementById('img').setAttribute("class", "styleOpacity");
}
function sepiaFunction()
{
    document.getElementById('img').setAttribute("class", "styleSepia");
}