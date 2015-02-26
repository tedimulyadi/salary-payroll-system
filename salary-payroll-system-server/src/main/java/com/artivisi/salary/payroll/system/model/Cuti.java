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
@Table(name = "cuti")
public class Cuti {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    private String nip;

    private String tanggalBulan;

    private String keterangan;

    private String jumlahCuti;

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

    public String getTanggalBulan() {
        return tanggalBulan;
    }

    public void setTanggalBulan(String tanggalBulan) {
        this.tanggalBulan = tanggalBulan;
    }

    public String getKeterangan() {
        return keterangan;
    }

    public void setKeterangan(String keterangan) {
        this.keterangan = keterangan;
    }

    public String getJumlahCuti() {
        return jumlahCuti;
    }

    public void setJumlahCuti(String jumlahCuti) {
        this.jumlahCuti = jumlahCuti;
    }

}
