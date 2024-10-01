import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string,
    short?: boolean,
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const {
        className,
        short,
    } = props;
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={onToggle}
            theme={ButtonTheme.CLEAR}
        >
            {t(short ? 'Lang' : 'Language')}
        </Button>
    );
};
