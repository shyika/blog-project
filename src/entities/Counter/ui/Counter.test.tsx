import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter.test', () => {
    test('should return value by default', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        const incrementBtn = screen.getByTestId('increment-btn');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        const decrementBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(decrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
