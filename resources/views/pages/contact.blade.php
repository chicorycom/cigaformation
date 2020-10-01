@extends('chicorycom::layouts.app')

@section('content')
@section('header')
    @include('chicorycom::partials.header-page')
@stop

<!--================Contact Area =================-->
<section class="contact_area section_gap">
    <div class="container">
        <div
            id="mapBox"
            class="mapBox"
            data-lat="40.701083"
            data-lon="-74.1522848"
            data-zoom="13"
            data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
            data-mlat="40.701083"
            data-mlon="-74.1522848"
        ></div>
        <div class="row">
            <div class="col-lg-3">
                <div class="contact_info">
                    <div class="info_item">
                        <i class="ti-home"></i>
                        <h6>California, United States</h6>
                        <p>Santa monica bullevard</p>
                    </div>
                    <div class="info_item">
                        <i class="ti-headphone"></i>
                        <h6><a href="#">00 (440) 9865 562</a></h6>
                        <p>Mon to Fri 9am to 6 pm</p>
                    </div>
                    <div class="info_item">
                        <i class="ti-email"></i>
                        <h6><a href="#">support@colorlib.com</a></h6>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <form
                    class="row contact_form"
                    action="contact_process.php"
                    method="post"
                    id="contactForm"
                    novalidate="novalidate"
                >
                    <div class="col-md-6">
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Enter your name'"
                                required=""
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter email address"
                                onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Enter email address'"
                                required=""
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                id="subject"
                                name="subject"
                                placeholder="Enter Subject"
                                onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Enter Subject'"
                                required=""
                            />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                  <textarea
                      class="form-control"
                      name="message"
                      id="message"
                      rows="1"
                      placeholder="Enter Message"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Message'"
                      required=""
                  ></textarea>
                        </div>
                    </div>
                    <div class="col-md-12 text-right">
                        <button type="submit" value="submit" class="btn primary-btn">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<!--================Contact Area =================-->
@endsection

@push('scripts')
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
    <script src="{{ asset('/js/gmaps.min.js') }}"></script>
    <script>
        (function ($) {
            if ($("#mapBox").length) {
                var $lat = $("#mapBox").data("lat");
                var $lon = $("#mapBox").data("lon");
                var $zoom = $("#mapBox").data("zoom");
                var $marker = $("#mapBox").data("marker");
                var $info = $("#mapBox").data("info");
                var $markerLat = $("#mapBox").data("mlat");
                var $markerLon = $("#mapBox").data("mlon");
                var map = new GMaps({
                    el: "#mapBox",
                    lat: $lat,
                    lng: $lon,
                    scrollwheel: false,
                    scaleControl: true,
                    streetViewControl: false,
                    panControl: true,
                    disableDoubleClickZoom: true,
                    mapTypeControl: false,
                    zoom: $zoom,
                    styles: [
                        {
                            featureType: "water",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    color: "#dcdfe6"
                                }
                            ]
                        },
                        {
                            featureType: "transit",
                            stylers: [
                                {
                                    color: "#808080"
                                },
                                {
                                    visibility: "off"
                                }
                            ]
                        },
                        {
                            featureType: "road.highway",
                            elementType: "geometry.stroke",
                            stylers: [
                                {
                                    visibility: "on"
                                },
                                {
                                    color: "#dcdfe6"
                                }
                            ]
                        },
                        {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    color: "#ffffff"
                                }
                            ]
                        },
                        {
                            featureType: "road.local",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    visibility: "on"
                                },
                                {
                                    color: "#ffffff"
                                },
                                {
                                    weight: 1.8
                                }
                            ]
                        },
                        {
                            featureType: "road.local",
                            elementType: "geometry.stroke",
                            stylers: [
                                {
                                    color: "#d7d7d7"
                                }
                            ]
                        },
                        {
                            featureType: "poi",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    visibility: "on"
                                },
                                {
                                    color: "#ebebeb"
                                }
                            ]
                        },
                        {
                            featureType: "administrative",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#a7a7a7"
                                }
                            ]
                        },
                        {
                            featureType: "road.arterial",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    color: "#ffffff"
                                }
                            ]
                        },
                        {
                            featureType: "road.arterial",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    color: "#ffffff"
                                }
                            ]
                        },
                        {
                            featureType: "landscape",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    visibility: "on"
                                },
                                {
                                    color: "#efefef"
                                }
                            ]
                        },
                        {
                            featureType: "road",
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    color: "#696969"
                                }
                            ]
                        },
                        {
                            featureType: "administrative",
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    visibility: "on"
                                },
                                {
                                    color: "#737373"
                                }
                            ]
                        },
                        {
                            featureType: "poi",
                            elementType: "labels.icon",
                            stylers: [
                                {
                                    visibility: "off"
                                }
                            ]
                        },
                        {
                            featureType: "poi",
                            elementType: "labels",
                            stylers: [
                                {
                                    visibility: "off"
                                }
                            ]
                        },
                        {
                            featureType: "road.arterial",
                            elementType: "geometry.stroke",
                            stylers: [
                                {
                                    color: "#d6d6d6"
                                }
                            ]
                        },
                        {
                            featureType: "road",
                            elementType: "labels.icon",
                            stylers: [
                                {
                                    visibility: "off"
                                }
                            ]
                        },
                        {},
                        {
                            featureType: "poi",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    color: "#dadada"
                                }
                            ]
                        }
                    ]
                });
            }
        })(jQuery)
    </script>
@endpush
