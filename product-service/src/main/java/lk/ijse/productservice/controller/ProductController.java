/* Created By Sithira Roneth
 * Date :2/18/25
 * Time :11:37
 * Project Name :MicroServices
 * */
package lk.ijse.productservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {
    @GetMapping("/all")
    public String getProduct() {
        return "Product Service";
    }
}
