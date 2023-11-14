<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Klasa typu model reprezentująca pisemne komentarze użytkowników.
 *
 * @property int $id
 * @property int $author_id
 * @property int $publication_id
 * @property string $content
 *
 * @property User $author
 * @property Publication $publication
 */
class Comment extends Model
{
    use HasFactory;


    public function author() : BelongsTo {
        return $this->belongsTo(User::class, 'author_id');
    }
}
