package com.kibe.ProductMs.repository;

import com.kibe.ProductMs.entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product,String> {
}
