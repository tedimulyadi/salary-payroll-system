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
@Table(name = "jabatan_model")
public class JabatanModel {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    private String kodeJbatan;

    private String namaJabatan;

    private String levelJabatan;

    private String gaiPokok;

    private String tunjanganJabatan;
}
