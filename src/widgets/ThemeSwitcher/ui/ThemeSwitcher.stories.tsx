import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator/ThemeProviderDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [ThemeProviderDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        ThemeProviderDecorator(Theme.DARK),
    ],
};
