<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Publication extends Model {
    protected $fillable = [
        'title',
        'content',
        'author'
    ];

    protected $dates = [
        'created_at'
    ];

    protected function excerpt(): Attribute {
        return Attribute::make(
            get: fn () => strlen($this->content) > 60 ? substr($this->content, 0, 60) . '...' : $this->content,
        );
    }
}
