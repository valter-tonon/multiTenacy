<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscribesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscribes', function (Blueprint $table) {
            $table->uuid('id')->index();
            $table->string('subscriber_id');
            $table->string('remote_subscription_id')->nullable();
            $table->string('remote_plan_id')->nullable();
            $table->uuid('plan_id')->index();
            $table->foreign('plan_id')->references('id')->on('plans');
            $table->dateTime('startDate');
            $table->dateTime('expiration_date');
            $table->string('status');
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
        Schema::dropIfExists('subscribes');
    }
}
