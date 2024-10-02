import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi dolorum eligendi ex facere fugit illum laboriosam magnam odit temporibus?';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: lorem,
        onClose: fn(),
        isOpen: true,
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
