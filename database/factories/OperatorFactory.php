<?php

namespace Database\Factories;
use App\Models\Operator;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Operator>
 */
class OperatorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_user' => User::factory()->operator()->create()->id,
            'nama' => $this->faker->name,
            'no_hp' => $this->faker->phoneNumber,
        ];
    }
}
