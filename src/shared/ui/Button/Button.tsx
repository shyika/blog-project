import { HTMLAttributes, memo, PropsWithChildren } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
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
    disabled?: boolean,
}

// We should use memo in 90% of code
// We shouldn't wrap components with children props into memo HOC!!!
// But Button is an exception because we will have simple text as a children property
// Usually we will have some tree of nodes passed as a children. Therefore, we shouldn't use memo.
export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
