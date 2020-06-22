// cambio en apariencia del menu

window.addEventListener("scroll" , function(){
	var barra = document.querySelector("nav");
	barra.classList.toggle("sticky" , window.scrollY > 0);
})

//medidor de pixeles temporal

window.addEventListener("scroll" , function(){
	window.scrollY >0;
	console.log(scrollY);
})

//boton arriba

window.addEventListener("scroll" , function(){
	var boton = document.getElementById('arriba');
	boton.classList.toggle("arriba" , window.scrollY > 0);
})


//boton responsive

function menu(){
	var boton = document.getElementById('menu');
	boton.classList.toggle("menu");
}
