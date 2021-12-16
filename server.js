const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

const assetController = require('./controllers/assetController')

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/assets', assetController)

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
