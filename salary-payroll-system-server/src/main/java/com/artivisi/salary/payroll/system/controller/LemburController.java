/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.controller;

import com.artivisi.salary.payroll.system.model.Bank;
import com.artivisi.salary.payroll.system.model.Lembur;
import com.artivisi.salary.payroll.system.service.LemburService;
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
public class LemburController {

    @Autowired
    private LemburService lemburService;

    @RequestMapping(value = "/lembur", method = RequestMethod.GET)
    public Iterable<Lembur> findAllLembur() {
        return lemburService.findAll();
    }

    @RequestMapping(value = "/lembur/{id}", method = RequestMethod.GET)
    public Lembur findLemburById(@PathVariable String id) {
        return lemburService.findOne(id);
    }

    @RequestMapping(value = "/lembur", method = RequestMethod.POST)
    public void saveLembur(@RequestBody Lembur lembur) throws Exception {
        if (lembur == null) {
            throw new Exception("User tidak boleh kosong");
        }

        lemburService.save(lembur);
    }

    @RequestMapping(value = "/lembur/{id}", method = RequestMethod.DELETE)
    public void deleteLembur(@PathVariable(value = "id") String id) throws Exception {
        if (id == null) {
            throw new Exception("id tidak boleh kosong atau null");
        }

        Lembur lembur = lemburService.findOne(id);
        if (lembur == null) {
            throw new Exception("User tidak ditemukan");
        }

        lemburService.delete(lembur);
    }

    @RequestMapping(value = "/lembur/{id}", method = RequestMethod.PUT)
    public void editLembur(@PathVariable String id, @RequestBody Lembur l) throws Exception {
        Lembur lembur = lemburService.findOne(id);
        if (lembur == null) {
            throw new Exception("User tidak ditemukan");
        }

        l.setId(lembur.getId());
        lemburService.save(l);
    }
}
