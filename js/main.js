data = [
	{
		"Categoría": "Merchandising",
		"Ahorro": 0.17,
		"Tiempo": 1
	},
	{
		"Categoría": "Material promocional",
		"Ahorro": 0.17,
		"Tiempo": 1
	},
	{
		"Categoría": "Material para punto de venta",
		"Ahorro": 0.17,
		"Tiempo":1
	},
	{
		"Categoría": "BTL / Activaciones",
		"Ahorro": 0.17,
		"Tiempo": 2
	},
	{
		"Categoría": "Organización de Eventos",
		"Ahorro": 0.17,
		"Tiempo": 3
	},
	{
		"Categoría": "Impresiones",
		"Ahorro": 0.17,
		"Tiempo": 0.5
	},
	{
		"Categoría": "Avisos/publicidad exterior",
		"Ahorro": 0.17,
		"Tiempo": 1
	},
	{
		"Categoría": "Agencias de publicidad / Digitales",
		"Ahorro": 0.17,
		"Tiempo": 2
	},
	{
		"Categoría": "Locaciones / salones de eventos",
		"Ahorro": 0.12,
		"Tiempo": 2
	},
	{
		"Categoría": "Catering",
		"Ahorro": 0.12,
		"Tiempo": 1.5
	},
	{
		"Categoría": "Transporte",
		"Ahorro": 0.12,
		"Tiempo": 1
	},
	{
		"Categoría": "Dotaciones",
		"Ahorro": 0.12,
		"Tiempo": 2
	},
	{
		"Categoría": "Papelería/material de oficina",
		"Ahorro": 0.12,
		"Tiempo": 0.5
	},
	{
		"Categoría": "Cartones y Empaques",
		"Ahorro": 0.12,
		"Tiempo": 1
	},
	{
		"Categoría": "Embalajes",
		"Ahorro": 0.12,
		"Tiempo": 1
	},
	{
		"Categoría": "Ferretería",
		"Ahorro": 0.12,
		"Tiempo": 1
	}
];


var posicion = muestra();
function muestra(option) {
    posicion = option;


}
// Operaciones matemáticas
function gastoPromedio(){
    num1 = document.getElementById("costo-pre").value;
    
    $('.resultado1').html("$ " +(num1 * 1.10) + " COP" )
    //document.getElementsByClassName("resultado1").innerHTML = num1 * num2;
}
function ahorroOrmiggaD(){
    hora1 = data[posicion].Tiempo;
    dias = hora1 * 9;
    pdia='días';
    if(dias === 1)
        pdia='día'
    $('.resultado2').html(dias + " " + pdia);
    //document.getElementsByClassName("resultado2").innerHTML = hora1 * 9;
    
}
function ahorroOrmiggaM(){
    num3 = document.getElementById("costo-pre").value;
    num4 = data[posicion].Ahorro;
    $('.resultado3').html("$ " + ( num3 * num4 ) +" COP" )
    //document.getElementsByClassName("resultado3").innerHTML = num3 * num4;
    
}

function resultado(){
    gastoPromedio();
    ahorroOrmiggaD();
    ahorroOrmiggaM();
}

$("#action2").on("click", function(){
    resultado();
});