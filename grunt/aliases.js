module.exports = {
    default: [
        'sass',
        'run:transpile',
        'rollup:dev',
        'copy:icons'
    ],
    build: [
        'clean:packages',
        'sass',
        'run:transpile',
        'run:scss',
        'rollup:dev',
        'rollup:prod',
        'rollup:esm',
        'copy:icons',
        'copy:metadata',
        'copy:dist'
    ]
};
