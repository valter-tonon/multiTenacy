<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->uuid('id')->index();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->default(Hash::make('secret'));
            $table->rememberToken();
            $table->string('document_number')->nullable();
            $table->string('street')->nullable();
            $table->string('street_number')->nullable();
            $table->string('complment')->nullable();
            $table->string('neighborhood')->nullable();
            $table->string('estado')->nullable();
            $table->string('zipcode')->nullable();
            $table->string('city')->nullable();
            $table->string('ddd')->nullable();
            $table->string('phone')->nullable();
            $table->string('company_name');
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
        Schema::dropIfExists('clientes');
    }
}
