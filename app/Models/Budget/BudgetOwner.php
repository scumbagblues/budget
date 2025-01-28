<?php

namespace App\Models\Budget;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BudgetOwner extends Model
{
    use SoftDeletes;

    protected $table = 'budgetowner';
    protected $fillable = ['name'];

    public function budget()
    {
        return $this->hasMany(Budget::class);
    }
}
