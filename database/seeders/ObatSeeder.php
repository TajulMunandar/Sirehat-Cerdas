<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Obat;
use Faker\Factory as FakerFactory;

class ObatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $obats = [
            [
                'nama_obat' => 'Paracetamol',
                'satuan' => 'tablet',
                'jumlah' => 50,
                'dosis' => '1 tablet setiap 6 jam',
            ],
            [
                'nama_obat' => 'Amoxicillin',
                'satuan' => 'kapsul',
                'jumlah' => 30,
                'dosis' => '1 kapsul setiap 8 jam',
            ],
            [
                'nama_obat' => 'Loperamide',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => '2 tablet sekali minum',
            ],
            [
                'nama_obat' => 'Ranitidine',
                'satuan' => 'tablet',
                'jumlah' => 40,
                'dosis' => '1 tablet setiap sebelum tidur',
            ],
            [
                'nama_obat' => 'Ibuprofen',
                'satuan' => 'tablet',
                'jumlah' => 60,
                'dosis' => '1 tablet setiap 4-6 jam',
            ],
            // Obat ke-6
            [
                'nama_obat' => 'Dexamethasone',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-7
            [
                'nama_obat' => 'Cetirizine',
                'satuan' => 'tablet',
                'jumlah' => 50,
                'dosis' => '1 tablet setiap hari',
            ],
            // Obat ke-8
            [
                'nama_obat' => 'Diazepam',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1-2 tablet sebelum tidur',
            ],
            // Obat ke-9
            [
                'nama_obat' => 'Metformin',
                'satuan' => 'tablet',
                'jumlah' => 40,
                'dosis' => '2 tablet setiap hari',
            ],
            // Obat ke-10
            [
                'nama_obat' => 'Amlodipine',
                'satuan' => 'tablet',
                'jumlah' => 35,
                'dosis' => '1 tablet setiap pagi',
            ],
            [
                'nama_obat' => 'Simvastatin',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap malam',
            ],
            // Obat ke-12
            [
                'nama_obat' => 'Omeprazole',
                'satuan' => 'kapsul',
                'jumlah' => 40,
                'dosis' => '1 kapsul setiap pagi',
            ],
            // Obat ke-13
            [
                'nama_obat' => 'Atenolol',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-14
            [
                'nama_obat' => 'Metronidazole',
                'satuan' => 'tablet',
                'jumlah' => 50,
                'dosis' => '1 tablet setiap 8 jam',
            ],
            // Obat ke-15
            [
                'nama_obat' => 'Prednisone',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => '2 tablet setiap pagi',
            ],
            // Obat ke-16
            [
                'nama_obat' => 'Ciprofloxacin',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap 12 jam',
            ],
            // Obat ke-17
            [
                'nama_obat' => 'Tramadol',
                'satuan' => 'kapsul',
                'jumlah' => 25,
                'dosis' => '1-2 kapsul setiap 4-6 jam',
            ],
            // Obat ke-18
            [
                'nama_obat' => 'Furosemide',
                'satuan' => 'tablet',
                'jumlah' => 35,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-19
            [
                'nama_obat' => 'Digoxin',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-20
            [
                'nama_obat' => 'Levothyroxine',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap pagi',
            ],
            [
                'nama_obat' => 'Gabapentin',
                'satuan' => 'kapsul',
                'jumlah' => 40,
                'dosis' => '1 kapsul setiap malam',
            ],
            // Obat ke-22
            [
                'nama_obat' => 'Warfarin',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => 'Dosis bervariasi, sesuai dengan resep dokter',
            ],
            // Obat ke-23
            [
                'nama_obat' => 'Losartan',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-24
            [
                'nama_obat' => 'Metformin XR',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-25
            [
                'nama_obat' => 'Tamsulosin',
                'satuan' => 'kapsul',
                'jumlah' => 20,
                'dosis' => '1 kapsul setiap malam',
            ],
            // Obat ke-26
            [
                'nama_obat' => 'Pregabalin',
                'satuan' => 'kapsul',
                'jumlah' => 35,
                'dosis' => '1 kapsul setiap 12 jam',
            ],
            // Obat ke-27
            [
                'nama_obat' => 'Morphine',
                'satuan' => 'tablet',
                'jumlah' => 15,
                'dosis' => 'Dosis bervariasi, sesuai dengan resep dokter',
            ],
            // Obat ke-28
            [
                'nama_obat' => 'Bisoprolol',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-29
            [
                'nama_obat' => 'Lisinopril',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-30
            [
                'nama_obat' => 'Quetiapine',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => '1 tablet setiap malam',
            ],
            [
                'nama_obat' => 'Clarithromycin',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap 12 jam',
            ],
            // Obat ke-32
            [
                'nama_obat' => 'Amitriptyline',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => 'Dosis bervariasi, sesuai dengan resep dokter',
            ],
            // Obat ke-33
            [
                'nama_obat' => 'Hydrochlorothiazide',
                'satuan' => 'tablet',
                'jumlah' => 40,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-34
            [
                'nama_obat' => 'Risperidone',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => '1 tablet setiap malam',
            ],
            // Obat ke-35
            [
                'nama_obat' => 'Venlafaxine',
                'satuan' => 'kapsul',
                'jumlah' => 30,
                'dosis' => '1 kapsul setiap pagi',
            ],
            // Obat ke-36
            [
                'nama_obat' => 'Spironolactone',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-37
            [
                'nama_obat' => 'Cefixime',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap 12 jam',
            ],
            // Obat ke-38
            [
                'nama_obat' => 'Naproxen',
                'satuan' => 'tablet',
                'jumlah' => 35,
                'dosis' => '1 tablet setiap 8-12 jam',
            ],
            // Obat ke-39
            [
                'nama_obat' => 'Desloratadine',
                'satuan' => 'tablet',
                'jumlah' => 40,
                'dosis' => '1 tablet setiap hari',
            ],
            // Obat ke-40
            [
                'nama_obat' => 'Fluoxetine',
                'satuan' => 'kapsul',
                'jumlah' => 25,
                'dosis' => '1 kapsul setiap pagi',
            ],
            [
                'nama_obat' => 'Metoclopramide',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap 6 jam',
            ],
            // Obat ke-42
            [
                'nama_obat' => 'Levetiracetam',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '2 tablet setiap pagi',
            ],
            // Obat ke-43
            [
                'nama_obat' => 'Olanzapine',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => '1 tablet setiap malam',
            ],
            // Obat ke-44
            [
                'nama_obat' => 'Carbamazepine',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => 'Dosis bervariasi, sesuai dengan resep dokter',
            ],
            // Obat ke-45
            [
                'nama_obat' => 'Hydroxyzine',
                'satuan' => 'tablet',
                'jumlah' => 40,
                'dosis' => '1 tablet setiap 6-8 jam sesuai kebutuhan',
            ],
            // Obat ke-46
            [
                'nama_obat' => 'Methotrexate',
                'satuan' => 'tablet',
                'jumlah' => 15,
                'dosis' => 'Dosis bervariasi, sesuai dengan resep dokter',
            ],
            // Obat ke-47
            [
                'nama_obat' => 'Citalopram',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-48
            [
                'nama_obat' => 'Pantoprazole',
                'satuan' => 'tablet',
                'jumlah' => 35,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-49
            [
                'nama_obat' => 'Azithromycin',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap hari selama 3 hari',
            ],
            // Obat ke-50
            [
                'nama_obat' => 'Diphenhydramine',
                'satuan' => 'tablet',
                'jumlah' => 40,
                'dosis' => '1-2 tablet sebelum tidur sesuai kebutuhan',
            ],
            [
                'nama_obat' => 'Clonazepam',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap malam',
            ],
            // Obat ke-52
            [
                'nama_obat' => 'Mirtazapine',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap malam',
            ],
            // Obat ke-53
            [
                'nama_obat' => 'Gabapentin',
                'satuan' => 'tablet',
                'jumlah' => 40,
                'dosis' => '1 tablet setiap 8 jam',
            ],
            // Obat ke-54
            [
                'nama_obat' => 'Cephalexin',
                'satuan' => 'kapsul',
                'jumlah' => 35,
                'dosis' => '1 kapsul setiap 6 jam',
            ],
            // Obat ke-55
            [
                'nama_obat' => 'Fentanyl',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => 'Dosis bervariasi, sesuai dengan resep dokter',
            ],
            // Obat ke-56
            [
                'nama_obat' => 'Duloxetine',
                'satuan' => 'kapsul',
                'jumlah' => 30,
                'dosis' => '1 kapsul setiap pagi',
            ],
            // Obat ke-57
            [
                'nama_obat' => 'Allopurinol',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-58
            [
                'nama_obat' => 'Lamotrigine',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => 'Dosis bervariasi, sesuai dengan resep dokter',
            ],
            // Obat ke-59
            [
                'nama_obat' => 'Metoprolol',
                'satuan' => 'tablet',
                'jumlah' => 35,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-60
            [
                'nama_obat' => 'Benztropine',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => '1 tablet setiap pagi',
            ],
            [
                'nama_obat' => 'Bupropion',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-62
            [
                'nama_obat' => 'Donepezil',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap malam',
            ],
            // Obat ke-63
            [
                'nama_obat' => 'Fluconazole',
                'satuan' => 'tablet',
                'jumlah' => 40,
                'dosis' => '1 tablet setiap hari',
            ],
            // Obat ke-64
            [
                'nama_obat' => 'Memantine',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-65
            [
                'nama_obat' => 'Trazodone',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap malam',
            ],
            // Obat ke-66
            [
                'nama_obat' => 'Doxycycline',
                'satuan' => 'kapsul',
                'jumlah' => 35,
                'dosis' => '1 kapsul setiap 12 jam',
            ],
            // Obat ke-67
            [
                'nama_obat' => 'Venlafaxine XR',
                'satuan' => 'kapsul',
                'jumlah' => 30,
                'dosis' => '1 kapsul setiap pagi',
            ],
            // Obat ke-68
            [
                'nama_obat' => 'Methylphenidate',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-69
            [
                'nama_obat' => 'Prednisolone',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => 'Dosis bervariasi, sesuai dengan resep dokter',
            ],
            // Obat ke-70
            [
                'nama_obat' => 'Cefuroxime',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap 12 jam',
            ],
            [
                'nama_obat' => 'Lorazepam',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => 'Dosis bervariasi, sesuai dengan resep dokter',
            ],
            // Obat ke-72
            [
                'nama_obat' => 'Trimethoprim',
                'satuan' => 'tablet',
                'jumlah' => 40,
                'dosis' => '1 tablet setiap 12 jam',
            ],
            // Obat ke-73
            [
                'nama_obat' => 'Paroxetine',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-74
            [
                'nama_obat' => 'Baclofen',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap 8 jam',
            ],
            // Obat ke-75
            [
                'nama_obat' => 'Clobazam',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap malam',
            ],
            // Obat ke-76
            [
                'nama_obat' => 'Meloxicam',
                'satuan' => 'tablet',
                'jumlah' => 35,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-77
            [
                'nama_obat' => 'Methylprednisolone',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => 'Dosis bervariasi, sesuai dengan resep dokter',
            ],
            // Obat ke-78
            [
                'nama_obat' => 'Sulfamethoxazole',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap 12 jam',
            ],
            // Obat ke-79
            [
                'nama_obat' => 'Dicyclomine',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap 6 jam sesuai kebutuhan',
            ],
            // Obat ke-80
            [
                'nama_obat' => 'Esomeprazole',
                'satuan' => 'kapsul',
                'jumlah' => 25,
                'dosis' => '1 kapsul setiap pagi',
            ],
            [
                'nama_obat' => 'Lisinopril',
                'satuan' => 'tablet',
                'jumlah' => 35,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-82
            [
                'nama_obat' => 'Duloxetine',
                'satuan' => 'kapsul',
                'jumlah' => 30,
                'dosis' => '1 kapsul setiap pagi',
            ],
            // Obat ke-83
            [
                'nama_obat' => 'Metformin',
                'satuan' => 'tablet',
                'jumlah' => 40,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-84
            [
                'nama_obat' => 'Lorazepam',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap malam',
            ],
            // Obat ke-85
            [
                'nama_obat' => 'Pregabalin',
                'satuan' => 'kapsul',
                'jumlah' => 30,
                'dosis' => '1 kapsul setiap 12 jam',
            ],
            // Obat ke-86
            [
                'nama_obat' => 'Escitalopram',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-87
            [
                'nama_obat' => 'Azithromycin',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap hari selama 5 hari',
            ],
            // Obat ke-88
            [
                'nama_obat' => 'Gabapentin',
                'satuan' => 'tablet',
                'jumlah' => 35,
                'dosis' => '1 tablet setiap 8 jam',
            ],
            // Obat ke-89
            [
                'nama_obat' => 'Tamsulosin',
                'satuan' => 'kapsul',
                'jumlah' => 20,
                'dosis' => '1 kapsul setiap malam',
            ],
            // Obat ke-90
            [
                'nama_obat' => 'Aripiprazole',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => '1 tablet setiap pagi',
            ],
            [
                'nama_obat' => 'Clopidogrel',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-92
            [
                'nama_obat' => 'Ciprofloxacin',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap 12 jam',
            ],
            // Obat ke-93
            [
                'nama_obat' => 'Furosemide',
                'satuan' => 'tablet',
                'jumlah' => 35,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-94
            [
                'nama_obat' => 'Digoxin',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-95
            [
                'nama_obat' => 'Levothyroxine',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-96
            [
                'nama_obat' => 'Simvastatin',
                'satuan' => 'tablet',
                'jumlah' => 25,
                'dosis' => '1 tablet setiap malam',
            ],
            // Obat ke-97
            [
                'nama_obat' => 'Omeprazole',
                'satuan' => 'kapsul',
                'jumlah' => 40,
                'dosis' => '1 kapsul setiap pagi',
            ],
            // Obat ke-98
            [
                'nama_obat' => 'Atenolol',
                'satuan' => 'tablet',
                'jumlah' => 30,
                'dosis' => '1 tablet setiap pagi',
            ],
            // Obat ke-99
            [
                'nama_obat' => 'Metronidazole',
                'satuan' => 'tablet',
                'jumlah' => 50,
                'dosis' => '1 tablet setiap 8 jam',
            ],
            // Obat ke-100
            [
                'nama_obat' => 'Prednisone',
                'satuan' => 'tablet',
                'jumlah' => 20,
                'dosis' => '2 tablet setiap pagi',
            ],
            // Tambahkan obat lainnya di sini...
        ];

        // Buat 100 obat
        for ($i = 1; $i <= 100; $i++) {
            Obat::create([
                'nama_obat' => $obats[$i - 1]['nama_obat'], // Nama obat bisa disesuaikan sesuai kebutuhan
                'satuan' => $obats[$i - 1]['satuan'], // Gunakan satuan dari array obat yang sudah ada
                'jumlah' => rand(10, 100), // Jumlah diacak antara 10 dan 100
                'dosis' => $obats[$i - 1]['dosis'], // Gunakan dosis dari array obat yang sudah ada
            ]);
        }
    }
}
