import PropTypes from 'prop-types';

const mailPath =
    'M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z';

export default function MailIcon({
    className = 'icon icon-mail',
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
            <path fill={color} d={mailPath}></path>
        </svg>
    );
}

MailIcon.propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
};
