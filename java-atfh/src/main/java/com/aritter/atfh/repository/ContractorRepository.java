package com.aritter.atfh.repository;

import com.aritter.atfh.domain.Contractor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractorRepository extends CrudRepository<Contractor, Long> {
	Contractor getById(Long id);
}