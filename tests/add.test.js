const add = require("../functions/Add")

it('should return correct sum', () => {
    const res = add(10, 20)
    expect(res).toBe(30)
})
it('should return correct sum', () => {
    const res = add(10, 2)
    expect(res).toBe(12)
})