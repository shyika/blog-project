import { ReactRenderer, StrictArgs } from '@storybook/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: Partial<StateSchema>) => (Story: PartialStoryFn<ReactRenderer, StrictArgs>) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
