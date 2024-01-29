package group1.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {

    @GetMapping("/items")
    public List<String> getItem() {
        return List.of("item 1", "item 2", "item 3");    
    }

    @PostMapping("/items")
    public void createItem(@RequestBody ItemRequest item) {
        System.out.println("respuesta recibida");
    } 
}
