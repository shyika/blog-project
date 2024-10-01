import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '../../../config/i18n/i18nForTests';

export interface componentRenderOptions {
    route?: string
}

export function componentRender(Component: ReactNode, options: componentRenderOptions = {}) {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {Component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
