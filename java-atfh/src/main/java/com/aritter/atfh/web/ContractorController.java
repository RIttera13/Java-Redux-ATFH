package com.aritter.atfh.web;

import com.aritter.atfh.domain.Contractor;
import com.aritter.atfh.service.ContractorService;
import java.util.HashMap;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contractors")
@CrossOrigin
public class ContractorController {
	
	@Autowired
	private ContractorService contractorService;
	
	@PostMapping("")
	public ResponseEntity<?> addContractorToContractors(@Valid @RequestBody Contractor contractor, BindingResult result){
		
		if(result.hasErrors()) {
			Map<String, String> errorMap = new HashMap<>();
			for(FieldError error: result.getFieldErrors()) {
				errorMap.put(error.getField(), error.getDefaultMessage());
			}
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}
		
		Contractor newContractor = contractorService.saveOrUpdateContractor(contractor);
		
		return new ResponseEntity<Contractor>(newContractor, HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public Iterable<Contractor> getAllContractors(){
		return contractorService.findAll();
	}
	
	@GetMapping("/{contractor_id}")
	public ResponseEntity<?> getById(@PathVariable Long contractor_id){
		Contractor contractor = contractorService.findByID(contractor_id);
		return new ResponseEntity<Contractor>(contractor, HttpStatus.OK);
	}
	
	@DeleteMapping("/{contractor_id}")
	public ResponseEntity<?> deleteContractor(@PathVariable Long contractor_id){
		contractorService.delete(contractor_id);
		
		return new ResponseEntity<String>("Contractor Deleted", HttpStatus.OK);
	}

}
