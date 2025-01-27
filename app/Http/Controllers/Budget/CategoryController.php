<?php

namespace App\Http\Controllers\Budget;

use App\Http\Controllers\Controller;
use App\Models\Budget\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Budget/Category', ['categories' => $categories]);
    }

    public function create()
    {
        
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:budgetcategory,name',
        ]);
        
        Category::create($request->all());

        return redirect()->route('categories');
    }

    public function show(Category $category)
    {
       
    }

    public function edit($id)
    {   
        $category = Category::findOrFail($id);
        return Inertia::render('Budget/EditCategory', ['category' => $category]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:budgetcategory,name,' . $id,
        ]);

        $category = Category::findOrFail($id);
        $data = $request->all();

        $category->update($data);

        return redirect()->route('categories');
    }

    public function destroy($id)
    {   
        $category = Category::findOrFail($id);
        $category->delete();

        return redirect()->route('categories');
    }

    
}
