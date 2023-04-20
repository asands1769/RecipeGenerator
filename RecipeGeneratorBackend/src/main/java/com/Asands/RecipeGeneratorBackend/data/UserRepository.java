package com.Asands.RecipeGeneratorBackend.data;


import com.Asands.RecipeGeneratorBackend.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);
}