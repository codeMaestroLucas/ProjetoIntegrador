const veiculoData = require("../models/veiculoData");

module.exports = {
  // C
  async create(req, res) {
    const { placa, cor, ano, quilometragem } = req.body;

    if (!placa || !cor || !ano || !quilometragem) {
      return res.status(400).json({
        error: "Todos os dados são obrigatórios",
      });
    }

    try {
      await veiculoData.create({
        placa: placa,
        cor: cor,
        ano: ano,
        quilometragem: quilometragem,
      });

      return res.status(201).redirect("http://localhost:3333/")
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // R
  async read(req, res) {
    const veiculosList = await veiculoData.find();
    return res.json(veiculosList);
  },

  // U
  async update(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        error: "ID é obrigatório.",
      });
    }

    const veiculo = await veiculoData.findOne({ _id: id });

    if (!veiculo) {
      return res.status(404).json({
        error: "Veículo não encontrado.",
      });
    }

    const { placa, cor, ano, quilometragem } = req.body;

    if (!placa || !cor || !ano || !quilometragem) {
      return res.status(400).json({
        error: "Todos os dados são obrigatórios",
      });
    }

    try {
      veiculo.placa = placa;
      veiculo.cor = cor;
      veiculo.ano = ano;
      veiculo.quilometragem = quilometragem;

      await veiculo.save();
      return res.status(200).json(veiculo);
    } catch (error) {
      return res.status(500).json({
        error: "Erro ao atualizar o veículo.\n" + error.message,
      });
    }
  },

  // D
  async delete(req, res) {
    const { id } = req.params; // Parâmetro da URL

    if (!id) {
      return res.status(400).json({
        error: "ID é obrigatório.",
      });
    }

    const veiculoDeletado = await veiculoData.findByIdAndDelete({ _id: id });

    if (veiculoDeletado) {
      return res.status(204).json(veiculoDeletado);
    }

    return res.status(404).json({
      error: "Veículo não encontrado.",
    });
  },
};
