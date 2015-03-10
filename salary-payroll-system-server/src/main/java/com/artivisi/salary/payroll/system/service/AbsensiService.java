/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.artivisi.salary.payroll.system.service;

import com.artivisi.salary.payroll.system.model.Absensi;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author teddy
 */
@Repository
public interface AbsensiService extends PagingAndSortingRepository<Absensi, String> {
    
    public Absensi findAbsensiByNip(String nip);
    
    @Query("select a from Absensi a where a.id = :id")
    public Absensi findById(@Param("id") String id);
}
