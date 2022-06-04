const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const phrase = {
    'quote1': {
        'quote': 'Today will be your day.',
        'type' : 'positive'
    }, 
    'quote2': {
        'quote': 'You have the power to make a change in your life',
        'type' : 'inspirational'
    },
    'default': {
        'quote': 'Today is a day',
        'type' : 'funny'
    }
}

app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/api:quote',(req,res) =>{
    const quoteNum = req.params.quote
    if(phrase[quoteNum]){
        res.json(phrase[quote])
    }else{
        res.json(phrase['default'])
    }
})

app.listen(PORT, ()=> {
    console.log(`The server is running on port ${PORT}.`)
})