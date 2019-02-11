data = [
	{
		"Categoría": "Merchandising",
		"Ahorro": 0.1,
		"Tiempo": 1
	},
	{
		"Categoría": "Material promocional",
		"Ahorro": 0.1,
		"Tiempo": 1
	},
	{
		"Categoría": "Material para punto de venta",
		"Ahorro": 0.1,
		"Tiempo": 1
	},
	{
		"Categoría": "BTL / Activaciones",
		"Ahorro": 0.1,
		"Tiempo": 2
	},
	{
		"Categoría": "Organización de Eventos",
		"Ahorro": 0.1,
		"Tiempo": 3
	},
	{
		"Categoría": "Impresiones",
		"Ahorro": 0.1,
		"Tiempo": 0.5
	},
	{
		"Categoría": "Avisos/publicidad exterior",
		"Ahorro": 0.1,
		"Tiempo": 1
	},
	{
		"Categoría": "Agencias de publicidad / Digitales",
		"Ahorro": 0.1,
		"Tiempo": 2
	},
	{
		"Categoría": "Locaciones / salones de eventos",
		"Ahorro": 0.05,
		"Tiempo": 2
	},
	{
		"Categoría": "Catering",
		"Ahorro": 0.05,
		"Tiempo": 1.5
	},
	{
		"Categoría": "Transporte",
		"Ahorro": 0.05,
		"Tiempo": 1
	},
	{
		"Categoría": "Dotaciones",
		"Ahorro": 0.05,
		"Tiempo": 2
	},
	{
		"Categoría": "Papelería/material de oficina",
		"Ahorro": 0.05,
		"Tiempo": 0.5
	},
	{
		"Categoría": "Cartones y Empaques",
		"Ahorro": 0.05,
		"Tiempo": 1
	},
	{
		"Categoría": "Embalajes",
		"Ahorro": 0.05,
		"Tiempo": 1
	},
	{
		"Categoría": "Ferretería",
		"Ahorro": 0.05,
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
    num2 = data [posicion].Ahorro;
    document.getElementsByClassName("resultado1").innerHTML = num1 * num2;
}
function ahorroOrmiggaD(){
    hora1 = data [posicion].Tiempo;
    document.getElementsByClassName("resultado2").innerHTML = hora1 * 9;
    
}
function ahorroOrmiggaM(){
    num3 = data [posicion].Ahorro;
    document.getElementsByClassName("resultado3").innerHTML = num3 * num4;
    
}

function resultado(){
    gastoPromedio();
    ahorroOrmiggaD();
    ahorroOrmiggaM();
}

$("#action2").on("click", function(){
    //$(".resultado3").show("ahorroOrmigaM");
    alert(data [posicion].Categoría)
});