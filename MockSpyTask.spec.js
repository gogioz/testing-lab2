var counter = {
    currentValues: function () {
        return 1;
    },
};
function sumOfValues() {
    return counter.currentValues();
}

describe("mock and spy", function () {
    beforeEach(function () {
        hager = jasmine.createSpyObj("hager", ["play", "dance"]);
        hager.play();
        hager.dance();
    });
    it("spying", function () {
        spyOn(counter, "currentValues");
        counter.currentValues();
        expect(counter.currentValues).toHaveBeenCalledTimes(1);
    });
    it("Mocking", function () {
        expect(hager.play).toHaveBeenCalledTimes(1);
        expect(hager.dance).toHaveBeenCalledTimes(1);
    });
});
