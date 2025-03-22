const express = require('express');
const {eureka, Eureka} = require('eureka-js-client');

const app = express();
const port = 3000;

const router = express.Router();

router.get('/inventory', (req, res) => {
    res.json({
        items: ['Milk', 'Egg', 'Bread'],
        message: 'welcome to the inventory service'
    })
})
const eurekaClient = new Eureka({
    instance:{
        instanceId: "inventory-service",
        app:"INVENTORY-SERVICE",
        hostName:"location",
        ipAddr: "127.0.0.1",
        port:{
            $:port,
            "@enabled":true
        },
        vipAddress: "inventory-service",
        dataCenterInfo:{
            "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
            name: "MyOwn"
        }
    },
    eureka:{
        host:"localhost",
        port:8761,
        //servicePath:"/eureka/"
    }
})

// application context
app.use('/inventory-service', router);
app.listen(port, () => {
    console.log(`inventory service running on port : ${port}`);

    eurekaClient.start((error) => {
        if (error) {
            console.log("Fail to register eureka")
        } else {
            console.log("successfully registered with Eureka")
        }
    })
});
