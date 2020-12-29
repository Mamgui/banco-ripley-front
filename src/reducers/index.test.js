import reducers from "./index";

describe("reducers tests", () => {
    test('returns the total amount of reducers defined', () => {
        const quantityOfReducers = Object.keys(reducers()).length
        expect(quantityOfReducers).toBe(0)
    })
})