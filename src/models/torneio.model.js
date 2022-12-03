module.exports = (sequelize, Sequelize) => {
    const Torneio = sequelize.define('torneio', {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING,
            notNull: true
        },
        logo:{
            type: Sequelize.STRING,
            NotNull: true,
        },
        descricaoLonga:{
            type: Sequelize.STRING(3000),
            NotNull: true,
        },
        descricaoBreve:{
            type: Sequelize.STRING(1000),
            NotNull: true,
        },
        imgFundo:{
            type: Sequelize.STRING,
            NotNull: true,
        },
        thumbnail:{
            type: Sequelize.STRING,
            NotNull: true,
        },
        participantes:{
            type: Sequelize.STRING,
            NotNull: true,
        },
        gameId: {
            type: Sequelize.INTEGER,
            NotNull: true
        },
        chave: {
            type: Sequelize.STRING,
            NotNull: true,
        },
        quantiaParticipantes: {
            type: Sequelize.INTEGER,
            NotNull: true
        }
    },
    {
        timestamps: false,
    }
    )
    return Torneio
}
