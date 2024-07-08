const mult = require("../functions/Mult")

it('should return correct ans', () => {
    const res = mult(10, 20)
    expect(res).toBe(200)
})
it('should return correct ans', () => {
    const res = mult(1, 20)
    expect(res).toBe(20)
})