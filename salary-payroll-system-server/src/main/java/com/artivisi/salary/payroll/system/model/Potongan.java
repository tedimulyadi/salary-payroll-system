/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import org.hibernate.annotations.GenericGenerator;

/**
 *
 * @author teddy
 */
@Entity
@Table(name = "potongan")
public class Potongan {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    private String nip;

    @Column(name = "jumlah_pinjaman")
    private String jumlahPinjaman;

    @Column(name = "potongan_absen")
    private String potonganAbsen;

    @Column(name = "total_potongan")
    private String totalPotongan;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNip() {
        return nip;
    }

    public void setNip(String nip) {
        this.nip = nip;
    }

    public String getJumlahPinjaman() {
        return jumlahPinjaman;
    }

    public void setJumlahPinjaman(String jumlahPinjaman) {
        this.jumlahPinjaman = jumlahPinjaman;
    }

    public String getPotonganAbsen() {
        return potonganAbsen;
    }

    public void setPotonganAbsen(String potonganAbsen) {
        this.potonganAbsen = potonganAbsen;
    }

    public String getTotalPotongan() {
        return totalPotongan;
    }

    public void setTotalPotongan(String totalPotongan) {
        this.totalPotongan = totalPotongan;
    }

}
