import PropTypes from 'prop-types';

const phonePath =
    'M22 16.92v3a2 2 0 0 1-2.18 2a19.8 19.8 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.8 12.8 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92';

export default function PhoneIcon({
    className = 'icon icon-phone',
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
            <path
                fill='none'
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={phonePath}
            ></path>
        </svg>
    );
}

PhoneIcon.propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
};
