import { Country, Currency } from 'shared/const/common';

export interface Profile {
    first: string;
    lastname: string
    age: number,
    city: string,
    username: string,
    avatar: string,
    currency: Currency,
    country: Country,
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
