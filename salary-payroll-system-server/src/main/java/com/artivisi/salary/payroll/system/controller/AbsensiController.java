/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.controller;

import com.artivisi.salary.payroll.system.model.Absensi;
import com.artivisi.salary.payroll.system.service.AbsensiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author teddy
 */
@RestController
@RequestMapping("/api")
public class AbsensiController {

    @Autowired
    private AbsensiService absensiService;

    @RequestMapping(value = "/absensi", method = RequestMethod.GET)
    public Iterable<Absensi> findAllAbsensi() {
        return absensiService.findAll();
    }

    @RequestMapping(value = "/absensi/{id}", method = RequestMethod.GET)
    public Absensi findAbsensiById(@PathVariable String id) throws Exception {
        Absensi absensi = absensiService.findOne(id);
        if (absensi == null) {
            throw new Exception("Data tidak ditemukan");
        }
        return absensiService.findOne(id);
    }

    @RequestMapping(value = "/absensi", method = RequestMethod.POST)
    public void saveAbsensi(@RequestBody Absensi absensi) throws Exception {
        if (absensi == null) {
            throw new Exception("Tidak boleh kosong");
        }
        absensiService.save(absensi);
    }

    @RequestMapping(value = "/absensi", method = RequestMethod.DELETE)
    public void deleteAbsensi(@PathVariable(value = "id") String id) throws Exception {
        if (id == null) {
            throw new Exception("id tidak ada");
        }
        Absensi absensi = absensiService.findOne(id);
        if (absensi == null) {
            throw new Exception("Data tidak ditemukan");
        }
        absensiService.delete(absensi);
    }

    @RequestMapping(value = "/absensi/{id}", method = RequestMethod.PUT)
    public void editAbsensi(@PathVariable String id, @RequestBody Absensi a) throws Exception {
        Absensi absensi = absensiService.findOne(id);
        if (absensi == null) {
            throw new Exception("Data tidak ditemukan");
        }
        a.setId(absensi.getId());
        absensiService.save(a);
    }
}
