import type { TTableHeader } from "../table/Types";

export const UserTableHeader: TTableHeader[] = [
    { text: "username", value: "username" },
    { text: "Role", value: "role" },
];

export const PasienTableHeader: TTableHeader[] = [
    { text: "NIK", value: "nik" },
    { text: "No KK", value: "no_kk" },
    { text: "No BPJS", value: "no_bpjs" },
    { text: "Nama", value: "nama" },
    { text: "No HP", value: "no_hp" },
    { text: "Alamat", value: "alamat" },
];

export const KurirTableHeader: TTableHeader[] = [
    { text: "Nama", value: "nama" },
    { text: "No HP", value: "no_hp" },
    { text: "Foto", value: "foto" },
];

export const DokterTableHeader: TTableHeader[] = [
    { text: "Nama", value: "nama" },
    { text: "No HP", value: "no_hp" },
    { text: "Foto", value: "foto" },
    { text: "Poli", value: "poli" },
];

export const ObatTableHeader: TTableHeader[] = [
    { text: "Nama Obat", value: "nama_obat" },
    { text: "Satuan", value: "satuan" },
    { text: "Jumlah", value: "jumlah" },
    { text: "Dosis", value: "dosis" },
];

export const OperatorTableHeader: TTableHeader[] = [
    { text: "Nama ", value: "nama" },
    { text: "No HP", value: "no_hp" },
];

export const ApotekerTableHeader: TTableHeader[] = [
    { text: "Nama ", value: "nama" },
    { text: "No HP", value: "no_hp" },
];

export const RegistrasiTableHeader: TTableHeader[] = [
    { text: "Nama", value: "pasien.nama" },
    { text: "Tanggal", value: "tanggal" },
    { text: "Status ", value: "status" },
    { text: "Poli ", value: "poli" },
    { text: "Keluhan ", value: "keluhan" },
];

export const JadwalTableHeader: TTableHeader[] = [
    { text: "Dokter", value: "dokter" },
    { text: "Hari", value: "hari" },
    { text: "Rentang Waktu ", value: "rentang_waktu" },
];
