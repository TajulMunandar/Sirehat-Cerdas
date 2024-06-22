<?php

namespace Database\Factories;
use App\Models\Kurir;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kurir>
 */
class KurirFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_user' => User::factory()->kurir()->create()->id,
            'nama' => $this->faker->name,
            'no_hp' => $this->faker->phoneNumber,
            'foto' => $this->faker->imageUrl(640, 480, 'people', true, 'Faker'),
        ];
    }
}
