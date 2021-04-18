module.exports = {
    purge: {
        content: ['./layouts/**/*.html'],
        options: {
            whitelist: [],
        }
    },
    plugins: [
        require('postcss-import')({
            path: ["assets/css"],
        }),
        require('autoprefixer')({
            grid: true,
            overrideBrowserslist: ['>1%']
        }),
    ]
}