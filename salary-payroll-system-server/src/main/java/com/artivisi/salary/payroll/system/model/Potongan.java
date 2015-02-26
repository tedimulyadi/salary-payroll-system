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
@Table(name = "potongan")
public class Potongan {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    private String nip;

    private String jumlahPinjaman;

    private String potonganAbsen;

    private String subTotal;

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

    public String getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(String subTotal) {
        this.subTotal = subTotal;
    }
    
    
}
