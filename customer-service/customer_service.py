from flask import Flask, jsonify
import py_eureka_client.eureka_client as eureka_client

app = Flask(__name__)

CONTEXT_PATH = '/customer-service'
SERVICE_PORT = 5000

EUREKA_SERVICE = "http://localhost:8761/eureka/"
eureka_client.init(
    eureka_server= EUREKA_SERVICE,
    app_name="CUSTOMER-SERVICE",
    instance_port= SERVICE_PORT
)

@app.route(f'{CONTEXT_PATH}/customers',methods=["GET"])
def get_customer():
    customer_list = [
        {"id":1,"name":"Sithira","email":"sithira@gmail.com"},
        {"id":1,"name":"Alice","email":"alice@gmail.com"},
        {"id":1,"name":"Jake","email":"jake@gmail.com"}
    ]
    return jsonify(customer_list)

app.run(port=SERVICE_PORT)