const Service = require("../services/curso")

module.exports = { //isso é uma refatoração de curso.js em \rotas
    getById: async (req, res) => { //refatorar é pegar um código que não está tão bom (mas que funcion) e melhorá-lo do ponto de vista de organização
        try {
            const { id } = req.params
            const curso = await Service.getById(+id)
            if (!curso)
                throw new Error("Curso não encontrado!")
            return res.json(curso);
        } catch (error) {
            return res.status(404).send(error.message);
        }
    },
    getAll: async (req, res) => {
        const cursos = await Service.getAll()
        return res.json(cursos);
    },

    create: async (req, res) => {
        try {
            const curso = req.body
            const cursoCriado = await Service.create(curso)
            return res.json(cursoCriado)
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        const cursoDeletado = await Service.delete(+id)
        return res.json(cursoDeletado);
    },
    update: async (req, res) => {
        const { id } = req.params
        const parcialcurso = req.body
        const cursoAtualizado = await Service.update(+id, parcialcurso)
        return res.json(cursoAtualizado);
    },
};