/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
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

    private String bulan;

    private String tunjanganKesehatan;

    private String gajiPokok;

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

    public String getGajiPokok() {
        return gajiPokok;
    }

    public void setGajiPokok(String gajiPokok) {
        this.gajiPokok = gajiPokok;
    }

    public String getTotalGaji() {
        return totalGaji;
    }

    public void setTotalGaji(String totalGaji) {
        this.totalGaji = totalGaji;
    }
    
}
