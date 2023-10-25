const Service = require("../services/aluno")

module.exports = { //isso é uma refatoração de aluno.js em \rotas
    getById: async (req, res) => { //refatorar é pegar um código que não está tão bom (mas que funcion) e melhorá-lo do ponto de vista de organização
        try {
            const { id } = req.params
            const aluno = await Service.getById(+id)
            if (!aluno)
                throw new Error("Aluno não encontrado!")
            return res.json(aluno);
        } catch (error) {
            return res.status(404).send(error.message)
        }
    },
    getAll: async (req, res) => {
        const alunos = await Service.getAll()
        return res.json(alunos);
    },

    create: async (req, res) => {
        try {
            const aluno = req.body
            const alunoCriado = await Service.create(aluno)
            return res.json(alunoCriado)
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        const alunoDeletado = await Service.delete(+id)
        return res.json(alunoDeletado);
    },
    update: async (req, res) => {
        const { id } = req.params
        const parcialAluno = req.body
        const alunoAtualizado = await Service.update(+id, parcialAluno)
        return res.json(alunoAtualizado);
    },
};