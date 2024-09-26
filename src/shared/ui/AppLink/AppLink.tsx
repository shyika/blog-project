import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';
import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends PropsWithChildren, LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            { children }
        </Link>
    );
};