<?php


use App\Models\System\Plan;
use Illuminate\Database\Seeder;

class PlansSeeder extends Seeder
{
    public function run()
    {
        factory(Plan::class, 3)->create();
    }

}
