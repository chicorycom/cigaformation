<?php

namespace Chicorycom\Cigaformation;

use Chicorycom\Cigaformation\Http\Middleware\ChicorycomAdminMiddleware;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class CigaformationServiceProvider extends ServiceProvider
{
    /**
     * Perform post-registration booting of services.
     *
     * @param Router $router
     * @return void
     */
    public function boot(Router $router)
    {
        $router->aliasMiddleware('chicorycom', ChicorycomAdminMiddleware::class);
        $router->prefix(config('cigaformation.prefix'))
            ->middleware('api')
            ->as('chicorycom.')
            ->namespace('Chicorycom\Cigaformation\Http\Controllers\Admin')
            ->group(__DIR__.'/../routes/admin.php');
        $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
         $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'chicorycom');
         $this->loadViewsFrom(__DIR__.'/../resources/views', 'chicorycom');
         $this->loadMigrationsFrom(__DIR__.'/../database/migrations');


        // Publishing is only necessary when using the CLI.
        if ($this->app->runningInConsole()) {
            $this->bootForConsole();
        }
    }

    /**
     * Register any package services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__.'/../config/cigaformation.php', 'cigaformation');

        // Register the service the package provides.
        $this->app->singleton('cigaformation', function ($app) {
            return new Cigaformation;
        });

        $this->app->singleton('ChicorycomGuard', function () {
            return config('auth.defaults.guard', 'web');
        });

       // $this->registerConfigs();

        if ($this->app->runningInConsole()) {
            $this->registerPublishableResources();
            $this->registerConsoleCommands();
        }

        if (!$this->app->runningInConsole() || config('app.env') == 'testing') {
           // $this->registerAppCommands();
        }
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['cigaformation'];
    }

    /**
     * Console-specific booting.
     *
     * @return void
     */
    protected function bootForConsole()
    {
        // Publishing the configuration file.
       /* $this->publishes([
            __DIR__.'/../config/cigaformation.php' => config_path('cigaformation.php'),
        ], 'cigaformation.config');
*/
        // Publishing the views.
        /*$this->publishes([
            __DIR__.'/../resources/views' => base_path('resources/views/vendor/chicorycom'),
        ], 'cigaformation.views');*/

        // Publishing assets.
        $this->publishes([
            __DIR__.'/../public' => public_path(),
        ], 'cigaformation.views');

        // Publishing the translation files.
        /*$this->publishes([
            __DIR__.'/../resources/lang' => resource_path('lang/vendor/chicorycom'),
        ], 'cigaformation.views');
        */

        // Registering package commands.
        // $this->commands([]);
    }

    /**
     * Register the commands accessible from the Console.
     */
    private function registerConsoleCommands()
    {
        $this->commands(Commands\InstallCommand::class);

    }

    /**
     * Register the publishable files.
     */
    private function registerPublishableResources()
    {
        $publishablePath = __DIR__.'/..';


        $publishable = [
            'assets' => [
                "{$publishablePath}/public" => public_path(''),
            ],

            'seeders' => [
                "{$publishablePath}/database/seeders" => database_path('seeds'),
            ],
            'config' => [
                "{$publishablePath}/config/cigaformation.php" => config_path('cigaformation.php'),
            ],

        ];

        foreach ($publishable as $group => $paths) {
            $this->publishes($paths, $group);
        }
    }

    public function registerConfigs()
    {
        $this->mergeConfigFrom(
            dirname(__DIR__).'/../config/cigaformation.php',
            'cigaformation'
        );
    }
}
