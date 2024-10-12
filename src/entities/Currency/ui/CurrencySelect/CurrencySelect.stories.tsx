import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { fn } from '@storybook/test';
import { CurrencySelect } from './CurrencySelect';

const meta = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: Currency.USD,
        onChange: fn(),
    },
};
