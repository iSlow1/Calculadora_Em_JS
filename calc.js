const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const resultado = document.getElementById('resultado');
const btnSomar = document.getElementById('btnSomar');
const btnSub = document.getElementById('btnSub');
const btnMult = document.getElementById('btnMult');
const btnDiv = document.getElementById('btnDiv');

function somar()
{
	const n1 = parseInt(numero1.value);
  const n2 = parseInt(numero2.value);
  const r = n1+n2;
	resultado.value = r;

}
function sub()
{
	const n1 = parseInt(numero1.value);
  const n2 = parseInt(numero2.value);
  const r = n1-n2;
	resultado.value = r;
	
}
function mult()
{
	const n1 = parseInt(numero1.value);
  const n2 = parseInt(numero2.value);
  const r = n1*n2;
	resultado.value = r;

}
function div()
{
	const n1 = parseInt(numero1.value);
  const n2 = parseInt(numero2.value);
  const r = n1/n2;
	resultado.value = r;

}
function LimparCampos()
{
	numero1.value = '';
  numero2.value = '';
  resultado.value = '';
}