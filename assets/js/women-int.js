// Women Laws Interactive JS

// console.log('women-int.js is loaded');
var slider = document.getElementById("myRange");
var sliderEs = document.getElementById("myRangeEs");
var category = document.getElementById("category");
var legal = document.getElementById("legal");
var depends = document.getElementById("depends");
var illegal = document.getElementById("illegal");

if (slider) {
	var output = slider.value;

	slider.oninput = function () {
		'use strict';
		output = this.value;
		if (this.value < 25) {
			category.innerHTML = "<div class='laws'><div class='map'><img src='assets/venezuela.png'><p>VENEZUELA</p></div><div class='desc'><p>Prostitution is <strong>legal</strong> for those over the age of 16.<h3>Did You Know?</h3><ul><li>A pack of 36 condoms was sold online for  roughly $755. This reflects the growing cost of safe sex in Venezuela, leading to a spike in sexually transmitted disease and teen pregnancies. </li><li>Traffickers are targeting Venezuelan women, mostly of poor and indigenous populations. They promise clothes, food and lodging, which causes many women to become trapped. Researchers have found that the number of sex-trafficked women has more than doubled since 2016.</li></ul></div></div>";
			slider.style.background = "#46BF21";
			legal.style.fontWeight = "700";
			depends.style.fontWeight = "200";
			illegal.style.fontWeight = "200";
		}
		else if (this.value > 25 && this.value < 75) {
			category.innerHTML = "<div class='laws'><div class='map'><img src='assets/colombia.png'><p>COLOMBIA</p></div><div class='desc'><p>Prostitution is <strong>legal</strong> in designated \"tolerance zones.\" However, prostitution outside of these zones is rarely stopped by law enforcement.<h3>Did You Know?</h3><ul><li>Sexual exploitation of minors has only been illegal since 2009. An estimated 35,000 minors are still being sexually exploited despite the law.</li><li>Major cities, notably Cartagena, are hubs for the lucrative business of sex tourism. It’s not uncommon for hotels to keep rooms available for prostitutes to use and, in return, get some of the profit.</li></ul></div></div>";
			slider.style.background = "#FBBC00";
			legal.style.fontWeight = "200";
			depends.style.fontWeight = "700";
			illegal.style.fontWeight = "200";
		}
		else if (this.value > 75 && this.value < 100) {
			category.innerHTML = "<div class='laws'><div class='map'><img src='assets/usa.png'><p>USA</p></div><div class='desc'><p>Prostitution is <strong>prohibited</strong> except in Nevada, where it is legal in 12 out of 16 counties.</p><h3>Did You Know?</h3><ul><li>Atlanta is one of the most profitable places for prostitution in the United States. The sex industry was worth $290 million there as of 2007. </li><li>In spring 2018, two events took place that made it harder for sex trafficking to live online. Firstly, the FBI shut down Backpage.com, which was a top site for posting online sex ads. Secondly, President Donald Trump signed two new bills (SOSTA and FESTA), which made websites directly liable for hosting sex trafficking activity. </li></ul></div></div>";
			slider.style.background = "#C70032";
			legal.style.fontWeight = "200";
			depends.style.fontWeight = "200";
			illegal.style.fontWeight = "700";
		}
	}

} else {
	var outputEs = sliderEs.value;

	sliderEs.oninput = function () {
		'use strict';
		console.log(outputEs);
		outputEs = this.value;
		if (this.value < 25) {
			category.innerHTML = "<div class='laws'><div class='map'><img src='assets/venezuela.png'><p>VENEZUELA</p></div><div class='desc'><p>La prostitución es <strong>legal</strong> para mayores de 16 años.</h3><h3>Sabías que...</h3><ul><li>Una caja de 36 condones se vendió en línea por aproximadamente $755. Esto refleja el costo creciente del sexo seguro en Venezuela, lo cual ha causado aumentos en las enfermedades de transmisión sexual y el embarazo precoz.</li><li>Los traficantes sexuales han comenzado a apuntar a las mujeres venezolanas, por la mayor parte a las mujeres pobres e indígenas. Les prometen ropa, comida y alojamiento, lo cual las atrapa. Investigaciones sobre el asunto han revelado que el número de mujeres víctimas del tráfico sexual ha aumentado más del doble desde 2016.</li></ul></div></div>";
			sliderEs.style.background = "#46BF21";
			legal.style.fontWeight = "700";
			depends.style.fontWeight = "200";
			illegal.style.fontWeight = "200";
		}
		else if (this.value > 25 && this.value < 75) {
			category.innerHTML = "<div class='laws'><div class='map'><img src='assets/colombia.png'><p>COLOMBIA</p></div><div class='desc'><p>La prostitución no tiene marco jurídico específico. Es <strong>legal</strong> en “zonas de tolerancia” designadas por el gobierno. Sin embargo, la policía casi nunca detiene la prostitución fuera de estas zonas.<h3>Sabías que...</h3><ul><li>La explotación sexual de menores de edad solo ha sido ilegal desde 2009. Se estima que 35.000 menores de edad aún siguen siendo explotados sexualmente a pesar de la ley.</li><li>Las ciudades importantes, en particular Cartagena, son centros provechosos para el turismo sexual. Muchos hoteles mantienen habitaciones disponibles para el uso de prostitutas y, a cambio, obtienen parte de sus ganancias.</li></ul></div></div>";
			sliderEs.style.background = "#FBBC00";
			legal.style.fontWeight = "200";
			depends.style.fontWeight = "700";
			illegal.style.fontWeight = "200";
		}
		else if (this.value > 75 && this.value < 100) {
			category.innerHTML = "<div class='laws'><div class='map'><img src='assets/usa.png'><p>USA</p></div><div class='desc'><p>La prostitución está <strong>prohibida</strong> excepto en Nevada, donde es legal en 12 de 16 condados.</p><h3>Sabías que...</h3><ul><li>Atlanta es uno de los sitios más provechosos para la prostitución en los Estados Unidos. La industria del sexo se valoró en $290 millones en 2007.</li><li>En la primavera de 2018, ocurrieron dos eventos que dificultaron el tráfico sexual en línea. Primero, el FBI cerró Backpage.com, uno de los sitios web más populares para publicar anuncios de sexo.  Segundo, el Presidente Donald Trump firmó dos nuevas leyes, SESTA y FOSTA, las cuales responsabilizan directamente a los sitios web por publicar y hospedar actividades de tráfico sexual.</li></ul></div></div>";
			sliderEs.style.background = "#C70032";
			legal.style.fontWeight = "200";
			depends.style.fontWeight = "200";
			illegal.style.fontWeight = "700";
		}
	}
}