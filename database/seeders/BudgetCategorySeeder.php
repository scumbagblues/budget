<?php

namespace Database\Seeders;

use App\Models\Budget\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BudgetCategorySeeder extends Seeder
{
    
    protected $categories = [
        'Ahorros',
        'Básicos',
        'Autos',
        'Casa',
        'Salud',
        'Educación',
        'Deuda',
        'Regalos',
        'Diversión',
        'Suscripciones',
        'Vacaciones',
    ];
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->categories as $category) {
            Category::create(['name' => $category]);
        }
    }
}
