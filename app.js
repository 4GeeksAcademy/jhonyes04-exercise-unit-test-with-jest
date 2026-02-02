let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

const formDollarToYen = (dolares) => {
    const resultado = (dolares / oneEuroIs['USD']) * oneEuroIs['JPY']
    return parseFloat(resultado.toFixed(2));
};

const formEuroToDollar = (euros) => {
    const resultado = euros * oneEuroIs['USD']
    return parseFloat(resultado.toFixed(2));
};

const formYenToPound = (yen) => {
    const resultado = (yen / oneEuroIs['JPY']) * oneEuroIs['GBP']
    return parseFloat(resultado.toFixed(2));
};

console.log(formDollarToYen(1))
console.log(formEuroToDollar(1))
console.log(formYenToPound(1))

module.exports= { formDollarToYen, formEuroToDollar, formYenToPound};