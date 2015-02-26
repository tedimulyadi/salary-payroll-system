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
@Table(name = "absensi")
public class Absensi {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy="uuid")
    private String id;
    
    private String nip;
    
    private String bulan;
    
    private Long jumlahAlfa;
    
    private int durasiTelat;
    
    private String jumlahPotongan;

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

    public String getBulan() {
        return bulan;
    }

    public void setBulan(String bulan) {
        this.bulan = bulan;
    }

    public Long getJumlahAlfa() {
        return jumlahAlfa;
    }

    public void setJumlahAlfa(Long jumlahAlfa) {
        this.jumlahAlfa = jumlahAlfa;
    }

    public int getDurasiTelat() {
        return durasiTelat;
    }

    public void setDurasiTelat(int durasiTelat) {
        this.durasiTelat = durasiTelat;
    }

    public String getJumlahPotongan() {
        return jumlahPotongan;
    }

    public void setJumlahPotongan(String jumlahPotongan) {
        this.jumlahPotongan = jumlahPotongan;
    }
    
    
}
