const express = require('express')
const app = express()
const sassMiddleware = require('node-sass-middleware')
const path = require('path')
const morgan = require('morgan')

app.set('views', './views') // 範本檔所在的目錄
app.set('view engine', 'pug') // 要使用的範本引擎

app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    // debug: true,
    outputStyle: 'compressed'
}))
app.use(express.static('public'))

app.use(morgan(":status :method from ':url' in :response-time[1] ms"))

app.get('/', (request, response) => {
  response.render('main.pug')
})

app.listen(3000)