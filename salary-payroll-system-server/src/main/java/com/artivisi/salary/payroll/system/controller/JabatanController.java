/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.controller;

import com.artivisi.salary.payroll.system.model.Bank;
import com.artivisi.salary.payroll.system.model.Jabatan;
import com.artivisi.salary.payroll.system.service.JabatanService;
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
public class JabatanController {

    @Autowired
    private JabatanService jabatanService;

    @RequestMapping(value = "/jabatan", method = RequestMethod.GET)
    public Iterable<Jabatan> findAllJabatan() {
        return jabatanService.findAll();
    }

    @RequestMapping(value = "/jabatan/{id}", method = RequestMethod.GET)
    public Jabatan findJabatanById(@PathVariable String id) {
        return jabatanService.findOne(id);
    }

    @RequestMapping(value = "/jabatan", method = RequestMethod.POST)
    public void saveJabatan(@RequestBody Jabatan jabatan) throws Exception {
        if (jabatan == null) {
            throw new Exception("User tidak boleh kosong");
        }

        jabatanService.save(jabatan);
    }

    @RequestMapping(value = "/jabatan/{id}", method = RequestMethod.DELETE)
    public void deleteJabatan(@PathVariable(value = "id") String id) throws Exception {
        if (id == null) {
            throw new Exception("id tidak boleh kosong atau null");
        }

        Jabatan jabatan = jabatanService.findOne(id);
        if (jabatan == null) {
            throw new Exception("User tidak ditemukan");
        }

        jabatanService.delete(jabatan);
    }

    @RequestMapping(value = "/jabatan/{id}", method = RequestMethod.PUT)
    public void editJabatan(@PathVariable String id, @RequestBody Jabatan j) throws Exception {
        Jabatan jabatan = jabatanService.findOne(id);
        if (jabatan == null) {
            throw new Exception("User tidak ditemukan");
        }

        j.setId(jabatan.getId());
        jabatanService.save(j);
    }
}
