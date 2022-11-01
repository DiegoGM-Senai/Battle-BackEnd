module.exports = {
    HOST: "localhost",
    USER: "posgres",
    PASSWORD: "senai",
    DB: "users_db",
    DIALECT : "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
