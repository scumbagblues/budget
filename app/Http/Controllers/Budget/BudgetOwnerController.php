<?php

namespace App\Http\Controllers\Budget;

use App\Http\Controllers\Controller;
use App\Models\Budget\Budget;
use App\Models\Budget\BudgetOwner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BudgetOwnerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $owners = BudgetOwner::all();
        return Inertia::render('Budget/BudgetOwner', ['owners' => $owners]);
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
            'name' => 'required|string|max:255|unique:budgetowner,name,NULL,id,deleted_at,NULL',
        ]);
        
        BudgetOwner::create($request->all());

        return redirect()->route('owners');
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
        $owner = BudgetOwner::findOrFail($id);
        return Inertia::render('Budget/EditBudgetOwner', ['owner' => $owner]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:budgetowner,name,'.$id.',id,deleted_at,NULL',
        ]);

        $owner = BudgetOwner::findOrFail($id);
        $data = $request->all();

        $owner->update($data);

        return redirect()->route('owners');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $owner = BudgetOwner::findOrFail($id);
        $owner->delete();

        return redirect()->route('owners');
    }
}
