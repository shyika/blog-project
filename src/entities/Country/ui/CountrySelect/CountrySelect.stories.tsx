import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Country } from 'entities/Country';
import { CountrySelect } from './CountrySelect';

const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: Country.Ukraine,
        onChange: fn(),
    },
};
