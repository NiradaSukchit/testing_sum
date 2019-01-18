const min = require('./minus');
// 11 - 2 เท่ากับ 9
test('11 - 2 เท่ากับ 9', () => {
    expect(min(11, 2)).toBe(9);
});

// 20 - 1 เท่ากับ 19
test('20 - 1 เท่ากับ 19', () => {
    expect(min(20, 1)).toBe(19);
});

// 20 - 5 เท่ากับ ?
test('20 - 5 เท่ากับ 15', () => {
    expect(min(20, 5)).toBe(15);
});

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy
test('10 - 2 เท่ากับ 8', () => {
    expect(min(10, 2)).toBe(8);
});

test('100 - 20 เท่ากับ 80', () => {
    expect(min(100, 20)).toBe(80);
});

test('18 - 8 เท่ากับ 10', () => {
    expect(min(18, 8)).toBe(10);
});