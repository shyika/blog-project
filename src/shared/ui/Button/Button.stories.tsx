import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        onClick: fn(),
        children: 'Button',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        children: '>',
    },
};

export const SquareSizeL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        children: '>',
        size: ButtonSize.L,
    },
};

export const SquareSizeXl: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        children: '>',
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
