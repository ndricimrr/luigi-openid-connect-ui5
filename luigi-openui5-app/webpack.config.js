const path = require('path');

module.exports = {
    entry: './luigi-config.js',
    output: {
        filename: 'luigi-config.bundle.js',
        path: path.resolve(__dirname, 'webapp'),
    },
};