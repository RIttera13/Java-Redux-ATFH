package com.aritter.atfh.service;

import com.aritter.atfh.domain.Contractor;
import com.aritter.atfh.repository.ContractorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContractorService {
	
	@Autowired
	private ContractorRepository contractorRepository;
	
	public Contractor saveOrUpdateContractor(Contractor contractor) {
		
		if(contractor.getStatus() == null || contractor.getStatus() == "") {
			contractor.setStatus("Active");
		}
		
		return contractorRepository.save(contractor);
	}
	
	public Iterable<Contractor> findAll(){
		return contractorRepository.findAll();
	}
	
	public Contractor findByID(Long id){
		return contractorRepository.getById(id);
	}
	
	public void delete(Long id){
		Contractor contractor = findByID(id);
		contractorRepository.delete(contractor);
	}
}
