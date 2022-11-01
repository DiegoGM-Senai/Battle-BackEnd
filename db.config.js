module.exports = {
    HOST: "ec2-44-195-132-31.compute-1.amazonaws.com",
    USER: "wrsktfcfvnsayt",
    PASSWORD: "1a6162821eab9f746f6e2ca3f9201d6661ce4a8315fa128f643fe9f7c98d4a80",
    DB: "d53rjnqr3e87nc",
    DIALECT : "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}