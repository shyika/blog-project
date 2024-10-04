import { FunctionComponent, lazy } from 'react';
import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy<FunctionComponent<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
