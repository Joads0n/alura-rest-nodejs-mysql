const Atendimento = require('../models/atendimento');

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        //res.send('Você está na rota de antendimentos e está realizando um GET');
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento, res);
        
    })

    app.delete('/atendimentos/:id', (req, res)=> {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}