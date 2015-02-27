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
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import org.hibernate.annotations.GenericGenerator;

/**
 *
 * @author teddy
 */
@Entity
@Table(name = "lembur")
public class Lembur {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    @NotNull
    private Date tanggal;

    @NotNull
    @Column(name = "jumlah_jam_lembur")
    private String jumlahJamLembur;

    @NotNull
    @Column(name = "upah_per_jam")
    private String UpahPerJam;

    @NotNull
    @Column(name = "sub_total")
    private String subTotal;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getTanggal() {
        return tanggal;
    }

    public void setTanggal(Date tanggal) {
        this.tanggal = tanggal;
    }

    public String getJumlahJamLembur() {
        return jumlahJamLembur;
    }

    public void setJumlahJamLembur(String jumlahJamLembur) {
        this.jumlahJamLembur = jumlahJamLembur;
    }

    public String getUpahPerJam() {
        return UpahPerJam;
    }

    public void setUpahPerJam(String UpahPerJam) {
        this.UpahPerJam = UpahPerJam;
    }

    public String getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(String subTotal) {
        this.subTotal = subTotal;
    }

}
