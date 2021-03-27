<?php

use Illuminate\Database\Seeder;

class SystemDatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PlansSeeder::class);
        $this->call(UserSystemsTableSeeder::class);
        $this->call(CompaniesTableSeeder::class);
    }
}
