interface TPasien {
    id_pasien?: number;
    nik: string;
    no_kk: string;
    no_bpjs: string;
    nama: string;
    no_hp: string;
    alamat: string;
}

export type TRegistrasi = {
    id_registrasi?: number;
    status: number,
};

export type TRegistrasiData = {
    id_registrasi?: number;
    status: number,
    poli: string,
    keluhan: string,
    pasien: TPasien

};

