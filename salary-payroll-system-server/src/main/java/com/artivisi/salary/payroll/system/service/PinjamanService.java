package com.artivisi.salary.payroll.system.service;

import com.artivisi.salary.payroll.system.model.Pinjaman;
import java.io.Serializable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author teddy
 */
@Repository
public interface PinjamanService extends PagingAndSortingRepository<Pinjaman, String>{

}
