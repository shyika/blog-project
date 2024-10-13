import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Country } from 'entities/Country';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook.jpeg';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
    },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.US,
            lastname: 'Jons',
            first: 'John',
            city: 'Miami',
            currency: Currency.USD,
            avatar: AvatarImg,
        } as Profile,
    },
};

export const WithError: Story = {
    args: {
        error: 'Error',
    },
};

export const isLoading: Story = {
    args: {
        isLoading: true,
    },
};
