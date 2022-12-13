import calculator from "./calculator";

test("Five plus two", () => {
    expect(calculator.add(5, 2)).toBe(7)
})
test("Five menos two", () => {
    expect(calculator.subtract(5, 2)).toBe(3)
})
test("Five times two", () => {
    expect(calculator.multiply(5, 2)).toBe(10)
})
test("Five divided by two", () => {
    expect(calculator.divide(5, 2)).toBe(2.5)
})