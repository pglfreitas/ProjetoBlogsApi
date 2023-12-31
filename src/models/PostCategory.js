module.exports = (sequelize, DataTypes) => {
	const PostCategory = sequelize.define('PostCategory', {
		postId: {
		  type: DataTypes.INTEGER,
		  field: 'post_id'
		},
		categoryId: {
		  type: DataTypes.STRING,
		  field: 'category_id'
		},
	  },
	  {
		timestamps: false,
		tableName: 'posts_categories',
		underscored: true,
	  });
	  PostCategory.associate = (models) => {
		models.Category.belongsToMany(models.BlogPost, { 
			foreignKey: 'category_id', 
			as: 'blog_posts',
			through: PostCategory,
		})
		models.BlogPost.belongsToMany(models.Category, {
			foreignKey: 'post_id', 
			as: 'categories',
			through: PostCategory,
		})
	  }
  
	return PostCategory;
  };