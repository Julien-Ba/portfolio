import './link.scss';
import { PropsWithChildren } from 'react';
import { Link as LinkReact } from 'react-router-dom';

interface Props extends PropsWithChildren {
    to: string;
    target?: string;
}

export default function Link({ to, target, children, ...props }: Props) {
    return (
        <LinkReact to={to} target={target} className='link' {...props}>
            {children}
        </LinkReact>
    );
}
