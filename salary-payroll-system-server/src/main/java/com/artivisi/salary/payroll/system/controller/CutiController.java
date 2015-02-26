/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.controller;

import com.artivisi.salary.payroll.system.model.Absensi;
import com.artivisi.salary.payroll.system.model.Cuti;
import com.artivisi.salary.payroll.system.service.CutiService;
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
public class CutiController {

    @Autowired
    private CutiService cutiService;

    @RequestMapping(value = "/cuti", method = RequestMethod.GET)
    public Iterable<Cuti> findAllCuti() {
        return cutiService.findAll();
    }

    @RequestMapping(value = "cuti/{id}", method = RequestMethod.GET)
    public Cuti findCutiById(@PathVariable String id) throws Exception {
        Cuti cuti = cutiService.findOne(id);
        if (cuti == null) {
            throw new Exception("Data tidak ditemukan");
        }
        return cutiService.findOne(id);
    }

    @RequestMapping(value = "/cuti", method = RequestMethod.POST)
    public void saveCuti(@RequestBody Cuti cuti) throws Exception {
        if (cuti == null) {
            throw new Exception("Tidak boleh kosong");
        }
        cutiService.save(cuti);
    }

    @RequestMapping(value = "/cuti", method = RequestMethod.DELETE)
    public void deleteCuti(@PathVariable(value = "id") String id) throws Exception {
        if (id == null) {
            throw new Exception("id tidak ada");
        }
        Cuti cuti = cutiService.findOne(id);
        if (cuti == null) {
            throw new Exception("Data tidak ditemukan");
        }
        cutiService.delete(cuti);
    }

    @RequestMapping(value = "/cuti/{id}", method = RequestMethod.PUT)
    public void editCuti(@PathVariable String id, @RequestBody Cuti c) throws Exception {
        Cuti cuti = cutiService.findOne(id);
        if (cuti == null) {
            throw new Exception("Data tidak ditemukan");
        }
        c.setId(cuti.getId());
        cutiService.save(c);
    }

}
