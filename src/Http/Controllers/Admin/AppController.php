<?php
/**
 * Created by PhpStorm.
 * User: assane
 * Date: 15/10/20
 * Time: 15:45
 */

namespace Chicorycom\Cigaformation\Http\Controllers\Admin;


use Chicorycom\Cigaformation\Http\Controllers\Controller;
use Chicorycom\Cigaformation\Models\Role;
use Chicorycom\Cigaformation\Models\Slide;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class AppController extends Controller
{
        public function roles(){
            return new JsonResponse(Role::all(), 200, [], JSON_NUMERIC_CHECK);
        }

        public function carousel() {
            return new JsonResponse(Slide::carouselall() , 200, [], JSON_NUMERIC_CHECK);
        }

        public function storeCarousel(Request $request){

            $request->validate([
                'title' => 'required|string|max:255',
                'img' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:1024'
            ]);

            if($request->hasFile('img')){
                $thumbnail = $this->resize($request->file('img'), 256, 144, true);
                $img_banner = $this->resize($request->file('img'), 1024, 483, true);
            }
              $slide =  Slide::create([
                  'title'=> $request->title,
                  'src' => $img_banner,
                  'thumbnail' => $thumbnail,
                ]);

            return new JsonResponse($slide, 201, [], JSON_NUMERIC_CHECK);

        }

        public function statusCarousel($id){
                $slide = Slide::find($id);
                $status = !$slide->status;
                $slide->update(['status' => $status]);
            return new JsonResponse($slide, 201, [], JSON_NUMERIC_CHECK);
        }

        public function editCarousel(Slide $slide){
            return new JsonResponse($slide, 200, [], JSON_NUMERIC_CHECK);
        }

        public function updateCarousel(Request $request, Slide $slide){
            $request->validate([
                'title' => 'required|string|max:255',
            ]);
            $slide->update([
                'title'=> $request->title,
            ]);
            return new JsonResponse($slide, 201, [], JSON_NUMERIC_CHECK);
        }

        public function deleteCarousel(Slide $slide){
            File::delete(public_path($slide->src));
            File::delete(public_path($slide->thumbnail));
            $slide->delete();
            //JSON_PRETTY_PRINT
            return new JsonResponse(['success' => true], 204);
        }
}
