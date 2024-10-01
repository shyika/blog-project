import { HTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXl',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
    className?: string
    theme?: ButtonTheme,
    square?: boolean,
    size?: ButtonSize,
}

// We should use memo in 90% of code
// We shouldn't wrap components with children props into memo HOC!!!
// But Button is an exception because we will have simple text as a children property
// Usually we will have some tree of nodes passed as a children. Therefore, we shouldn't use memo.
export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
