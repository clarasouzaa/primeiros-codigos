var trigonmetria = prompt("Escolha\n1.Seno\n2.Cosseno\n3.tangente");
var angulo = prompt ("digite o ângulo");
switch(trigonmetria){
    case'1':
alert(Math.sin((angulo*Math.PI)/180).toFixed(2)); break;
case'2':
alert(Math.cos((angulo*Math.PI)/180).toFixed(2)); break;
case'3':
alert(Math.tan((angulo*Math.PI)/180).toFixed(2)); break;
default:
    alert("opção inválida");
}