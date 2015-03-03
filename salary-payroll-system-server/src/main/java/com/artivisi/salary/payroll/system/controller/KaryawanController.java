/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.controller;

import com.artivisi.salary.payroll.system.model.Karyawan;
import com.artivisi.salary.payroll.system.service.KaryawanService;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
public class KaryawanController {

    @Autowired
    private KaryawanService karyawanService;

    @RequestMapping(value = "/karyawan", method = RequestMethod.GET)
    public Iterable<Karyawan> findAllKaryawan() {
        return karyawanService.findAll();
    }

    @RequestMapping(value = "/karyawan/{id}", method = RequestMethod.GET)
    public Karyawan findKaryawanById(@PathVariable String id) throws Exception {
        Karyawan karyawan = karyawanService.findOne(id);
        if (karyawan == null) {
            throw new Exception("Data tidak ditemukan");
        }
        return karyawanService.findOne(id);
    }

    @RequestMapping(value = "/karyawan", method = RequestMethod.POST)
    public void saveKaryawan(@RequestBody Karyawan karyawan, HttpServletRequest request, HttpServletResponse response) throws Exception {
        if (karyawan == null) {
            throw new Exception("Tidak boleh kosong");
        }
        karyawanService.save(karyawan);
    }

    @RequestMapping(value = "/karyawan", method = RequestMethod.DELETE)
    public void deleteKaryawan(@PathVariable(value = "id") String id) throws Exception {
        if (id == null) {
            throw new Exception("id tidak ada");
        }
        Karyawan karyawan = karyawanService.findOne(id);
        if (karyawan == null) {
            throw new Exception("Data tidak ditemukan");
        }
        karyawanService.delete(karyawan);
    }

    @RequestMapping(value = "/karyawan/{id}", method = RequestMethod.PUT)
    public void editKaryawan(@PathVariable String id, @RequestBody Karyawan k) throws Exception {
        Karyawan karyawan = karyawanService.findOne(id);
        if (karyawan == null) {
            throw new Exception("Data tidak ditemukan");
        }
        k.setId(karyawan.getId());
        karyawanService.save(k);
    }
}
