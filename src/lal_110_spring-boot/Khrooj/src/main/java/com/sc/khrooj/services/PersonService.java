package com.sc.khrooj.services;

import com.sc.khrooj.domain.Person;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PersonService {
    private List<Person> persons;

    public PersonService() {
        persons = new ArrayList<>(Arrays.asList(
                new Person(100, "Arif", "3 days"),
                new Person(200, "Anwar", "40 days"),
                new Person(300, "Sheraz", "4 month")
        ));
    }

    public List<Person> findAll() {
        return persons;
    }

    public Person findById(int personId) {
        return persons.stream()
                .filter(person -> person.getId() == personId)
                .findFirst().orElse(null);
    }

    public List<Person> findByName(String personName) {
        return persons.stream()
                .filter(person -> person.getName().toLowerCase().contains(personName.toLowerCase()))
                .collect(Collectors.toList());
    }

    public Person addPerson(Person person) {
        long maxId = persons.stream().mapToLong(p -> p.getId()).max().orElse(0);

        person.setId(maxId + 1);
        persons.add(person);
        return person;
    }

    public Person updatePerson(long id, Person person) {
        Optional<Person> personOptional = persons.stream().filter(p -> p.getId() == id).findFirst();

        if (personOptional.isPresent()) {
            personOptional.get().setName(person.getName());
            personOptional.get().setKhroojType(person.getKhroojType());
            return personOptional.get();
        } else {
            return null;
        }
    }

}
