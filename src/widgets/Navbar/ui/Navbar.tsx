import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Log in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi dolorum eligendi ex facere fugit illum laboriosam magnam odit temporibus?
            </Modal>
        </div>
    );
};
