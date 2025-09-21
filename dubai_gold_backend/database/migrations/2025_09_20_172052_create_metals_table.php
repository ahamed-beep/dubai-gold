<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
{
    Schema::create('metals', function (Blueprint $table) {
        $table->id();
        $table->string('serial_number');
        $table->string('origin');
        $table->date('production_date');
        $table->string('weight_type'); // Kg, Tola, Gram
        $table->decimal('weight', 8, 2);
        $table->decimal('fine_weight', 8, 2);
        $table->string('metal_type'); // GOLD / SILVER
        $table->string('username')->nullable();
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('metals');
    }
};
