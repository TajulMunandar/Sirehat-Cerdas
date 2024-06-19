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
        Schema::create('transaksi_obats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_kunjungan')->constrained('kunjungans')->onDelete('restrict')->onUpdate('cascade');
            $table->foreignId('id_apoteker')->nullable()->constrained('apotekers')->onDelete('restrict')->onUpdate('cascade');
            $table->boolean('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaksi_obats');
    }
};
