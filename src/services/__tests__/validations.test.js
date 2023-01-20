const { isEmpty } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });

    test("Il doit contenir au moins 8 caractères => return true", () => {
        const result = tailleCorrecte("yotoyoto");
        expect(result).toBe(true);
    });
    test("Il doit contenir au moins 8 caractères => return false", () => {
        const result = tailleCorrecte("yoto");
        expect(result).toBe(false);
    });

});

// TODO: Create tests suite for validation function
