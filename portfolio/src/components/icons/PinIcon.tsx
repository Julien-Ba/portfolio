import PropTypes from 'prop-types';

const pinPath =
    'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0';

export default function PinIcon({
    className = 'icon icon-pin',
    width = 24,
    height = 24,
    color = 'currentColor',
    ...props
}) {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            {...props}
        >
            <g
                fill='none'
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
            >
                <path d={pinPath}></path>
                <circle cx={12} cy={10} r={3}></circle>
            </g>
        </svg>
    );
}

PinIcon.propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
};
