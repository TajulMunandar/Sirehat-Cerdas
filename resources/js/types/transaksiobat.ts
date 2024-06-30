interface TransaksiObatDetail {
    id: number;
    obat: any,
    ket: string;
    jumlah: number
}

export type TTransaksiObat = {
    id?: number;
    id_kunjungan?: number;
    id_apoteker?: number;
    kunjungan: any;
    apoteker: any;
    transaksiobatdetail: TransaksiObatDetail[];
    status: number;
}

