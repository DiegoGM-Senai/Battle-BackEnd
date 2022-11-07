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
        redes: {
            type: Sequelize.STRING,
            notNull: true
        },
        biografia:{
            type: Sequelize.STRING,
            notNull: true
        },
        status:{
            type: Sequelize.STRING,
            notNull: true
        },
        personalizacao:{
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
