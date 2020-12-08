const { Model, DataTypes } = require("sequelize");

class Edificio extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        categoria_id: DataTypes.INTEGER,
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING,
        descricao: DataTypes.STRING,
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Edificio;
