/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6",
                secondary: "#ec4899",
                accent: "#8b5cf6",
                // We can map these to the CSS variables if we want, or just use hex codes.
                // Since I used exact utility classes often (e.g. text-gray-400), we need standard tailwind colors.
                // But for custom ones:
                dark: "#0a0a0a",
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
