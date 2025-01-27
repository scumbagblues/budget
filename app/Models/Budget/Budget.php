<?php

namespace App\Models\Budget;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Budget extends Model
{
    use SoftDeletes;

    protected $table = 'budget';
    protected $fillable = [
        'name', 
        'amount', 
        'user_id',
        'extra_spent',
        'category_id'
    ];

    public function owners()
    {
        return $this->hasMany(BudgetOwner::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }


    
}
