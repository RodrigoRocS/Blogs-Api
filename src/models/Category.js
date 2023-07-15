module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'categories',
    timestamps: false,
    underscored: true,
  });
  // User.associate = (models) => {
  //   User.hasMany(models.blogPost, {
  //     foreignKey: 'user_id',
  //     as: 'blogPosts',
  //   });
  // };
  return Category;
};


