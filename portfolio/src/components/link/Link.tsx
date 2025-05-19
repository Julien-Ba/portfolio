import './link.scss';
import { PropsWithChildren } from 'react';
import { Link as LinkReact } from 'react-router-dom';

interface Props extends PropsWithChildren {
    className?: string;
    to: string;
    target?: string;
}

export default function Link({ className = 'link', to, target, children, ...props }: Props) {
    return (
        <LinkReact className={className} to={to} target={target} {...props}>
            {children}
        </LinkReact>
    );
}
