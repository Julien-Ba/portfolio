import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    className?: string;
    width?: number;
    height?: number;
    color?: string;
}

export default function ResumeIcon({
    className = 'icon icon-mail',
    width = 24,
    height = 24,
    color = 'currentColor',
    ...props
}: Props) {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 20 20'
            {...props}
        >
            <g fill={color}>
                <path d='M6.5 12.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z'></path>
                <path
                    fillRule='evenodd'
                    d='M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z'
                    clipRule='evenodd'
                ></path>
                <path
                    fill='none'
                    stroke={color}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.5 2.1v4.7h4.7'
                    strokeWidth={1}
                ></path>
                <path d='M8.134 6.133a1.067 1.067 0 1 0 0-2.133a1.067 1.067 0 0 0 0 2.133'></path>
                <path
                    fillRule='evenodd'
                    d='M10.266 8.444c0-1.134-.955-1.955-2.133-1.955S6 7.309 6 8.444v.534a.356.356 0 0 0 .356.355h3.555a.356.356 0 0 0 .355-.355z'
                    clipRule='evenodd'
                ></path>
            </g>
        </svg>
    );
}
