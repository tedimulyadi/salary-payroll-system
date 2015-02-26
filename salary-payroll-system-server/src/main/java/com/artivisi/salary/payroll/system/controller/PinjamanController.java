/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.controller;

import com.artivisi.salary.payroll.system.model.Bank;
import com.artivisi.salary.payroll.system.model.Pinjaman;
import com.artivisi.salary.payroll.system.service.PinjamanService;
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
public class PinjamanController {

    @Autowired
    private PinjamanService pinjamanService;

    @RequestMapping(value = "/pinjaman", method = RequestMethod.GET)
    public Iterable<Pinjaman> findAllPinjaman() {
        return pinjamanService.findAll();
    }

    @RequestMapping(value = "/pinjaman/{id}", method = RequestMethod.GET)
    public Pinjaman findPinjamanById(@PathVariable String id) {
        return pinjamanService.findOne(id);
    }

    @RequestMapping(value = "/pinjaman", method = RequestMethod.POST)
    public void savePinjaman(@RequestBody Pinjaman pinjaman) throws Exception {
        if (pinjaman == null) {
            throw new Exception("User tidak boleh kosong");
        }

        pinjamanService.save(pinjaman);
    }

    @RequestMapping(value = "/pinjaman/{id}", method = RequestMethod.DELETE)
    public void deletePinjaman(@PathVariable(value = "id") String id) throws Exception {
        if (id == null) {
            throw new Exception("id tidak boleh kosong atau null");
        }

        Pinjaman pinjaman = pinjamanService.findOne(id);
        if (pinjaman == null) {
            throw new Exception("User tidak ditemukan");
        }

        pinjamanService.delete(pinjaman);
    }

    @RequestMapping(value = "/pinjaman/{id}", method = RequestMethod.PUT)
    public void editPinjaman(@PathVariable String id, @RequestBody Pinjaman p) throws Exception {
        Pinjaman pinjaman = pinjamanService.findOne(id);
        if (pinjaman == null) {
            throw new Exception("User tidak ditemukan");
        }

        p.setId(pinjaman.getId());
        pinjamanService.save(p);
    }
}
