<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Publication extends Model {
    protected $fillable = [
        'title',
        'content',
        'author_id'
    ];

    protected $dates = [
        'created_at'
    ];

    protected function excerpt(): Attribute {
        return Attribute::make(
            get: fn () => strlen($this->content) > 60 ? substr($this->content, 0, 60) . '...' : $this->content,
        );
    }

    public function author() : BelongsTo {
        return $this->belongsTo(User::class, 'author_id');
    }
}
