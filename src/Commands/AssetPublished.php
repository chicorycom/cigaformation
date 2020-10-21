<?php

namespace Chicorycom\Cigaformation\Commands;

use Chicorycom\Cigaformation\ChicorycomPublishedProvider;
use Illuminate\Console\Command;

class AssetPublished extends Command
{


    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'chicorycom:publish {--public}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';



    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $public = $this->option('public');
        if($public){
            $this->call('vendor:publish', ['--provider' => ChicorycomPublishedProvider::class]);
            $this->info('Attempting to set Chicorycom public folder');
            return 0;
        }
        $this->error('Not option ');

    }
}
