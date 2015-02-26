/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.controller;

import com.artivisi.salary.payroll.system.model.Bank;
import com.artivisi.salary.payroll.system.model.Gaji;
import com.artivisi.salary.payroll.system.service.GajiService;
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
public class GajiController {

    @Autowired
    private GajiService gajiService;

    @RequestMapping(value = "/gaji", method = RequestMethod.GET)
    public Iterable<Gaji> findAllGaji() {
        return gajiService.findAll();
    }

    @RequestMapping(value = "/gaji/{id}", method = RequestMethod.GET)
    public Gaji findGajiById(@PathVariable String id) {
        return gajiService.findOne(id);
    }

    @RequestMapping(value = "/gaji", method = RequestMethod.POST)
    public void saveGaji(@RequestBody Gaji gaji) throws Exception {
        if (gaji == null) {
            throw new Exception("User tidak boleh kosong");
        }

        gajiService.save(gaji);
    }

    @RequestMapping(value = "/gaji/{id}", method = RequestMethod.DELETE)
    public void deleteGaji(@PathVariable(value = "id") String id) throws Exception {
        if (id == null) {
            throw new Exception("id tidak boleh kosong atau null");
        }

        Gaji gaji = gajiService.findOne(id);
        if (gaji == null) {
            throw new Exception("User tidak ditemukan");
        }
        gajiService.delete(gaji);
    }

    @RequestMapping(value = "/gaji/{id}", method = RequestMethod.PUT)
    public void editGaji(@PathVariable String id, @RequestBody Gaji g) throws Exception {
        Gaji gaji = gajiService.findOne(id);
        if (gaji == null) {
            throw new Exception("User tidak ditemukan");
        }

        g.setId(gaji.getId());
        gajiService.save(g);
    }

}
