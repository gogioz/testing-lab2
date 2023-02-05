const { after } = require("node:test");
var module = require("../index");

describe("testing math utilities", () => {
    let pos_vals = [1, 2, 3, 4, 5];
    let neg_vals = [-1, -2, -3, -4, -5];
    let vals = pos_vals.concat(neg_vals);
    let sum_of_vals = vals.reduce((x, y) => x + y, 0);

    beforeEach(function () {
        console.log(vals);
    });
    afterEach(function () {
        console.log("done");
    });
    afterAll(function () {
        let pos_vals = 0;
        let neg_vals = 0;
        let vals = 0;
        let sum_of_vals = 0;
    });

    it("sum function should equal to sum of the values", () => {
        expect(module.sum(vals)).toEqual(sum_of_vals);
    });

    it("positive function should equal to positive values", () => {
        expect(module.positive(vals)).toEqual(pos_vals);
    });
});
