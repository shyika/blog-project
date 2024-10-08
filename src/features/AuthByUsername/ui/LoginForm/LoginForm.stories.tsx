import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { fn } from '@storybook/test';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/AuthByUsername/LoginForm',
    component: LoginForm,
    args: {
        onSuccess: fn(),
    },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            isLoading: false,
        },
    })],
};

export const WithError: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            isLoading: false,
            error: 'Error',
        },
    })],
};

export const Loading: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            isLoading: true,
        },
    })],
};
