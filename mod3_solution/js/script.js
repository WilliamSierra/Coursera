function main() {

  $('.navbar-toggle collapsed').on('click', function() {
    var hoja = document.createElement('style')
    hoja.innerHTML = ".container {border: 2px solid black; background-color: blue;}";
    document.body.appendChild(hoja);
	});
}

$(document).ready(main);
