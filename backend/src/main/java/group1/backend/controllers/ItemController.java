package group1.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {

    @GetMapping("/items")
    public List<ItemResponse> showItems() {
        return List.of(
            new ItemResponse(1L, "Archivo 1", "www.prueba.com"),
            new ItemResponse(2L, "Video 1", "www.youyube.com"),
            new ItemResponse(3L, "documento 1", "www.gugle/trive.com")
        );    
    }

    @PostMapping("/items")
    public void createItem(@RequestBody ItemRequest item) {
        System.out.println("respuesta recibida");
    } 
}
