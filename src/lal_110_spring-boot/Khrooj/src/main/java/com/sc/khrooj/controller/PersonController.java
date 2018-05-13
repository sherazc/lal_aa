package com.sc.khrooj.controller;

import com.sc.khrooj.domain.Person;
import com.sc.khrooj.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonController {

    private PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @RequestMapping("/person")
    public List<Person> findAll() {
        return this.personService.findAll();
    }


    @RequestMapping("/person/{personId}")
    public Person findById(@PathVariable int personId) {
        return this.personService.findById(personId);
    }

    @RequestMapping(value = "/person", params = {"personName"})
    public List<Person> findByName(@RequestParam String personName) {
        return personService.findByName(personName);
    }


    @RequestMapping(value = "/person", method = RequestMethod.POST)
    public Person createPerson(@RequestBody Person person) {
        return personService.addPerson(person);
    }

    @RequestMapping(value = "/person/{personId}", method = RequestMethod.PUT)
    public Person updatePerson(@PathVariable int personId, @RequestBody Person person) {
        return personService.updatePerson(personId, person);
    }
}
