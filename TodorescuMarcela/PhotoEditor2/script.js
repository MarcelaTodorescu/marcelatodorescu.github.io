window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          img.src = URL.createObjectURL(this.files[0]);
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