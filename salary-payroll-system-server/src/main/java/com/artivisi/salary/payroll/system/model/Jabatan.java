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
@Table(name = "jabatan")
public class Jabatan {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    @NotNull
    @Column(name = "kode_jabatan", nullable = false)
    private String kodeJbatan;

    @NotNull
    @Column(name = "nama_jabatan", nullable = false)
    private String namaJabatan;

    @NotNull
    @Column(name = "level_jabatan", nullable = false)
    private String levelJabatan;

    @NotNull
    @Column(name = "gaji_pokok", nullable = false)
    private String gaiPokok;

    @NotNull
    @Column(name = "tunjangan_jabatan", nullable = false)
    private String tunjanganJabatan;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getKodeJbatan() {
        return kodeJbatan;
    }

    public void setKodeJbatan(String kodeJbatan) {
        this.kodeJbatan = kodeJbatan;
    }

    public String getNamaJabatan() {
        return namaJabatan;
    }

    public void setNamaJabatan(String namaJabatan) {
        this.namaJabatan = namaJabatan;
    }

    public String getLevelJabatan() {
        return levelJabatan;
    }

    public void setLevelJabatan(String levelJabatan) {
        this.levelJabatan = levelJabatan;
    }

    public String getGaiPokok() {
        return gaiPokok;
    }

    public void setGaiPokok(String gaiPokok) {
        this.gaiPokok = gaiPokok;
    }

    public String getTunjanganJabatan() {
        return tunjanganJabatan;
    }

    public void setTunjanganJabatan(String tunjanganJabatan) {
        this.tunjanganJabatan = tunjanganJabatan;
    }

}
