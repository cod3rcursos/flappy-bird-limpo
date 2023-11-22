import { somar } from "../src"

test("Deve somar dois números", () => {
    expect(somar(1, 1)).toBe(2)
})
