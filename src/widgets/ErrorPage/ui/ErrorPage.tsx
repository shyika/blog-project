import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = (props: ErrorPageProps) => {
    const {
        className,
    } = props;

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>Something went wrong.</p>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={reloadPage}>Refresh</Button>
        </div>
    );
};
