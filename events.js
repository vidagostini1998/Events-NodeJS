/*
const {EventEmitter} = require('events')

const ev = new EventEmitter()

ev.on('Teste',(a) =>{
    console.log("teste", a);
})

ev.emit('Teste', "mensagem")*/

const {inherits} = require('util')
const {EventEmitter} = require('events')

function Character(name){
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')

chapolin.on('help', ()=> console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E Agora, quem poderá me defender?')
chapolin.emit('help')