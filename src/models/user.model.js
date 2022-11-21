module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: Sequelize.STRING,
            notNull: true,
            is: /^[a-zA-z0-9\._]{4, 32}$/,
            unique: true
        },
        icon:{
            type: Sequelize.STRING,
            notNull: true,
        },
        email: {
            type: Sequelize.STRING,
            notNull: true,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            notNull: true
        },
        twitter: {
            type: Sequelize.STRING,
            notNull: true
        },
        
        instagram: {
            type: Sequelize.STRING,
            notNull: true
        },
        
        discord: {
            type: Sequelize.STRING,
            notNull: true
        },
        
        twitch: {
            type: Sequelize.STRING,
            notNull: true
        },
        biografia:{
            type: Sequelize.STRING(1000),
            notNull: true
        },
        status:{
            type: Sequelize.STRING,
            notNull: true
        },
        corP:{
            type: Sequelize.STRING,
            notNull: true
        },
        corS:{
            type: Sequelize.STRING,
            notNull: true
        },
        favoritados:{
            type: Sequelize.STRING,
            notNull: true
        },
        conquistas:{
            type: Sequelize.STRING,
            notNull: true
        },
        imgFundo:{
            type: Sequelize.STRING,
            notNull: true
        },
        imgFundoDois:{
            type: Sequelize.STRING,
            notNull: true
        },
        dataCriacao:{
            type:Sequelize.STRING,
            notNull: true
        }

    },
    


    {
        timestamps: false,
    }
)
    return User
}
