const sum = require('./sum');

test('Sum 2 and 4 to be equal 6', () => {
    expect(sum(2, 4)).toBe(6);
});

test('Object assertion', () => {
    const object = { one: 1 };
    object['two'] = 2;

    expect(object).toEqual({ one: 1, two: 2 });
});

test('Null assertion', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('Zero assertion', () => {
    const zero = 0;

    expect(zero).not.toBeNull();
    expect(zero).toBeDefined();
    expect(zero).not.toBeUndefined();
    expect(zero).not.toBeTruthy(); // true => any value
    expect(zero).toBeFalsy(); // false = 0
});

test('Sum 2 and 3 check some condition', () => {

    expect(sum(2, 3) > 4).toBeTruthy();
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(6);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThanOrEqual(6);
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch("stop");
    expect('Christoph').toMatch(/stop/i); // case insensitive
    expect('ChriSTOPh').toMatch(/stop/i); // case insensitive
    //   expect('ChriSTOPh').toMatch("stop");
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

//Exceptions
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);

    // Or you can match an exact error message using a regexp like below
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});
