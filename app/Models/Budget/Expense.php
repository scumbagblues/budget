<?php

namespace App\Models\Budget;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Expense extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'amount', 'budget_id', 'description','user_id'];

    public function owner()
    {
        return $this->hasMany(Budget::class);
    }

    public function budget()
    {
        return $this->belongsTo(Budget::class, 'budget_id');
    }
}
