<?php

namespace App\Http\Controllers\Budget;

use App\Http\Controllers\Controller;
use App\Models\Budget\Budget;
use App\Models\Budget\BudgetOwner;
use App\Models\Budget\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $budget = Budget::all();
        $categories = Category::all();
        $owners = BudgetOwner::all();
        return Inertia::render('Budget/Index', [
            'budgets' => $budget,
            'categories' => $categories,
            'owners' => $owners,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'amount' => 'required|numeric|min:0',
            'category_id' => 'required|exists:budgetcategory,id',
            'owner_id' => 'required|exists:budgetowner,id',
        ]);
        
        Budget::create([
            'name' => $request->name,
            'amount' => $request->amount,
            'category_id' => $request->category_id,
            'owner_id' => $request->owner_id,
            'user_id' => Auth::id(), // Agregar el ID del usuario autenticado
        ]);

        return redirect()->route('budgets');
    }

    public function dashboard()
    {
        return Inertia::render('Budget/BudgetDashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $budget = Budget::findOrFail($id);
        $categories = Category::all();
        $owners = BudgetOwner::all();
        return Inertia::render('Budget/Edit', [
            'budget' => $budget,
            'categories' => $categories,
            'owners' => $owners,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'amount' => 'required|numeric|min:0',
            'category_id' => 'required|exists:budgetcategory,id',
            'owner_id' => 'required',
        ]);
    
        $budget = Budget::findOrFail($id);
        $budget->update([
            'name' => $request->name,
            'amount' => $request->amount,
            'category_id' => $request->category_id,
            'owner_id' => $request->owner_id,
        ]);
    
        return redirect()->route('budgets');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $budget = Budget::findOrFail($id);
        $budget->delete();

        return redirect()->route('budgets');
    }
}
