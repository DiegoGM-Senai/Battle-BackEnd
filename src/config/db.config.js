module.exports = {
    HOST: "containers-us-west-54.railway.app",
    USER: "postgres",
    PASSWORD: "x58NMXM6DZRn5k4mH5qm",
    DB: "railway",
    DIALECT : "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
