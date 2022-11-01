const app = require('./src/app')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running in https://battlemode-backend.herokuapp.com/:${PORT}/api `)
})
