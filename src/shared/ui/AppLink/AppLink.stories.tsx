import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'Text',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};

export const RedDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: AppLinkTheme.RED,
    },
};
