import './bullet.scss';

interface Props {
    size?: 'big' | 'small' | (string & {});
}

export default function Bullet({ size = '' }: Props) {
    const style = {};

    /**
     * size is there to give a few easy config without
     * having to worry about the element being aligned correctly
     * making a formula would be a bit complicated
     * those magic numbers aren't perfect but do the job for now
     */

    switch (size) {
        case 'big':
            Object.assign(style, { fontSize: '2.5rem', top: '0.6rem' });
            break;
        case 'small':
            Object.assign(style, { fontSize: '1rem', top: '0.1rem' });
            break;
        default:
            Object.assign(style, { fontSize: '1.5rem', top: '0.25rem' });
    }

    return (
        <span className='bullet-point' style={style}>
            &bull;
        </span>
    );
}
