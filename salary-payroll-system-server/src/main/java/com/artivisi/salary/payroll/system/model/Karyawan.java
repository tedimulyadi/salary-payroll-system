/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.validation.constraints.NotNull;
import org.hibernate.annotations.GenericGenerator;

/**
 *
 * @author teddy
 */
@Entity
@Table(name = "karyawan")
public class Karyawan {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    @NotNull
    @Column(name = "nama_lengkap", nullable = false)
    private String namaLengkap;

    @NotNull
    @Column(name = "tempat_lahir", nullable = false)
    private String tempatLahir;

    public Jabatan getKodeJabatan() {
        return kodeJabatan;
    }

    public void setKodeJabatan(Jabatan kodeJabatan) {
        this.kodeJabatan = kodeJabatan;
    }

    public Bank getIdBank() {
        return idBank;
    }

//    @Column(name = "tanggal_lahir")
    public void setIdBank(Bank idBank) {
        this.idBank = idBank;
    }
//    @Temporal(javax.persistence.TemporalType.DATE)
//    private Date tanggalLahir;
    @NotNull
    @Column(nullable = false)
    private String agama;

    @NotNull
    @Column(nullable = false)
    private String jumlahAnak;

    @NotNull
    @Column(nullable = false)
    private String alamat;

    @NotNull
    @Column(nullable = false)
    private String telpon;

    @NotNull
    @Column(nullable = false)
    private String pendidikan;

    //relasi dari jabatan 
//    @Column(name = "kode_jabatan")
    @ManyToOne
    private Jabatan kodeJabatan;
    
    @NotNull
    @Column(name = "tanggal_masuk")
    private String tanggalMasuk;

    @Column(name = "tanggal_keluar")
    private String tanggalKeluar;

    //relasi dari bank
    @ManyToOne
    private Bank idBank;
    
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNamaLengkap() {
        return namaLengkap;
    }

    public void setNamaLengkap(String namaLengkap) {
        this.namaLengkap = namaLengkap;
    }

    public String getTempatLahir() {
        return tempatLahir;
    }

    public void setTempatLahir(String tempatLahir) {
        this.tempatLahir = tempatLahir;
    }

    public String getAgama() {
        return agama;
    }

    public void setAgama(String agama) {
        this.agama = agama;
    }

    public String getJumlahAnak() {
        return jumlahAnak;
    }

    public void setJumlahAnak(String jumlahAnak) {
        this.jumlahAnak = jumlahAnak;
    }

    public String getAlamat() {
        return alamat;
    }

    public void setAlamat(String alamat) {
        this.alamat = alamat;
    }

    public String getTelpon() {
        return telpon;
    }

    public void setTelpon(String telpon) {
        this.telpon = telpon;
    }

    public String getPendidikan() {
        return pendidikan;
    }

    public void setPendidikan(String pendidikan) {
        this.pendidikan = pendidikan;
    }

    public String getTanggalMasuk() {
        return tanggalMasuk;
    }

    public void setTanggalMasuk(String tanggalMasuk) {
        this.tanggalMasuk = tanggalMasuk;
    }

    public String getTanggalKeluar() {
        return tanggalKeluar;
    }

    public void setTanggalKeluar(String tanggalKeluar) {
        this.tanggalKeluar = tanggalKeluar;
    }

}
