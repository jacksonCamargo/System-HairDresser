const nome = document.querySelector('input[name="nome"]');
const especialidade = document.querySelector('input[name="especialidade"]');
const email = document.querySelector('input[name="email"]');
const btn = document.querySelector('#btn');
// const crm = document.querySelector('input[name="crm"]');

btn.addEventListener('click', () => {
	let novoCabelereiro = new NovoCabelereiro(
		nome.value,
		email.value,
		// crm.value,
		// especialidade.value
	);

	let verifica = novoCabelereiro.newCabelereiro();

	if (verifica.status == 'success') {
		nome.value = '';
		email.value = '';
		// crm.value = '';
		// especialidade.value = '';

		alert(verifica.message);

		console.log(verifica.message);
	} else {
		alert(verifica.message);

		console.log(verifica.message);
	}
});

// let cliente = new Agendamento(
// 	'30/11/2019',
// 	'Ana',
// 	'Higor',
// 	'1199999999',
// 	'19/12/2000',
// 	'82198291289182',
// 	'higor@cleantech.com'
// );

// console.log(cliente.newConsulta());
