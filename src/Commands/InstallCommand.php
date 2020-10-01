<?php
/**
 * Created by PhpStorm.
 * User: assane
 * Date: 29/09/20
 * Time: 14:41
 */

namespace Chicorycom\Cigaformation\Commands;



use Chicorycom\Cigaformation\CigaformationServiceProvider;
use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Process\Process;
use Chicorycom\Cigaformation\Traits\Seedable;


class InstallCommand extends Command
{

    use Seedable;


    protected $seedersPath = __DIR__.'/../../database/seeds/';

    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'chicorycom:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install the Chicorycom Admin package';

    protected function getOptions()
    {
        return [
            ['force', null, InputOption::VALUE_NONE, 'Force the operation to run when in production', null],
            ['with-dummy', null, InputOption::VALUE_NONE, 'Install with dummy data', null],
        ];
    }

    /**
     * Get the composer command for the environment.
     *
     * @return string
     */
    protected function findComposer()
    {
        if (file_exists(getcwd().'/composer.phar')) {
            return '"'.PHP_BINARY.'" '.getcwd().'/composer.phar';
        }

        return 'composer';
    }

    public function fire(Filesystem $filesystem)
    {
        return $this->handle($filesystem);
    }

    /**
     * Execute the console command.
     *
     * @param \Illuminate\Filesystem\Filesystem $filesystem
     *
     * @return void
     */
    public function handle(Filesystem $filesystem)
    {
        $this->info('Publishing the Chicorycom assets, database, and config files');

        // Publish only relevant resources on install
        $tags = ['assets'];

        $this->call('vendor:publish', ['--provider' => CigaformationServiceProvider::class]);

        $this->info('Migrating the database tables into your application');
        $this->call('migrate', ['--force' => $this->option('force')]);

        $this->info('Attempting to set Voyager User model as parent to App\User');
        if (file_exists(app_path('User.php')) || file_exists(app_path('Models/User.php'))) {
            $userPath = file_exists(app_path('User.php')) ? app_path('User.php') : app_path('Models/User.php');

            $str = file_get_contents($userPath);

            if ($str !== false) {
                $str = str_replace('extends Authenticatable', "extends \Chicorycom\Cigaformation\Models\User", $str);

                file_put_contents($userPath, $str);
            }
        } else {
            $this->warn('Unable to locate "User.php" in app or app/Models.  Did you move this file?');
            $this->warn('You will need to update this manually.  Change "extends Authenticatable" to "extends \TCG\Voyager\Models\User" in your User model');
        }

        $this->info('Dumping the autoloaded files and reloading all new files');

        $composer = $this->findComposer();

        $process = new Process([$composer.' dump-autoload']);
        $process->setTimeout(null); // Setting timeout to null to prevent installation from stopping at a certain point in time
        $process->setWorkingDirectory(base_path())->run();

        $this->info('Adding Chicorycom routes to routes/web.php');
        $routes_chicorycom = $filesystem->get(__DIR__.'/../../routes/web.php');

        if($routes_chicorycom !== false){
            $filesystem->put(base_path('routes/web.php'), $routes_chicorycom);
        }




        //$this->info('Seeding data into the database');
       // $this->seed('VoyagerDatabaseSeeder');


      //$this->call('vendor:publish', ['--provider' => CigaformationServiceProvider::class, '--tag' => ['route']]);


        //$this->info('Setting up the hooks');
        //$this->call('hook:setup');

        //$this->info('Adding the storage symlink to your public folder');
        //$this->call('storage:link');

        $this->info('Successfully installed Chicorycom! Enjoy');
    }
}
