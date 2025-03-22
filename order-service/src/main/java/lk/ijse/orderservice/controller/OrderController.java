/* Created By Sithira Roneth
 * Date :2/18/25
 * Time :11:45
 * Project Name :MicroServices
 * */
package lk.ijse.orderservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @GetMapping("/allOrders")
    public String getOrders() {
        return "Order Service";
    }
}
