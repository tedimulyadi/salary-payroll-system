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
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import org.hibernate.annotations.GenericGenerator;

/**
 *
 * @author teddy
 */
@Entity
@Table(name = "gaji")
public class Gaji {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    @NotNull
    @Column(nullable = false)
    private String bulan;

    @NotNull
    @Column(nullable = false, name = "tunjangan_kesehatan")
    private String tunjanganKesehatan;

    @NotNull
    @ManyToOne
    @Column(name = "id_jabatan")
    private Jabatan idJabatan;

    @NotNull
    @Column(nullable = false, name = "total_gaji")
    private String totalGaji;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBulan() {
        return bulan;
    }

    public void setBulan(String bulan) {
        this.bulan = bulan;
    }

    public String getTunjanganKesehatan() {
        return tunjanganKesehatan;
    }

    public void setTunjanganKesehatan(String tunjanganKesehatan) {
        this.tunjanganKesehatan = tunjanganKesehatan;
    }

    public Jabatan getIdJabatan() {
        return idJabatan;
    }

    public void setIdJabatan(Jabatan idJabatan) {
        this.idJabatan = idJabatan;
    }

    public String getTotalGaji() {
        return totalGaji;
    }

    public void setTotalGaji(String totalGaji) {
        this.totalGaji = totalGaji;
    }

}
