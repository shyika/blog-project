import { FunctionComponent, SVGAttributes } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
    path: string
    text: string
    Icon: FunctionComponent<SVGAttributes<SVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Main page link',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'About page link',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile page link',
        Icon: ProfileIcon,
    },
];
