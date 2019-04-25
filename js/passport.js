var inicia = function () {

setTimeout(function(){ 

var test = function (localidade){
var options = $('#dataAtendimento option:contains("Abril")');
if (options.length > 0)
 var urlfake = 'achei na ' + localidade + ' a seguinte data: ' + options.val();
 window.open (urlfake + '.html', 'popup') 
};


var url = 'https://servicos.dpf.gov.br/sinpa/realizarReagendamento.do';

processar('1371');
test("via parque");
window.history.back();
processar('1372');
test("rio sul");
window.history.back();
processar('1385');
test("leblon");
window.history.back();
processar('135');
test("santos dumont");
window.history.back();




 }, 60000); };
