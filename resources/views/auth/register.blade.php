@extends('chicorycom::layouts.layout')

@section('content')
    <section class="signup">
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <h4 class="form-title">Espacen Etudiants Ciga-formation</h4>
                    <form method="POST" class="register-form" id="register-form">
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="name" id="name" placeholder="Votre Name"/>
                        </div>
                        <div class="form-group">
                            <label for="code"><i class="zmdi zmdi-shield-security "></i></label>
                            <input type="text" name="code" id="code" placeholder="Matricule"/>
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                            <input type="email" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="pass" id="pass" placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                            <label for="agree-term" class="label-agree-term"><span><span></span></span>
                                J'accepte toutes les déclarations <a href="#" class="term-service">des conditions d'utilisation</a></label>
                        </div>
                        <button class="btn btn-outline-primary btn-block">Register </button>
                    </form>
                </div>
                <div class="signup-image">
                    <figure><img src="/images/signup-image.jpg" alt="sing up image"></figure>
                    <a href="{{ route('login') }}" class="signup-image-link">Je suis déjà membre</a>
                </div>
            </div>
        </div>
    </section>
@endsection
