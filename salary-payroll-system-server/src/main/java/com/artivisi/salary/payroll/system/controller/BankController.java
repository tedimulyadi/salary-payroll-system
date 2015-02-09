package com.artivisi.salary.payroll.system.controller;

import com.artivisi.salary.payroll.system.model.BankModel;
import com.artivisi.salary.payroll.system.service.BankService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dsemuts
 */
@RestController
@RequestMapping("/api")
public class BankController {

    private BankService bankService;
    
    @RequestMapping(value = "/bank", method = RequestMethod.POST)
    public void save(@RequestBody BankModel bankModel) {
        bankService.save(bankModel);
    }
}
