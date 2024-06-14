<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('antar_obats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_to_online')->constrained('transaksi_obat_onlines')->onDelete('restrict')->onUpdate('cascade');
            $table->foreignId('id_kurir')->constrained('kurirs')->onDelete('restrict')->onUpdate('cascade');
            $table->boolean('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('antar_obats');
    }
};
