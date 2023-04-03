const cliente = document.querySelector('select[name="cliente"]');
const data = document.querySelector('input[name="data"]');
const Cabelereiro = document.querySelector('select[name="Cabelereiro"]');
const horario = document.querySelector('select[name="horario"]');
const btn = document.querySelector('#btn');

let listCabelereiro = localStorage.getItem('Cabelereiro');
listCabelereiro = JSON.parse(listCabelereiro);

let listcliente = localStorage.getItem('cliente');
listcliente = JSON.parse(listcliente);

for (let i = 1; i < listCabelereiro.Cabelereiros.length; i++) {
	Cabelereiro.innerHTML += `<option value='${listCabelereiro.Cabelereiros[i].nome} - ${listCabelereiro.Cabelereiros[i].especialidade}'>${listCabelereiro.Cabelereiros[i].nome} - ${listCabelereiro.Cabelereiros[i].especialidade}</option>`;
}
for (let i = 1; i < listcliente.clientes.length; i++) {
	cliente.innerHTML += `<option value='${listcliente.clientes[i].nome}'>${listcliente.clientes[i].nome}</option>`;
}

	
btn.addEventListener('click', () => {
	let agendar = new Agendamento(data.value, horario.value, Cabelereiro.value, cliente.value);

	console.log('Isso é do event: ' + agendar.verificaagendacortecabelo());

	let verifica = agendar.newagendacortecabelo();

	if (verifica.status == 'success') {
		data.value = '';
		Cabelereiro.value = '';
		cliente.value = '';
		horario.value = '';

		alert(verifica.message);
		console.log(verifica.message);
	} else {
		alert(verifica.message);

		console.log(verifica.message);
	}
});
