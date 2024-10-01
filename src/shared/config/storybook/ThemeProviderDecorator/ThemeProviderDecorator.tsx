import { Theme } from 'app/providers/ThemeProvider';
import { ReactRenderer, StrictArgs } from '@storybook/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { fn } from '@storybook/test';

export const ThemeProviderDecorator = (theme: Theme) => (Story: PartialStoryFn<ReactRenderer, StrictArgs>) => (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, setTheme: fn }}>
        <Story />
    </ThemeContext.Provider>
);
