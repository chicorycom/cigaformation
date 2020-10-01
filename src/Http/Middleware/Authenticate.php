<?php
/**
 * Created by PhpStorm.
 * User: assane
 * Date: 29/09/20
 * Time: 13:25
 */

namespace Chicorycom\Cigaformation\Http\Middleware;


use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{

    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {

        if (
            strpos($request->getPathInfo(), '/administrator') !== false &&
            ! $request->expectsJson()
        ) {
            return route('admin.login');
        }

        if (! $request->expectsJson()) {
            return route('login');
        }
    }
}
