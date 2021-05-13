
### Mutation - Create Customer
```
mutation createCustomer {
  createCustomer(
    customer: {
      name: "User Test 2",
      email: "user_test_2@gmail.com",
      cpf: "678676876",
      dtBirth: "1991-02-11",
    },
    address: {
      street: "Rua Necessio dos Santos"
      neighborhood: "SJB"
      city: "Belo Horizonte"
			state: "MG"
      country: "BR"
      number: "110"
      cep: "31515040"
    }
  ) { name id }
}
```
<img src="/coverage/createCustom.png" alt="CreateCustom" />
### Mutation - Create Product

```

mutation createProduct {
  createProduct(
    product: {
      name: "Notebook Mac 13",
      image: "path_image",
      description: "Notebook da Apple de 13 polegdas",
      weight: 3,
      price: 8000,
      qttStock: 10
    }
  ) { name, qttStock, price }
}
```
<img src="/coverage/createProduct.png" alt="CreateProduct" />

### Mutation - Create Order
*testEmailUrl*: é o link para o email de teste no https://ethereal.email/
```
mutation {
  createOrder(order:{
    idCustomer: 1,
    installment: 2,
    listProducts: [
      {
        id: 1,
        qtt: 1
      }
    ]
  }) {
    testEmailUrl
    order {
      id
      dtOrder
      installment
      customer {
        name
      }
      status
    }
    products { id name qttStock}
  }
}
```

#### Exemplo de resposta
```json
{
  "data": {
    "createOrder": {
      "testEmailUrl": "https://ethereal.email/message/XxcQDYg3UQaGbOu0XxcQEQWftlH5NRHQAAAAAa.K5zuJeAuH8GgnnSaJAec",
      "order": {
        "id": "1",
        "dtOrder": "2020-07-21 12:55:56",
        "installment": 2,
        "customer": {
          "name": "User Test 1"
        },
        "status": "approved"
      },
      "products": [
        {
          "id": "1",
          "name": "Notebook Mac 13",
          "qttStock": 9
        }
      ]
    }
  }
}
```

<img src="/coverage/createOrder.png" alt="CreateOrder" />

<img src="/coverage/ethereal.png" alt="ethereal" />

### Querys

#### Get all Clientes
```
{
  allCostumers {
		id
    name
    orders {
      id
      dtOrder
      status
    }
  }
}
```
#### Get all Produtos
```
{
  allProducts {
    id name price qttStock
  }
}
```
## Testes Unitários

Foquei os testes unitários no service de Order, pois concentra o core da aplicação, com a responsabilidade de registrar uma compra para um usuário e enivar um email.

Para executar os testes

`yarn test`
