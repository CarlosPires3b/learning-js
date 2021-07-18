{
    {
        {
            { var sera = 'Será???' }
            console.log(sera)
        }
    }
}
console.log(sera) // vai encontrar a variável, pois var é global(menos se tiver 
                  // dentro de uma function, ai só é visivel dentro do proprio escopo)

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) // não é visível essa variável fora do escopo da function