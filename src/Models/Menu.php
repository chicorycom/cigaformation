<?php

namespace Chicorycom\Cigaformation\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $guarded = [
        'created_at', 'updated_at','id'
    ];

    const ADMIN = 'ADMIN';
    const PUBLIC = 'PUBLIC';

    public function children()
    {
        return $this->hasMany(Menu::class, 'parent_id')
            ->orderBy('order');
    }



    public function scopeAdmin($query){
        return $query->with('children')->whereNull('parent_id')->where('type', static::ADMIN)->orderBy('order')->get();
    }
}
