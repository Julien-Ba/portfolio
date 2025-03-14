import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    className?: string;
    width?: number;
    height?: number;
    color?: string;
}

const jestPath =
    'M27.089 15.786a2.606 2.606 0 0 0-2.606-2.606q-.14 0-.274.014l3.58-10.557H12.577l3.574 10.548c-.052 0-.105-.005-.158-.005a2.607 2.607 0 0 0-.792 5.09a11.4 11.4 0 0 1-2.049 2.579A10.4 10.4 0 0 1 9.5 23.116a3.324 3.324 0 0 1-1.665-4.23q.116-.27.23-.544a2.608 2.608 0 1 0-2.09-.4a20 20 0 0 0-1.889 4.788c-.354 2.135 0 4.4 1.845 5.681c4.3 2.981 8.969-1.848 13.891-3.061c1.784-.44 3.742-.369 5.313-1.28a4.44 4.44 0 0 0 2.179-3.088a4.64 4.64 0 0 0-.831-3.521a2.6 2.6 0 0 0 .606-1.671ZM18.6 15.8v-.009a2.6 2.6 0 0 0-1.256-2.23L20.188 7.8l2.85 5.814a2.6 2.6 0 0 0-1.161 2.169v.057z';
const jestOutline =
    'M27.726 15.786a3.25 3.25 0 0 0-2.643-3.186L28.677 2H11.689l3.6 10.621a3.242 3.242 0 0 0-1.005 5.919a11 11 0 0 1-1.568 1.846a9.8 9.8 0 0 1-3.16 2.03a2.66 2.66 0 0 1-1.134-3.281l.04-.093l.074-.175a3.244 3.244 0 1 0-3.34-.754q-.163.346-.339.706a14 14 0 0 0-1.4 3.8c-.465 2.8.285 5.043 2.111 6.308A5.75 5.75 0 0 0 8.934 30c2.132 0 4.289-1.071 6.4-2.119a23.6 23.6 0 0 1 4.642-1.917a18 18 0 0 1 1.8-.319a10 10 0 0 0 3.679-1.028a5.09 5.09 0 0 0 2.487-3.53a5.26 5.26 0 0 0-.69-3.613a3.2 3.2 0 0 0 .475-1.688Zm-1.273 0a1.97 1.97 0 1 1-1.97-1.97a1.973 1.973 0 0 1 1.97 1.97M26.9 3.273l-3.174 9.36a3 3 0 0 0-.4.125l-3.135-6.4l-3.145 6.362a3 3 0 0 0-.419-.114l-3.163-9.333ZM15.993 13.816a1.97 1.97 0 1 1-1.97 1.97a1.97 1.97 0 0 1 1.97-1.97m-8.523.019a1.97 1.97 0 1 1-1.97 1.97a1.97 1.97 0 0 1 1.969-1.97Zm19.217 7.034a3.82 3.82 0 0 1-1.871 2.646a8.9 8.9 0 0 1-3.223.87c-.632.091-1.285.185-1.924.343a24.6 24.6 0 0 0-4.9 2.013c-3.164 1.571-5.9 2.928-8.472 1.143c-1.887-1.308-1.8-3.728-1.58-5.054A12.8 12.8 0 0 1 6 19.376l.27-.559a3.3 3.3 0 0 0 .838.21a3.96 3.96 0 0 0 2.1 4.655l.245.126l.259-.093a11 11 0 0 0 3.876-2.4a12 12 0 0 0 1.918-2.32a3.241 3.241 0 0 0 2.64-5.627l2.038-4.121l2.059 4.2a3.24 3.24 0 0 0 4.088 5a3.95 3.95 0 0 1 .355 2.421Z';

export default function JestIcon({
    className = 'icon icon-jest',
    width = 24,
    height = 24,
    color = '#99425b',
    ...props
}: Props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            width={width}
            height={height}
            viewBox='0 0 32 32'
            {...props}
        >
            <path fill={color} d={jestPath}></path>
            <path fill='#fff' d={jestOutline}></path>
        </svg>
    );
}
