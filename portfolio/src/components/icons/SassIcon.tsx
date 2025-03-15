import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    className?: string;
    width?: number;
    height?: number;
    color?: string;
}

const sassPath =
    'M1.219 56.156c0 .703.207 1.167.323 1.618c.756 2.933 2.381 5.45 4.309 7.746c2.746 3.272 6.109 5.906 9.554 8.383c2.988 2.148 6.037 4.248 9.037 6.38c.515.366 1.002.787 1.561 1.236c-.481.26-.881.489-1.297.7c-3.959 2.008-7.768 4.259-11.279 6.986c-2.116 1.644-4.162 3.391-5.607 5.674c-2.325 3.672-3.148 7.584-1.415 11.761c.506 1.22 1.278 2.274 2.367 3.053c.353.252.749.502 1.162.6c1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352c4.312-2.976 7.217-6.966 8.466-12.087c.908-3.722.945-7.448-.125-11.153a12 12 0 0 0-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954l.103.088c-.125.409-.258.817-.371 1.23c-.817 2.984-1.36 6.02-1.165 9.117c.208 3.3 1.129 6.389 3.061 9.146c1.562 2.23 5.284 2.313 6.944.075c.589-.795 1.16-1.626 1.589-2.513c1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055c-.064 1.521.025 3.033.545 4.48c.445 1.238 1.202 2.163 2.62 2.326c.97.111 1.743-.333 2.456-.896a10.4 10.4 0 0 0 2.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54c1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671c.61 1.729 1.365 3.417 2.187 5.058c.389.775.344 1.278-.195 1.928c-2.256 2.72-4.473 5.473-6.692 8.223c-.491.607-.98 1.225-1.389 1.888a3.7 3.7 0 0 0-.48 1.364a1.737 1.737 0 0 0 1.383 1.971a9.7 9.7 0 0 0 2.708.193c3.097-.228 5.909-1.315 8.395-3.157c3.221-2.386 4.255-5.642 3.475-9.501c-.211-1.047-.584-2.065-.947-3.074c-.163-.455-.174-.774.123-1.198c2.575-3.677 4.775-7.578 6.821-11.569c.081-.157.164-.314.306-.482c.663 3.45 1.661 6.775 3.449 9.792c-.912.879-1.815 1.676-2.632 2.554c-1.799 1.934-3.359 4.034-4.173 6.595c-.35 1.104-.619 2.226-.463 3.405c.242 1.831 1.742 3.021 3.543 2.604c3.854-.892 7.181-2.708 9.612-5.925c1.636-2.166 1.785-4.582 1.1-7.113c-.188-.688-.411-1.365-.651-2.154c.951-.295 1.878-.649 2.837-.868c4.979-1.136 9.904-.938 14.702.86c2.801 1.05 5.064 2.807 6.406 5.571c1.639 3.379.733 6.585-2.452 8.721c-.297.199-.637.356-.883.605a.87.87 0 0 0-.205.67c.021.123.346.277.533.275c1.047-.008 1.896-.557 2.711-1.121c2.042-1.413 3.532-3.314 3.853-5.817l.063-.188l-.077-1.63c-.031-.094.023-.187.016-.258c-.434-3.645-2.381-6.472-5.213-8.688c-3.28-2.565-7.153-3.621-11.249-3.788a25.4 25.4 0 0 0-9.765 1.503c-.897.325-1.786.71-2.688 1.073c-.121-.219-.251-.429-.358-.646c-.926-1.896-2.048-3.708-2.296-5.882c-.176-1.544-.392-3.086-.025-4.613c.353-1.469.813-2.913 1.246-4.362c.223-.746.066-1.164-.646-1.5a3 3 0 0 0-.786-.258c-1.75-.254-3.476-.109-5.171.384c-.6.175-1.036.511-1.169 1.175c-.076.381-.231.746-.339 1.122c-.443 1.563-.757 3.156-1.473 4.645c-1.794 3.735-3.842 7.329-5.938 10.897c-.227.385-.466.763-.752 1.23c-.736-1.54-1.521-2.922-1.759-4.542c-.269-1.832-.481-3.661-.025-5.479c.339-1.356.782-2.687 1.19-4.025c.193-.636.104-.97-.472-1.305c-.291-.169-.62-.319-.948-.368a11.64 11.64 0 0 0-5.354.438c-.543.176-.828.527-.994 1.087c-.488 1.652-.904 3.344-1.589 4.915c-2.774 6.36-5.628 12.687-8.479 19.013c-.595 1.321-1.292 2.596-1.963 3.882c-.17.326-.418.613-.63.919c-.17-.201-.236-.339-.235-.477c.005-.813-.092-1.65.063-2.436a172 172 0 0 1 1.578-7.099c.47-1.946 1.017-3.874 1.538-5.807c.175-.647.178-1.252-.287-1.796c-.781-.911-2.413-1.111-3.381-.409l-.428.242l.083-.69c.204-1.479.245-2.953-.161-4.41c-.506-1.816-1.802-2.861-3.686-2.803c-.878.027-1.8.177-2.613.497c-3.419 1.34-6.048 3.713-8.286 6.568a2.6 2.6 0 0 1-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41c-2.727-2.224-5.498-4.393-8.244-6.592c-2.434-1.949-4.792-3.979-6.596-6.56c-1.342-1.92-2.207-4.021-2.29-6.395c-.105-3.025.753-5.789 2.293-8.362c1.97-3.292 4.657-5.934 7.611-8.327c3.125-2.53 6.505-4.678 10.008-6.639c4.901-2.743 9.942-5.171 15.347-6.774c5.542-1.644 11.165-2.585 16.965-1.929c2.28.258 4.494.78 6.527 1.895c1.557.853 2.834 1.97 3.428 3.716c.586 1.718.568 3.459.162 5.204c-.825 3.534-2.76 6.447-5.195 9.05c-3.994 4.267-8.866 7.172-14.351 9.091a39.5 39.5 0 0 1-9.765 2.083c-2.729.229-5.401-.013-7.985-.962c-1.711-.629-3.201-1.591-4.399-2.987c-.214-.25-.488-.521-.887-.287c-.391.23-.46.602-.329.979c.219.626.421 1.278.762 1.838c.857 1.405 2.107 2.424 3.483 3.298c2.643 1.681 5.597 2.246 8.66 2.377c4.648.201 9.183-.493 13.654-1.74c6.383-1.78 11.933-4.924 16.384-9.884c3.706-4.13 6.353-8.791 6.92-14.419c.277-2.747-.018-5.438-1.304-7.944c-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274c-3.706 1.349-7.34 2.941-10.868 4.703c-7.683 3.839-14.838 8.468-20.715 14.833c-2.928 3.171-5.407 6.67-6.833 10.79a41 41 0 0 0-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002c-1.858 1.646-3.989 2.818-6.471 3.23c-.9.149-1.821.185-2.694-.188c-1.245-.532-1.524-1.637-1.548-2.814c-.037-1.876.62-3.572 1.521-5.186c1.176-2.104 2.9-3.708 4.741-5.206c2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507M54.303 70.98c-.235 1.424-.529 2.849-.945 4.229c-1.438 4.777-3.285 9.406-5.282 13.973c-.369.845-.906 1.616-1.373 2.417a1.7 1.7 0 0 1-.283.334c-.578.571-1.126.541-1.418-.206c-.34-.868-.549-1.797-.729-2.716c-.121-.617-.092-1.265-.13-1.897c.039-4.494 1.41-8.578 3.736-12.38c.959-1.568 2.003-3.062 3.598-4.054a6.3 6.3 0 0 1 1.595-.706c.85-.239 1.372.154 1.231 1.006m17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203m19.703-4.847c-.436.25-.911.43-1.358.661c-.409.212-.544-.002-.556-.354a2.4 2.4 0 0 1 .093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982';

export default function SassIcon({
    className = 'icon icon-sass',
    width = 24,
    height = 24,
    color = '#cb6699',
    ...props
}: Props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            width={width}
            height={height}
            viewBox='0 0 128 128'
            {...props}
        >
            <path fill={color} fillRule='evenodd' clipRule='evenodd' d={sassPath}></path>
        </svg>
    );
}
