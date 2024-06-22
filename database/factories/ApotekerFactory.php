<?php

namespace Database\Factories;
use App\Models\Apoteker;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Apoteker>
 */
class ApotekerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_user' => User::factory()->apoteker()->create()->id,
            'nama' => $this->faker->name,
            'no_hp' => $this->faker->phoneNumber,
        ];
    }
}
