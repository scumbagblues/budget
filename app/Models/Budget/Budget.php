<?php

namespace App\Models\Budget;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Budget extends Model
{
    
    protected $table = 'budget';
    protected $fillable = [
        'name', 
        'amount', 
        'user_id',
        'extra_spent',
        'category_id',
        'owner_id',
    ];

    public function owner()
    {
        return $this->belongsTo(BudgetOwner::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function expense()
    {
        return $this->hasMany(Expense::class);
    }


    
}
