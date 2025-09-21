<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Metal;

class MetalController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'serial_number'   => 'required|string|max:255|unique:metals,serial_number',
            'origin'          => 'required|string|max:255',
            'production_date' => 'required|date',
            'weight_type'     => 'required|string',
            'weight'          => 'required|numeric|min:0',
            'fine_weight'     => 'required|numeric|min:0',
            'metal_type'      => 'required|string',
            'username'        => 'nullable|string|max:255',
        ]);

        $metal = Metal::create($validated);

        return response()->json([
            'message' => 'Metal data stored successfully',
            'data'    => $metal,
        ], 201);
    }




        public function index()
        {
            return response()->json(Metal::all());
        }



        public function show($serialNumber) {



    $metal = Metal::where('serial_number', $serialNumber)->first();

    if (!$metal) {
        return response()->json([
            'message' => 'Serial number not found'
        ], 404);
    }

    return response()->json([
        'message' => 'Metal found',
        'data' => $metal

    ]);
}

public function detailsById($id) {
    $metal = Metal::find($id); // fetch by primary key (id)

    if (!$metal) {
        return response()->json([
            'message' => 'Metal not found'
        ], 404);
    }

    return response()->json([
        'message' => 'Metal details retrieved successfully',
        'data' => $metal
    ]);



}

public function updateById(Request $request, $id)
{
    $metal = Metal::find($id); // fetch by primary key

    if (!$metal) {
        return response()->json([
            'message' => 'Metal not found'
        ], 404);
    }

    $validated = $request->validate([
        'serialNumber'   => 'required|string|max:255|unique:metals,serial_number,' . $id,
        'origin'         => 'required|string|max:255',
        'productionDate' => 'required|date',
        'weightType'     => 'required|string',
        'weight'         => 'required|numeric|min:0',
        'fineWeight'     => 'required|numeric|min:0',
        'metalType'      => 'required|string',
        'username'       => 'nullable|string|max:255',
    ]);

    $metal->update([
        'serial_number'   => $validated['serialNumber'],
        'origin'          => $validated['origin'],
        'production_date' => $validated['productionDate'],
        'weight_type'     => $validated['weightType'],
        'weight'          => $validated['weight'],
        'fine_weight'     => $validated['fineWeight'],
        'metal_type'      => $validated['metalType'],
        'username'        => $validated['username'] ?? null,
    ]);

    return response()->json([
        'message' => 'Metal updated successfully',
        'data'    => $metal
    ]);
}

public function deleteById($id)
{
    $metal = Metal::find($id);

    if (!$metal) {
        return response()->json([
            'message' => 'Metal not found'
        ], 404);
    }

    $metal->delete();

    return response()->json([
        'message' => 'Metal deleted successfully'
    ]);
}



}




