const { isFizzy, isBuzzy, fizzyBuzzy, fizzBuzz, FIZZ, BUZZ, FIZZBUZZ } = require('../fizzbuzz')

test('Test FIZZ', () => {
    expect(FIZZ).toBe("fizz");
    expect(FIZZ).not.toBe("buzz");
})

test('Test BUZZ', () => {
    expect(BUZZ).toBe("buzz");
    expect(BUZZ).not.toBe("fizz");
})

test('Test FIZZBUZZ', () => {
    expect(FIZZBUZZ).toBe("fizzbuzz");
    expect(FIZZBUZZ).not.toBe("fizz");
})

test('Test isFizzy', () => {
    expect(isFizzy(1)).toBe(false);
    expect(isFizzy(33)).toBe(true);
    expect(isFizzy(101)).toBe(false);
    expect(isFizzy(63)).toBe(true);
})

test('Test isBuzzy', () => {
    expect(isBuzzy(10)).toBe(true);
    expect(isBuzzy(33)).toBe(false);
    expect(isBuzzy(105)).toBe(true);
    expect(isBuzzy(63)).toBe(false);
})

test('Test fizzyBuzzy', () => {
    expect(fizzyBuzzy(10)).toEqual("buzz");
    expect(fizzyBuzzy(30)).toEqual("fizzbuzz");
    expect(fizzyBuzzy(105)).toEqual("fizzbuzz");
    expect(fizzyBuzzy(33)).toEqual("fizz");
    expect(fizzyBuzzy(23)).toEqual("");
})

test('Test fizzBuzz', () => {
    expect(fizzBuzz(10)).toStrictEqual({ "count": 10, "buzz": 2,  "fizz": 3, "fizzBuzz": 0 });
    expect(fizzBuzz(30)).toStrictEqual({ "count": 30, "buzz": 4, "fizz": 8, "fizzBuzz": 2 });
    expect(fizzBuzz(12)).toStrictEqual({ "count": 12, "buzz": 2, "fizz": 4, "fizzBuzz": 0 });
    expect(fizzBuzz(98)).toStrictEqual({ "count": 98, "buzz": 13, "fizz": 26, "fizzBuzz": 6 });
})