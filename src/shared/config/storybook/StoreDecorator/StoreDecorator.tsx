import { ReactRenderer, StrictArgs } from '@storybook/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    state: Partial<StateSchema>,
    asyncReducers?: ReducersList,
) => (Story: PartialStoryFn<ReactRenderer, StrictArgs>) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
    </StoreProvider>
);
