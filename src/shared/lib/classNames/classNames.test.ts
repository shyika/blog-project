import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with 3rd param', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass mod1 class1';
        const mods = { mod1: true, mod2: false };
        expect(classNames('someClass', mods, ['class1']))
            .toBe(expected);
    });
});
