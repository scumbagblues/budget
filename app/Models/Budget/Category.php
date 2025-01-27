<?php

namespace App\Models\Budget;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{   
    protected $table = 'budgetcategory';

    protected $fillable = ['name'];

    public function budget()
    {
        return $this->hasMany(Budget::class);
    }
}
