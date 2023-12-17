<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Desk extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', // Update from 'name' to 'title'
        'description', // Include the new 'description' column
    ];

    public function lists(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Lists::class);
    }
}

