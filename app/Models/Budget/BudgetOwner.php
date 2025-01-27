<?php

namespace App\Models\Budget;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BudgetOwner extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'budget_id', 'user_id'];

    public function budget()
    {
        return $this->belongsTo(Budget::class);
    }
}
