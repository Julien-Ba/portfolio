import { SVGProps } from 'react';
import { useThemeStore } from '@/store/themeStore';

const sunCorePath = 'M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0';
const sunRaysPath = [
    // Top ray
    'M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75',
    // Top-right ray
    'M19.601 4.399a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0',
    // Right ray
    'M20.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75',
    // Bottom-right ray
    'M18.148 18.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06',
    // Bottom ray
    'M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75',
    // Bottom-left ray
    'M5.852 18.148a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0',
    // Left ray
    'M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75',
    // Top-left ray
    'M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06',
];
const moonPath =
    'M10.412 4.158A8 8 0 1 0 18.93 16A9 9 0 0 1 10 7c0-.98.131-1.937.412-2.842M2 12C2 6.477 6.477 2 12 2h1.734l-.868 1.5C12.287 4.5 12 5.69 12 7a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626C20.162 19.137 16.417 22 12 22C6.477 22 2 17.523 2 12';
const starsPath = [
    // Top star
    'm15.844 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.781-1.428z',
    //Bottom star
    'M20.5 6.416l.914 1.67l1.67.914l-1.67.914l-.914 1.67l-.914-1.67L17.916 9l1.67-.914z',
];

interface Props extends SVGProps<SVGSVGElement> {
    className?: string;
    width?: number;
    height?: number;
}

export default function ThemeIcon({
    className = 'icon icon-theme',
    width = 24,
    height = 24,
    ...props
}: Props) {
    const { theme } = useThemeStore();

    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            {...props}
        >
            <g className='icon-theme--light'>
                <path
                    fill='currentColor'
                    d={sunCorePath}
                    style={{
                        animationName: `${theme === 'light' ? 'fade-in' : 'fade-out'}`,
                        animationDuration: '300ms',
                        animationTimingFunction: 'ease-in',
                        animationFillMode: 'forwards',
                    }}
                ></path>
                {sunRaysPath.map((sunRayPath, index) => (
                    <path
                        key={`themeIconSunRay${index}`}
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d={sunRayPath}
                        style={{
                            animationName: `${theme === 'light' ? 'fade-in' : 'fade-out'}`,
                            animationDuration: `${300 + (index + 1) * 50}ms`,
                            animationTimingFunction: 'ease-in',
                            animationFillMode: 'forwards',
                        }}
                    ></path>
                ))}
            </g>

            <g className='icon-theme--dark'>
                <path
                    fill='currentColor'
                    d={moonPath}
                    style={{
                        animationName: `${theme === 'dark' ? 'fade-in' : 'fade-out'}`,
                        animationDuration: '300ms',
                        animationTimingFunction: 'ease-in',
                        animationFillMode: 'forwards',
                    }}
                ></path>
                {starsPath.map((starPath, index) => (
                    <path
                        key={`themeIconStar${index}`}
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d={starPath}
                        style={{
                            animationName: `${theme === 'dark' ? 'fade-in' : 'fade-out'}`,
                            animationDuration: `${300 + (index + 1) * 200}ms`,
                            animationTimingFunction: 'ease-in',
                            animationFillMode: 'forwards',
                        }}
                    ></path>
                ))}
            </g>
        </svg>
    );
}
