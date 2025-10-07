const express = require('express')
const app = express()
const port = process.env.NODE_PORT || 3000

// Definir motor de estilos.
app.use('/publico', express.static('publico'))

// Cargar motor de paginas.
app.use(express.static('vistas'))

app.get('/', (req, res) => {
  res.send(express.static('vistas/index.html'))
})

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto: ${port}`)
})
