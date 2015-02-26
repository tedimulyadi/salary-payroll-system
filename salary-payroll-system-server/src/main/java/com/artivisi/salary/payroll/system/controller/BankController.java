/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.controller;

import com.artivisi.salary.payroll.system.model.Bank;
import com.artivisi.salary.payroll.system.service.BankService;
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
public class BankController {

    @Autowired
    private BankService bankService;

    @RequestMapping(value = "/bank", method = RequestMethod.GET)
    public Iterable<Bank> findAllBank() {
        return bankService.findAll();
    }

    @RequestMapping(value = "/bank/{id}", method = RequestMethod.GET)
    public Bank findBankById(@PathVariable String id) {
        return bankService.findOne(id);
    }

    @RequestMapping(value = "/bank", method = RequestMethod.POST)
    public void saveBank(@RequestBody Bank bank) throws Exception {
        if (bank == null) {
            throw new Exception("User tidak boleh kosong");
        }

        bankService.save(bank);
    }

    @RequestMapping(value = "/bank/{id}", method = RequestMethod.DELETE)
    public void deleteBank(@PathVariable(value = "id") String id) throws Exception {
        if (id == null) {
            throw new Exception("id tidak boleh kosong atau null");
        }

        Bank bank = bankService.findOne(id);
        if (bank == null) {
            throw new Exception("User tidak ditemukan");
        }

        bankService.delete(bank);
    }

    @RequestMapping(value = "/bank/{id}", method = RequestMethod.PUT)
    public void editBank(@PathVariable String id, @RequestBody Bank b) throws Exception {
        Bank bank = bankService.findOne(id);
        if (bank == null) {
            throw new Exception("User tidak ditemukan");
        }

        b.setId(bank.getId());
        bankService.save(b);
    }
}
