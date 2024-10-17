import type { Meta, StoryObj } from '@storybook/react';

import { Text } from 'shared/ui/Text/Text';
import { Card } from './Card';

const meta = {
    title: 'shared/Card',
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <Text title="test" text="text text" />,
    },
};
