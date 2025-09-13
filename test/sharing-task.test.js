const sharingTask = require('../sharing-task');

describe("the calculateDiscount() function", () => {
    // Positive Test
    test("should return the discounted price of an item depending on the discount amount", () => {
        expect(sharingTask.calculateDiscount(100, 0.1)).toBe(90);
    })
    // Negative Test
    test("should return null if the price or discountAmount are NaN", () => {
        expect(sharingTask.calculateDiscount('string', 'string')).toBe(null);
    })
    // Edge Test
    test("should return null if discount rate is less than 0 or greater than 1", () => {
        expect(sharingTask.calculateDiscount(100, 10)).toBe(null);
    })
});

let gameProducts = ["Gameboy", "PS5", "XBOX ONE", "Nintendo Switch"];
let nonArray = "fruit";

describe("the productFilterer() function", () => {
    // Positive Test
    test("should return an array of filtered products if the word length is >= 5", () => {
        expect(sharingTask.productFilterer(gameProducts)).toEqual(["Gameboy", "XBOX ONE", "Nintendo Switch"]);
    })
});

describe("the filterProducts() function", () => {
    // Positive Test
    test("should return an array of filtered products if the word length is >= 5", () => {
        expect(sharingTask.filterProducts(gameProducts, sharingTask.productFilterer)).toEqual(["Gameboy", "XBOX ONE", "Nintendo Switch"]);
    })
    // Negative Tests
    test("should return an empty array if products is not an array", () => {
        expect(sharingTask.filterProducts(nonArray, sharingTask.productFilterer)).toEqual([]);
    })
    test("should return an empty array if the callback function is not a function", () => {
        expect(sharingTask.filterProducts(gameProducts, nonArray)).toEqual([]);
    })
});

const inventory = [
  { name: 'milk', quantity: 2},
  { name: 'peppers', quantity: 0},
  { name: 'eggs', quantity: 5},
  { name: 'cherries', quantity: 5},
  { name: 'orange juice', quantity: 3}
];

let quantity = 4;

describe("the sortInventory() function", () => {
    // Positive Test
    test("should return a sorted array of objects based on sorting the specified key", () => {
        expect(sharingTask.sortInventory(inventory, "quantity")).toEqual([
            { name: 'peppers', quantity: 0 },
            { name: 'milk', quantity: 2 },
            { name: 'orange juice', quantity: 3 },
            { name: 'eggs', quantity: 5 },
            { name: 'cherries', quantity: 5 }
        ]);
    })
    // Negative Tests
    test("should return an empty array if 'inventory' is not an array", () => {
        expect(sharingTask.sortInventory(nonArray, "quantity")).toEqual([]);
    })
    test("should return an empty array if the 'key' is not a 'string'", () => {
        expect(sharingTask.sortInventory(inventory, quantity)).toEqual([]);
    })
});