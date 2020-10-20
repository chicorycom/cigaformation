<?php

namespace Chicorycom\Cigaformation\Http\Controllers;

use Chicorycom\Cigaformation\Models\Menu;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;


class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    /**
     * @param String $view
     */
    private function exist(String $view){
        return view()->exists("chicorycom::pages.{$view}") ?: abort(404);
    }

    /**
     * @param String $view
     * @param mixed ...$args
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    protected function view(String $view, ...$args){
        if($view == "/"){
            $view = 'home';
        }
        $this->exist("$view");
        $args[0]['menus'] = Menu::public();
        return view("chicorycom::pages.{$view}", $args[0]);
    }

    /**
     * @param $file
     * @param int $width
     * @param int $height
     * @param bool $crop
     * @return string
     */
    protected function resize($file, int $width = 70, int $height=null, $crop = false) :string {
        if($height && !$crop){
            $img = Image::make($file->getRealPath())
                //->backup()
                ->resize($width, $height);
        }elseif($height && $crop){
            $img = Image::make($file->getRealPath())
                ->crop($width, $height);
        }else{
            $img = Image::make($file->getRealPath())->resize($width, $height, function ($constraint) {
                $constraint->aspectRatio();
            });
        }

        // resize the image to a width of 300 and constrain aspect ratio (auto height)
        $generate =  md5(Str::random(7));
        $dir = storage_path('app/public/images');
        $path ='app/public/images/' . $generate . '.jpg';
        File::isDirectory($dir) or File::makeDirectory($dir, 0777, true, true);
        $img->save(storage_path($path));
        return "/storage/images/$generate.jpg";
    }
}
