<?php

namespace Chicorycom\Cigaformation;


use Chicorycom\Cigaformation\Http\Middleware\ChicorycomAdminMiddleware;
use Chicorycom\Cigaformation\Http\Middleware\ChicorycomGuestMiddleware;
use Chicorycom\Cigaformation\View\Components\ModulaireFormation;
use Chicorycom\Cigaformation\View\Components\Slide;
use Chicorycom\Cigaformation\View\Components\TopCourses;
use Illuminate\Support\ServiceProvider;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Routing\Router;
use Illuminate\Support\Arr;

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
        $router->aliasMiddleware('chicorycomguest', ChicorycomGuestMiddleware::class);
        $router->aliasMiddleware('chicorycom', ChicorycomAdminMiddleware::class);

        $router->prefix(config('cigaformation.prefix'))
            ->middleware('api')
            ->as('chicorycom.')
            ->namespace('Chicorycom\Cigaformation\Http\Controllers\Admin')
            ->group(__DIR__.'/../routes/admin.php');

         $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'chicorycom');
        $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
         $this->loadViewsFrom(__DIR__.'/../resources/views', 'chicorycom');
         $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        $this->loadViewComponentsAs('chicorycom', [
            Slide::class,
            TopCourses::class,
            ModulaireFormation::class
        ]);


        // Publishing is only necessary when using the CLI.
        if ($this->app->runningInConsole()) {
            $this->bootForConsole();
        }

        if (!file_exists(public_path('storage'))) {
            $this->fixMissingStorageSymlink();
        }
    }

    /**
     * Load helpers.

    protected function loadHelpers()
    {
        foreach (glob(__DIR__.'/Helpers/*.php') as $filename) {
            require_once $filename;
        }
    }
     */
    /**
     * Register view composers.

    protected function registerViewComposers()
    {
        // Register alerts
        View::composer('chicorycom::*', function ($view) {
            $view->with('alerts', VoyagerFacade::alerts());
        });
    }
     */
    /**
     * Add storage symlink alert.
     */
    protected function addStorageSymlinkAlert()
    {
        if (app('router')->current() !== null) {
            $currentRouteAction = app('router')->current()->getAction();
        } else {
            $currentRouteAction = null;
        }
        $routeName = is_array($currentRouteAction) ? Arr::get($currentRouteAction, 'as') : null;

        if ($routeName != 'ch.dashboard') {
            return;
        }

        $storage_disk = (!empty(config('cigaformation.storage.disk'))) ? config('cigaformation.storage.disk') : 'public';

        if (request()->has('fix-missing-storage-symlink')) {
            if (file_exists(public_path('storage'))) {
                if (@readlink(public_path('storage')) == public_path('storage')) {
                    rename(public_path('storage'), 'storage_old');
                }
            }

            if (!file_exists(public_path('storage'))) {
                $this->fixMissingStorageSymlink();
            }
        } elseif ($storage_disk == 'public') {
            if (!file_exists(public_path('storage')) || @readlink(public_path('storage')) == public_path('storage')) {
               /* $alert = (new Alert('missing-storage-symlink', 'warning'))
                    ->title(__('voyager::error.symlink_missing_title'))
                    ->text(__('voyager::error.symlink_missing_text'))
                    ->button(__('voyager::error.symlink_missing_button'), '?fix-missing-storage-symlink=1');
                VoyagerFacade::addAlert($alert); */
            }
        }
    }

    protected function fixMissingStorageSymlink()
    {
        app('files')->link(storage_path('app/public'), public_path('storage'));

        if (file_exists(public_path('storage'))) {

        } else {

        }


    }


    /**
     * Register any package services.
     *
     * @return void
     */
    public function register()
    {

        $this->app->register(ChicorycomPublishedProvider::class);
        $this->mergeConfigFrom(__DIR__.'/../config/cigaformation.php', 'cigaformation');

        // Register the service the package provides.
        $this->app->singleton('cigaformation', function ($app) {
            return new Cigaformation;
        });

        $this->app->singleton('ChicorycomGuard', function () {
            return config('auth.defaults.guard', 'api');
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
        $this->commands(Commands\AssetPublished::class);

    }

    /**
     * Register the publishable files.
     */
    private function registerPublishableResources()
    {
        $publishablePath = __DIR__.'/..';
        $file = new Filesystem;
        $file->cleanDirectory('database/seeders');
        $file->cleanDirectory('public');

        $publishable = [
            'assets' => [
                "{$publishablePath}/public" => public_path(''),
            ],
            'seeders' => [
                "{$publishablePath}/database/seeders" => database_path('seeders'),
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
