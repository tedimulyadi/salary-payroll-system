/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.service;

import com.artivisi.salary.payroll.system.model.GajiModel;
import java.io.Serializable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author teddy
 */
@Repository
public interface GajiService extends PagingAndSortingRepository<GajiModel, String>{
    
}
