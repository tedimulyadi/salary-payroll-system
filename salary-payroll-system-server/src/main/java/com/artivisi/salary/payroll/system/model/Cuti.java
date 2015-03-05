package com.artivisi.salary.payroll.system.model;

import java.io.Serializable;
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
@Table(name = "cuti")
public class Cuti implements Serializable {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    @NotNull
    @Column(nullable = false)
    private String nip;

    @NotNull
    @Column(nullable = false)
    private String tanggal;

    @NotNull
    @Column(nullable = false)
    private String keterangan;

    @NotNull
    @Column(nullable = false, name = "jumlah_cuti")
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

    public String getTanggal() {
        return tanggal;
    }

    public void setTanggal(String tanggal) {
        this.tanggal = tanggal;
    }
    
}
