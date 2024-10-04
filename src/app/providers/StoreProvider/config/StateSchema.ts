import type { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { createReduxStore } from './store';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
