module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    name: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {});
  Roles.associate = (models) => {
  };
  return Roles;
};
