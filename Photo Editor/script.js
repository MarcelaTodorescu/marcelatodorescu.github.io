document.addEventListener('DOMContentLoaded', function() {     /* nicio functionalitate java nu va merge pana nu se incarca pagina */
	
	/* incarcare imagine in aplicatie */
	var loadImage = document.getElementById('load');
	function loadInput(e) {
		var imageFile = e.target.files[0];    /* ia primul fisier */
		var imageElement = document.getElementById('image');
		imageElement.setAttribute('src', URL.createObjectURL(imageFile));   /*setam fisierul ales */
	};
	loadImage.onchange = loadInput;
	
	/* aplicare efecte slider  */
	function changeSlider(e) {
		Caman("#image",function renderCaman() {    /*canvas al imaginii */
			this.revert(false);  
			this[e.target.name](e.target.value).render();  
			/*aplica efectul bazat pe ce alegem de pe slider. e.target.name ia numele slider-ului pe care actionam. e.target.value ia valoarea (ex: schimbam brightness) .render aplica efectul . in html la input avem si name si value */
		});
	};
	
	/*cream o variabila care stocheaza toate slider-ele, toate avand type=range */
	var ranges = document.querySelectorAll('input[type="range"]');
	ranges.forEach(function(range){
		range.onchange = changeSlider;
	});
	
	
}, false);