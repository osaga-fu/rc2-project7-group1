package group1.backend.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import group1.backend.persistence.Item;
import group1.backend.persistence.ItemRepository;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ItemController {

    private ItemRepository repository;
    public ItemController(@Autowired ItemRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/items")
    public List<ItemResponse> showItems() {
        List<ItemResponse> items = new ArrayList<ItemResponse>();
        List<Item> itemsInDatabase = repository.findAll();
        for (Item item : itemsInDatabase) {
            items.add(new ItemResponse(item.getId(), item.getTitle(), item.getUrl()));
        }
        return items;
    }

    @PostMapping("/items")
    public ItemResponse createItem(@RequestBody ItemRequest request) {
        Item item = new Item(request.getId(), request.getTitle(), request.getUrl());
        Item savedItem = repository.save(item);
        return new ItemResponse(savedItem.getId(), savedItem.getTitle(), savedItem.getUrl());
    }

    @DeleteMapping("/items/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteItemById(@PathVariable Long id) {
        Optional<Item> optionalItem = repository.findById(id);
        if (optionalItem.isPresent()) {
            repository.delete(optionalItem.get());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Item not found");
        }
    }
}
