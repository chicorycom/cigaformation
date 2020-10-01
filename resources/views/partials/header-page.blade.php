<!--================Home Banner Area =================-->
<section class="banner_area">
    <div class="banner_inner d-flex align-items-center">
        <div class="overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="banner_content text-center">
                        <h2>{{ __("chicorycom::home.{$view}")  }}</h2>
                        <div class="page_link">
                            <a href="/">{{ __("chicorycom::home.home")  }}</a>
                            <a href="{{ route('page', $view) }}">{{ __("chicorycom::home.{$view}")  }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--================End Home Banner Area =================-->
