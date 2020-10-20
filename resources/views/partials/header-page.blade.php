<!--================Home Banner Area =================-->
<section class="banner_area">
    <div class="banner_inner d-flex align-items-center">
        <div class="overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="banner_content text-center">
                        <h2 class="wow fadeInDown" data-wow-delay=".25s">
                            @if(isset($data->title))
                                {{ $data->title }}
                                @elseif(isset($view->name))
                                {{ $view->name }}
                                @else
                                {{ $view }}
                            @endif
                        </h2>
                        <div class="page_link wow fadeInLeft" data-wow-delay=".35s">
                            <a  href="/" >{{ __("chicorycom::home.home")  }}</a>
                            <a  href="{{ $route }}" >
                                @if(isset($data->title))
                                    {{ $data->title }}
                                @elseif(isset($view->name))
                                    {{ $view->name }}
                                @else
                                    {{ $view }}
                                @endif
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--================End Home Banner Area =================-->
