/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    prefix: 'tw-',
    theme: {
        extend: {
            animation: {
                move: 'move 0.6s linear',
            },
            keyframes: {
                move: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
