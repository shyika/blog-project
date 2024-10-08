import { ReactRenderer, StrictArgs } from '@storybook/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    state: Partial<StateSchema>,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>,
) => (Story: PartialStoryFn<ReactRenderer, StrictArgs>) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
    </StoreProvider>
);
