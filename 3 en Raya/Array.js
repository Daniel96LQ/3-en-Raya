const car = [['', '', ''], ['', '', ''], ['', '', '']];

var count = 0;
var turno = "O";

function iniciar(){
	var btn00 = document.getElementById('btn00');
	var btn01 = document.getElementById('btn01');
	var btn02 = document.getElementById('btn02');

	var btn10 = document.getElementById('btn10');
	var btn11 = document.getElementById('btn11');
	var btn12 = document.getElementById('btn12');

	var btn20 = document.getElementById('btn20');
	var btn21 = document.getElementById('btn21');
	var btn22 = document.getElementById('btn22');
}
// FUNCIONES
function blockAll(){
	btn00.disabled = true;
	btn01.disabled = true;
	btn02.disabled = true;

	btn10.disabled = true;
	btn11.disabled = true;
	btn12.disabled = true;

	btn20.disabled = true;
	btn21.disabled = true;
	btn22.disabled = true;
}

function setLosser(){
	if(car[0][0] == turno){ btn00.className = "miss"; } else { btn00.className = "los"; }
	if(car[0][1] == turno){ btn01.className = "miss"; } else { btn01.className = "los"; }
	if(car[0][2] == turno){ btn02.className = "miss"; } else { btn02.className = "los"; }
	if(car[1][0] == turno){ btn10.className = "miss"; } else { btn10.className = "los"; }
	if(car[1][1] == turno){ btn11.className = "miss"; } else { btn11.className = "los"; }
	if(car[1][2] == turno){ btn12.className = "miss"; } else { btn12.className = "los"; }
	if(car[2][0] == turno){ btn20.className = "miss"; } else { btn20.className = "los"; }
	if(car[2][1] == turno){ btn21.className = "miss"; } else { btn21.className = "los"; }
	if(car[2][2] == turno){ btn22.className = "miss"; } else { btn22.className = "los"; }

	if(car[0][0] == ''){ btn00.className = ""; }
	if(car[0][1] == ''){ btn01.className = ""; }
	if(car[0][2] == ''){ btn02.className = ""; }
	if(car[1][0] == ''){ btn10.className = ""; }
	if(car[1][1] == ''){ btn11.className = ""; }
	if(car[1][2] == ''){ btn12.className = ""; }
	if(car[2][0] == ''){ btn20.className = ""; }
	if(car[2][1] == ''){ btn21.className = ""; }
	if(car[2][2] == ''){ btn22.className = ""; }
}
// Función para definir una fila ganadora
function setWinnerRow1(){
	btn00.className = "win";
	btn01.className = "win";
	btn02.className = "win";
	document.getElementById('resultado').textContent = "Jugador [" + turno + "] es el ganador.";
	blockAll();
}

function setWinnerRow2(){
	btn10.className = "win";
	btn11.className = "win";
	btn12.className = "win";
	document.getElementById('resultado').textContent = "Jugador [" + turno + "] es el ganador.";
	blockAll();
}

function setWinnerRow3(){
	btn20.className = "win";
	btn21.className = "win";
	btn22.className = "win";
	document.getElementById('resultado').textContent = "Jugador [" + turno + "] es el ganador.";
	blockAll();
}
// Funciones para definir una columna ganadora
function setWinnerCol1(){
	btn00.className = "win";
	btn10.className = "win";
	btn20.className = "win";
	document.getElementById('resultado').textContent = "Jugador [" + turno + "] es el ganador.";
	blockAll();
}

function setWinnerCol2(){
	btn01.className = "win";
	btn11.className = "win";
	btn21.className = "win";
	document.getElementById('resultado').textContent = "Jugador [" + turno + "] es el ganador.";
	blockAll();
}

function setWinnerCol3(){
	btn02.className = "win";
	btn12.className = "win";
	btn22.className = "win";
	document.getElementById('resultado').textContent = "Jugador [" + turno + "] es el ganador.";
	blockAll();
}
// Funciones para definir una diagonal ganadora
function setWinnerDiag1(){
	btn00.className = "win";
	btn11.className = "win";
	btn22.className = "win";
	document.getElementById('resultado').textContent = "Jugador [" + turno + "] es el ganador.";
	blockAll();
}

function setWinnerDiag2(){
	btn02.className = "win";
	btn11.className = "win";
	btn20.className = "win";
	document.getElementById('resultado').textContent = "Jugador [" + turno + "] es el ganador.";
	blockAll();
}

function verify(){
	count++;
	let row1 = 0, row2 = 0, row3 = 0;
	let col1 = 0, col2 = 0, col3 = 0;
	let diag1 = 0, diag2 = 0;

	for(let i = 0; i < 3; i++){
		if(car[0][i] == turno){ row1 += 1; }
		if(car[1][i] == turno){ row2 += 1; }
		if(car[2][i] == turno){ row3 += 1; }

		if(car[i][0] == turno){ col1 += 1; }
		if(car[i][1] == turno){ col2 += 1; }
		if(car[i][2] == turno){ col3 += 1; }
	}

	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			if(i == j){
				if(car[i][j] == turno){ diag1 += 1; }
			}
		}
	}

	if(car[0][2] == turno){ diag2 += 1; }
	if(car[1][1] == turno){ diag2 += 1; }
	if(car[2][0] == turno){ diag2 += 1; }

	if(row1 == 3 || row2 == 3 || row3 == 3 || col1 == 3 || col2 == 3 || col3 == 3 || diag1 == 3 || diag2 == 3){
		setLosser();
	} else {
		if(count == 9){ 
			document.getElementById('resultado').textContent = "Empate...";
			blockAll();
		}
	}

	if(row1 == 3) { setWinnerRow1(); }
	if(row2 == 3) { setWinnerRow2(); }
	if(row3 == 3) { setWinnerRow3(); }

	if(col1 == 3) { setWinnerCol1(); }
	if(col2 == 3) { setWinnerCol2(); }
	if(col3 == 3) { setWinnerCol3(); }

	if(diag1 == 3) { setWinnerDiag1(); }
	if(diag2 == 3) { setWinnerDiag2(); }
}

function changeTurn(){
	verify();
	
	if(turno == 'O'){ turno = 'X'; } else { turno = 'O'; }
}

function setValue(btn){
	btn.disabled = true;
	btn.textContent = turno;
}

function reset(){
	window.location.reload();
}
// Eventos ONCLICK
btn00.onclick = function(e){
	car[0][0] = turno;
	setValue(btn00);
	changeTurn();
}

btn01.onclick = function(e){
	car[0][1] = turno;
	setValue(btn01);
	changeTurn();
}

btn02.onclick = function(e){
	car[0][2] = turno;
	setValue(btn02);
	changeTurn();
}

btn10.onclick = function(e){
	car[1][0] = turno;
	setValue(btn10);
	changeTurn();
}

btn11.onclick = function(e){
	car[1][1] = turno;
	setValue(btn11);
	changeTurn();
}

btn12.onclick = function(e){
	car[1][2] = turno;
	setValue(btn12);
	changeTurn();
}

btn20.onclick = function(e){
	car[2][0] = turno;
	setValue(btn20);
	changeTurn();
}

btn21.onclick = function(e){
	car[2][1] = turno;
	setValue(btn21);
	changeTurn();
}

btn22.onclick = function(e){
	car[2][2] = turno;
	setValue(btn22);
	changeTurn();
}