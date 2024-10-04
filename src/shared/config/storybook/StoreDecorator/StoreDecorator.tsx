import { ReactRenderer, StrictArgs } from '@storybook/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: Partial<StateSchema>,
    asyncReducers: Partial<ReducersMapObject<StateSchema>>,
) => (Story: PartialStoryFn<ReactRenderer, StrictArgs>) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
    </StoreProvider>
);
