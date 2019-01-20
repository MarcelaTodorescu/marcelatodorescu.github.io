document.addEventListener('DOMContentLoaded', function() {     /* nicio functionalitate java nu va merge pana nu se incarca pagina */
	
	/* incarcare imagine in aplicatie */
	var loadImage = document.getElementById('load');
	function loadInput(e) {
		var imageFile = e.target.files[0];    /* ia primul fisier */
		var imageElement = document.getElementById('image');
		imageElement.setAttribute('src', URL.createObjectURL(imageFile));   /*setam fisierul ales */
	};
	loadImage.onchange = loadInput;
	
	
	
	
}, false);