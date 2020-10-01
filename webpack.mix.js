const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/admin/js/app.js', 'public/assets/js')
    .js('resources/admin/js/login.js', 'public/assets/js')
    .js('resources/public/js/theme.js', 'public/js')
    .sass('resources/admin/scss/main.scss', 'public/assets/css')
    .sass('resources/public/scss/style.scss', 'public/css')
    //.extract(['vue'])
    //.postCss('resources/public/css/app.css', 'public/css', [])
;

