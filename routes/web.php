<?php

use App\Http\Controllers\Budget\BudgetController;
use App\Http\Controllers\Budget\BudgetOwnerController;
use App\Http\Controllers\Budget\CategoryController;
use App\Http\Controllers\Budget\ExpenseController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/categories', [CategoryController::class, 'index'])->name('categories');
    Route::post('/categories', [CategoryController::class, 'store'])->name('categories');
    Route::get('/categories/edit/{id}', [CategoryController::class, 'edit'])->name('categories.edit');
    Route::post('/categories/{id}', [CategoryController::class, 'update'])->name('categories.update');
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy'])->name('categories.destroy');

    Route::get('/budgets', [BudgetController::class, 'index'])->name('budgets');
    Route::get('/budgets', [BudgetController::class, 'index'])->name('budgets');
    Route::get('/budget/dashboard', [BudgetController::class, 'dashboard'])->name('budgets.dashboard');
    Route::post('/budgets', [BudgetController::class, 'store'])->name('budgets');
    Route::get('/budgets/edit/{id}', [BudgetController::class, 'edit'])->name('budgets.edit');
    Route::post('/budgets/{id}', [BudgetController::class, 'update'])->name('budgets.update');
    Route::delete('/budgets/{id}', [BudgetController::class, 'destroy'])->name('budgets.destroy');

    Route::get('/budget/owner', [BudgetOwnerController::class, 'index'])->name('owners');
    Route::post('/budget/owner', [BudgetOwnerController::class, 'store'])->name('owners');
    Route::get('/budget/owner/edit/{id}', [BudgetOwnerController::class, 'edit'])->name('owners.edit');
    Route::post('/budget/owner/{id}', [BudgetOwnerController::class, 'update'])->name('owners.update');
    Route::delete('/budget/owner/{id}', [BudgetOwnerController::class, 'destroy'])->name('owners.destroy');

    Route::get('/expenses', [ExpenseController::class, 'index'])->name('expenses');
    Route::post('/expenses', [ExpenseController::class, 'store'])->name('expenses');
    Route::get('/expenses/edit/{id}', [ExpenseController::class, 'edit'])->name('expenses.edit');
    Route::post('/expenses/{id}', [ExpenseController::class, 'update'])->name('expenses.update');
    Route::delete('/expenses/{id}', [ExpenseController::class, 'destroy'])->name('expenses.destroy');
});

require __DIR__.'/auth.php';
