import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string,
    value?: Country,
    onChange?: (value: Country) => void,
    readonly?: boolean,
}

const options = [
    { value: Country.US, content: Country.US },
    { value: Country.Croatia, content: Country.Croatia },
    { value: Country.Italy, content: Country.Italy },
    { value: Country.Poland, content: Country.Poland },
    { value: Country.Spain, content: Country.Spain },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        readonly,
        onChange,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Country')}
            value={value}
            readonly={readonly}
            options={options}
            onChange={onChangeHandler}
        />
    );
});
