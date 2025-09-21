<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Metal extends Model
{
    use HasFactory;

    protected $fillable = [
        'serial_number',
        'origin',
        'production_date',
        'weight_type',
        'weight',
        'fine_weight',
        'metal_type',
        'username',
    ];
}
