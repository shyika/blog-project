import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps extends PropsWithChildren {
    element?: HTMLElement
}

export const Portal = ({ children, element = document.body }: PortalProps) => createPortal(children, element);
