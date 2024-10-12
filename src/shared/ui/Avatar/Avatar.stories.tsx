import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpeg';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    args: {
        src: AvatarImg,
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 150,
    },
};

export const Small: Story = {
    args: {
        size: 50,
    },
};
