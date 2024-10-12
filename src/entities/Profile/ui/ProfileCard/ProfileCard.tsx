import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string,
    data?: Profile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    onChangeLastname?: (value?: string) => void,
    onChangeFirst?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCurrency?: (currency: Currency) => void,
    onChangeCountry?: (country: Country) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirst,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Error during profile loading')}
                    text={t('Try to reload the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar alt="" src={data?.avatar} />
                </div>
            )}
            <Input
                value={data?.first}
                placeholder={t('First Name')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeFirst}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Last Name')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeLastname}
            />
            <Input
                value={data?.age}
                placeholder={t('Age')}
                type="number"
                className={cls.input}
                readonly={readonly}
                onChange={onChangeAge}
            />
            <Input
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <Input
                value={data?.username}
                placeholder={t('Username')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Avatar')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </div>
    );
};
