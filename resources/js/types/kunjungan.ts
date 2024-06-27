export type TKunjungan = {
    id?: number;
    id_pasien?: number;
    pasien: any;
    tanggal: string;
    keluhan: string;
};

export type TEKunjungan = {
    id?: number;
    diagnosa: string;
    tindakan: number;
};
