module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#1E90FF',
                secondary: '#FF6F61',
                success: '#28A745',
                warning: '#FFC107',
                error: '#DC3545'
            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};