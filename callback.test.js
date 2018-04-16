test('the data is peanut butter', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }

    function fetchData(callback) {
        setTimeout(() => {
            callback("peanut butter");
        }, 2000);
    }

    fetchData(callback);
});