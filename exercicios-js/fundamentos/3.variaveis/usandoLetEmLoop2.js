const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () { /* push adiciona um elemento novo ao array */ 
        console.log(i)
    })
}

funcs[2] ()
funcs[6] ()
funcs[8] ()