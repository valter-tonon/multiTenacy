<?php
/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\System\Plan;
use Faker\Generator as Faker;

$factory->define(Plan::class, function (Faker $faker) {
    return [
        'name' => $faker->lastName,
        'description' => $faker->paragraph,
        'price' => rand(50, 500),
        'remote_plan_id' => random_int(1000, 9999),
        'recurrence' => 'mensal',
        'active' => 1

    ];
});
