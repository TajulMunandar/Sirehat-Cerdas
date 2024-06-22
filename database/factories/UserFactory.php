<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $username = $this->faker->unique()->userName;
        return [
            'username' => $username,
            'password' => Hash::make($username), // password default
            'role' => $this->faker->randomElement(['pasien', 'dokter']), // Peran dinamis
        ];
    }

    public function pasien()
    {
        return $this->state(function (array $attributes) {
            return [
                'role' => 6,
            ];
        });
    }

    public function dokter()
    {
        return $this->state(function (array $attributes) {
            return [
                'role' => 2,
            ];
        });
    }

    public function kurir()
    {
        return $this->state(function (array $attributes) {
            return [
                'role' => 5,
            ];
        });
    }

    public function apoteker()
    {
        return $this->state(function (array $attributes) {
            return [
                'role' => 3,
            ];
        });
    }

    public function operator()
    {
        return $this->state(function (array $attributes) {
            return [
                'role' => 4,
            ];
        });
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
