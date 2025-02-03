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
        $budget = Budget::orderBy('name', 'asc')->get();
        $expenses = Expense::with('budget.owner')
            ->join('budget', 'expenses.budget_id', '=', 'budget.id')
            ->orderBy('budget.name', 'asc')
            ->select('expenses.*')
            ->get();
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
            'extra_spent' => 'required|boolean',
            'description' => 'required|string|max:255',
            'expense_date' => 'required|date',
            'budget_id' => 'required',
        ]);
        
        Expense::create([
            'amount' => $request->amount,
            'extra_spent' => $request->extra_spent,
            'budget_id' => $request->budget_id,
            'description' => $request->description,
            'expense_date' => $request->expense_date,
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
        $budget = Budget::orderBy('name', 'asc')->get();
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
            'extra_spent' => 'required|boolean',
            'budget_id' => 'required',
            'description' => 'required|string|max:255',
            'expense_date' => 'required|date',
        ]);
    
        $expense = Expense::findOrFail($id);
        $expense->update([
            'amount' => $request->amount,
            'extra_spent' => $request->extra_spent,
            'budget_id' => $request->budget_id,
            'description' => $request->description,
            'expense_date' => $request->expense_date,
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
