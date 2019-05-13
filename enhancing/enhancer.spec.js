const enhancer = require('./enhancer.js');
// test away!

const item0 = {
    name: 'The Grandfather',
    durability: 100, //durability between 0-100
    enhancement: 10 //enhancement between 0-20
};

const item1 = {
    name: 'The Grandfather',
    durability: 100, 
    enhancement: 15 
};

const item2 = {
    name: 'Veil of Steel',
    durability: 75,
    enhancement: 20
};

const item3 = {
    name: 'Thinking Cap',
    durability: 1,
    enhancement: 0
};

describe('enhancer.js', () => {
    describe('repair() method', () => {
        it('should accept an item and returns a new item with durability 100', () => {
            expect(enhancer.repair(item1).durability).toBe(100);
            expect(enhancer.repair(item2).durability).toBe(100);
            expect(enhancer.repair(item3).durability).toBe(100);
        });
    })
    describe('succeed() method', () => {
        it('should increase enhancement by 1, unchanged if 20', () => {
            expect(enhancer.succeed(item1).enhancement).toBe(16);
            expect(enhancer.succeed(item3).enhancement).toBe(1);
        });
        it('should return the item if enhancement is already 20', () => {
            expect(enhancer.succeed(item2).enhancement).toBe(20);
        });
    })
    describe('fail() method', () => {
        it('should decrease durability by 5 if starting enhancement was less than 15', () => {
            expect(enhancer.fail(item0).durability).toBe(95);
            // expect(enhancer.fail(item3).durability).toBe(1);
        });
        it('should decrease durability by 10 if starting enhancement was >=15', () => {
            expect(enhancer.fail(item1).durability).toBe(90);
            // expect(enhancer.fail(item2).durability).toBe(65);
        });
        it('should decrease durability by 10 if starting enhancement was >=15, and decrease enhancement by 1 if enhancement was >16', () => {
            expect(enhancer.fail(item2).enhancement).toBe(19);
            // expect(enhancer.fail(item2).durability).toBe(65);
        })
    })
})
