interface TransaksiObatOnlineDetail {
    id: number;
    obat: any,
    ket: string;
}

export type TTransaksiObatOnline = {
    id?: number;
    id_konsul?: number;
    id_apoteker?: number;
    konsultasionline: any;
    apoteker: any;
    transaksiobatonlinedetail: TransaksiObatOnlineDetail[];
    status_ambil: number;
    status_antar: number;
}

