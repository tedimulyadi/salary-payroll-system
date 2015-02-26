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
@Table(name = "jabatan")
public class Jabatan {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    private String kodeJbatan;

    private String namaJabatan;

    private String levelJabatan;

    private String gaiPokok;

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
