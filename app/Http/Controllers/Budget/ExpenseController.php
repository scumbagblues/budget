<?php

namespace App\Http\Controllers\Budget;

use App\Http\Controllers\Controller;
use App\Models\Budget\Budget;
use App\Models\Budget\Expense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $budget = Budget::all();
        $expenses = Expense::with('budget.owner')->orderBy('budget_id', 'desc')->get();
        return Inertia::render('Expense/Index', [
            'expenses' => $expenses,
            'budgets' => $budget,
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
            'amount' => 'required|numeric|min:0',
            'description' => 'required|string|max:255',
            'budget_id' => 'required',
        ]);
        
        Expense::create([
            'amount' => $request->amount,
            'budget_id' => $request->budget_id,
            'description' => $request->description,
            'user_id' => Auth::id(), // Agregar el ID del usuario autenticado
        ]);

        return redirect()->route('expenses');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $budget = Budget::all();
        $expense = Expense::findOrFail($id);
        return Inertia::render('Expense/Edit', [
            'expense' => $expense,
            'budgets' => $budget,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'amount' => 'required|numeric|min:0',
            'budget_id' => 'required',
            'description' => 'required|string|max:255',
        ]);
    
        $expense = Expense::findOrFail($id);
        $expense->update([
            'amount' => $request->amount,
            'budget_id' => $request->budget_id,
            'description' => $request->description,
        ]);
    
        return redirect()->route('expenses');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $expense = Expense::findOrFail($id);
        $expense->delete();
        return redirect()->route('expenses');
    }
}
