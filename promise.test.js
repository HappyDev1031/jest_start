function fetchData() {
    return new Promise(resolve => {
        resolve("peanut butter");
    });
}

test('the data is peanut butter', () => {
    expect.assertions(1);
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('the data is peanut butter', () => {
    expect.assertions(1);
    return expect(fetchData()).resolves.toBe('peanut butter');
});