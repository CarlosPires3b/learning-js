// IIFE → Immediately Invoked Function Expression


// Fugindo do escopo global utilizando funções alto invocadas
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()