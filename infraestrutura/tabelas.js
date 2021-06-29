class Tabelas{
    init(conexao){
        this.conexao = conexao;

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos(id int NOT NULL AUTO_INCREMENT, cliente varchar(60) NOT NULL, pet varchar(30), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacao text, PRIMARY KEY(ID))';

        this.conexao.query(sql, err => {
            if(err){
                console.log(err);
            } else {
                console.log('Tabela Atendimentos criada com sucesso');
            }
        })
    }
}

module.exports = new Tabelas