<?php

namespace Chicorycom\Cigaformation\Models;

use Chicorycom\Cigaformation\Traits\Resizable;
use CyrildeWit\EloquentViewable\Contracts\Viewable;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Page extends Model implements Viewable
{
    use  Resizable, InteractsWithViews;


    /**
     * Statuses.
     */
    const STATUS_ACTIVE = true;
    const STATUS_INACTIVE = false;

    /**
     * List of statuses.
     *
     * @var array
     */
    public static $statuses = [self::STATUS_ACTIVE, self::STATUS_INACTIVE];


    protected $guarded = [];

    public function save(array $options = [])
    {
        // If no author has been assigned, assign the current user's id as the author of the post
        if (!$this->author_id && Auth::user()) {
            $this->author_id = Auth::user()->id;
        }

        parent::save();
    }


    /**
     * Scope a query to only include active pages.
     *
     * @param  $query  \Illuminate\Database\Eloquent\Builder
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', static::STATUS_ACTIVE)->OrderBy('order')->get();
    }

    public function scopePagefooter($query,$page)
    {
        return $query->where('status', static::STATUS_ACTIVE)->where('slug',$page)->first();
    }
}
