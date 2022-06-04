const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const motivationalPhrase = {
    'quote1': {
        'phrase': 'Today will be your day.',
        'type' : 'positive'
    }, 
    'quote2': {
        'phrase': 'You have the power to make a change in your life',
        'type' : 'inspirational'
    },
    'default': {
        'phrase': 'Today is a day',
        'type' : 'funny'
    }
}

app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/api:quote',(req,res) =>{
    const quoteNum = req.params.quote
    if(motivationalPhrase[quoteNum]){
        res.json(motivationalPhrase['phrase'])
    }else{
        res.json(motivationalPhrase['default'])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on port ${PORT}.`)
})