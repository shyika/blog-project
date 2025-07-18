import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Page is not found')}
        </Page>
    );
};
