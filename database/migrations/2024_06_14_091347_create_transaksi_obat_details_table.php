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
        Schema::create('transaksi_obat_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_transaksi_obat')->constrained('transaksi_obats')->onDelete('restrict')->onUpdate('cascade');
            $table->foreignId('id_obat')->constrained('obats')->onDelete('restrict')->onUpdate('cascade');
            $table->string('ket');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaksi_obat_details');
    }
};
