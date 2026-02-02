const { formDollarToYen, formEuroToDollar, formYenToPound } = require('./app.js')

test('Un euro debe ser 1.07 dólares', () => {
    expect(formEuroToDollar(1)).toBe(1.07)
})

test('Dólares a yenes (1 dólar = 149.03 yenes)', () => {
    expect(formDollarToYen(1)).toBe(146.26)
})

test('Yenes a libras (1 yen = 0.0055 libras)', () => {
    expect(formYenToPound(1)).toBe(0.01)
})

