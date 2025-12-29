<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Branch;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $branches = [
            ['code' => '01', 'name' => 'Makati'],
            ['code' => '02', 'name' => 'Batangas'],
            ['code' => '03', 'name' => 'Sta. Rosa'],
            ['code' => '04', 'name' => 'San Pablo'],
            ['code' => '05', 'name' => 'Batangas City'],
            ['code' => '06', 'name' => 'Legazpi'],
            ['code' => '07', 'name' => 'Naga'],
        ];

        Branch::insert($branches);
    }
}
