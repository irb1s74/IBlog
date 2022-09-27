import { classNames } from './classNames';

describe('classNames', () => {
    test('with one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expectedClass = 'someClass testClass testClass1';
        expect(classNames('someClass', {}, ['testClass', 'testClass1'])).toBe(expectedClass);
    });

    test('with mods', () => {
        const expectedClass = 'someClass testClass testClass1 hovered';
        expect(classNames('someClass', {
            hovered: true,
            scrollable: false,
            someMod: undefined,
        }, ['testClass', 'testClass1'])).toBe(expectedClass);
    });
});
