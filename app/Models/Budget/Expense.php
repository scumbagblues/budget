<?php

namespace App\Models\Budget;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Expense extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'amount', 'budget_id', 'user_id'];

    public function owner()
    {
        return $this->belongsTo(BudgetOwner::class);
    }
}
