/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.controller;

import com.artivisi.salary.payroll.system.model.Bank;
import com.artivisi.salary.payroll.system.model.Potongan;
import com.artivisi.salary.payroll.system.service.PotonganService;
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
public class PotonganController {

    @Autowired
    private PotonganService potonganService;

    @RequestMapping(value = "/potongan", method = RequestMethod.GET)
    public Iterable<Potongan> findAllPotongan() {
        return potonganService.findAll();
    }

    @RequestMapping(value = "/potongan/{id}", method = RequestMethod.GET)
    public Potongan findPotonganById(@PathVariable String id) {
        return potonganService.findOne(id);
    }

    @RequestMapping(value = "/potongan", method = RequestMethod.POST)
    public void savePotongan(@RequestBody Potongan potongan) throws Exception {
        if (potongan == null) {
            throw new Exception("User tidak boleh kosong");
        }

        potonganService.save(potongan);
    }

    @RequestMapping(value = "/potongan/{id}", method = RequestMethod.DELETE)
    public void deletePotongan(@PathVariable(value = "id") String id) throws Exception {
        if (id == null) {
            throw new Exception("id tidak boleh kosong atau null");
        }

        Potongan potongan = potonganService.findOne(id);
        if (potongan == null) {
            throw new Exception("User tidak ditemukan");
        }

        potonganService.delete(potongan);
    }

    @RequestMapping(value = "/potongan/{id}", method = RequestMethod.PUT)
    public void editPotongan(@PathVariable String id, @RequestBody Potongan p) throws Exception {
        Potongan potongan = potonganService.findOne(id);
        if (potongan == null) {
            throw new Exception("User tidak ditemukan");
        }

        p.setId(potongan.getId());
        potonganService.save(p);
    }
}
