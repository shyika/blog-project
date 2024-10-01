import { Theme } from 'app/providers/ThemeProvider';
import { ReactRenderer, StrictArgs } from '@storybook/react';
import { PartialStoryFn } from 'storybook/internal/types';

export const ThemeDecorator = (theme: Theme) => (Story: PartialStoryFn<ReactRenderer, StrictArgs>) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
