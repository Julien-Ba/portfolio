import './link.scss';
import PropTypes from 'prop-types';
import { Link as LinkReact } from 'react-router-dom';

export default function Link({ children, ...props }) {
    return (
        <LinkReact className='link' {...props}>
            {children}
        </LinkReact>
    );
}

Link.propTypes = {
    children: PropTypes.node,
};
