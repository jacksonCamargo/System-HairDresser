class NovoCliente {
    _nome = '';
    _email = '';
    _telefone = ''
    _cpf = '';
alert('funfouuu !!');

    constructor(nome, email, telefone, cpf){
        this._nome = nome;
        this._email = email;
		this._telefone = telefone;
        this._cpf = cpf;
		

        if (!localStorage.getItem('cliente')) {
			let add = {
				clientes: [{}]
			};
			localStorage.setItem('cliente', JSON.stringify(add));
		}
    }

    
	verificaCliente() {
		let cliente = localStorage.getItem('cliente');
		cliente = JSON.parse(cliente);
		let retorno = false;

		for (let i = 0; i < cliente.clientes.length; i++) {
			if (
				cliente.clientes[i].crm == this._cpf
			) {
				retorno = false;
			} else {
				retorno = true;
			}
		}

		return retorno;
    }
    
    newCliente() {
        let cliente = localStorage.getItem('cliente');
		cliente = JSON.parse(cliente);

		if (this.verificacliente()) {
			let novo = cliente.clientes.push({
				nome: this._nome,
				email: this._email,
				telefone: this._telefone,
				cpf: this._cpf,
			});

			let db = JSON.stringify(cliente);

			localStorage.setItem('cliente', db);

			return {
				status: 'success',
				message: 'cliente cadastrado com sucesso!'
			};
		} else {
			return {
				status: 'erro',
				message: 'Esse cliente já existe em nossa base de dados!'
			};
		}
    }
}