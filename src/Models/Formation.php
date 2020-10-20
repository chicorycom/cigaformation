<?php

namespace Chicorycom\Cigaformation\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    use HasFactory;

    protected $guarded = [
        'created_at', 'updated_at','id'
    ];

    public function menu()
    {
        return $this->hasOne(Menu::class, 'type');
    }

    public function scopeToFormation($query){
        return $query->where('status', true)->where('top', true)->get();
    }


}
