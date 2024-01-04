// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: 'Valor 1',
    propiedad2: 'Valor 2',
    propiedad3: {
        propiedad4: 'valor 4',
        propiedad5: 'valor 5',
        propiedad6: {
            // Utiliza una función flecha para no cambiar el contexto de this
            propiedad9: () => 'valor7'
        }
    }
 }

module.exports = objetoAnidado;
