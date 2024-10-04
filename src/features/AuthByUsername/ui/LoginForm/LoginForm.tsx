import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Authorization form')} />
            {error && <Text text={t('Incorrect username or password')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Log in')}
            </Button>
        </div>
    );
});
