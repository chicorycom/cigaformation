@extends('chicorycom::layouts.app')

@section('content')
    @section('header')
        @include('chicorycom::partials.header-page')
    @stop

<!--================ Start About Area =================-->
<section class="about_area section_gap">
    <div class="container">
        <div class="row h_blog_item">
            <div class="col-lg-6">
                <div class="h_blog_img">
                    <img class="img-fluid" src="/img/event/directeur.jpeg" alt="" style="height: 400px; width: 555px;" />
                </div>
            </div>
            <div class="col-lg-6">
                <div class="h_blog_text">
                    <div class="h_blog_text_inner left right">
                        <h4>Bienvenue dans Ciga Formation</h4>
                        <p>
                            Subdue whales void god which living don't midst lesser
                            yielding over lights whose. Cattle greater brought sixth fly
                            den dry good tree isn't seed stars were.
                        </p>
                        <p>
                            Subdue whales void god which living don't midst lesser yieldi
                            over lights whose. Cattle greater brought sixth fly den dry
                            good tree isn't seed stars were the boring.
                        </p>
                        <a class="primary-btn" href="#">
                            Apprendre encore plus <i class="ti-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--================ End About Area =================-->

<!--================ Start Feature Area =================-->
<section class="feature_area section_gap_top title-bg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="main_title">
                    <h2 class="mb-3 text-white">Fonctionnalité géniale</h2>
                    <p>
                        Replenish man have thing gathering lights yielding shall you
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="single_feature">
                    <div class="icon"><span class="flaticon-student"></span></div>
                    <div class="desc">
                        <h4 class="mt-3 mb-2">Facilité de bourses</h4>
                        <p>
                            One make creepeth, man bearing theira firmament won't great
                            heaven
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="single_feature">
                    <div class="icon"><span class="flaticon-book"></span></div>
                    <div class="desc">
                        <h4 class="mt-3 mb-2">Vendre un cours en ligne</h4>
                        <p>
                            One make creepeth, man bearing theira firmament won't great
                            heaven
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="single_feature">
                    <div class="icon"><span class="flaticon-earth"></span></div>
                    <div class="desc">
                        <h4 class="mt-3 mb-2">Certification globale</h4>
                        <p>
                            One make creepeth, man bearing theira firmament won't great
                            heaven
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--================ End Feature Area =================-->
@endsection
