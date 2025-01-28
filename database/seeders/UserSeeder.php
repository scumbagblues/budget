<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    
    
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            'name' => 'Ricardo Cortes',
            'email' => 'rcr.786@gmail.com',
            'password' => Hash::make('Rcr040786'),
        ];

        DB::table('users')->insert($users);
    }
}
