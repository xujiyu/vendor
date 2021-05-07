const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

const USERS_TABLE = process.env.USERS_TABLE;
const PRODUCT_TABLE = process.env.PRODUCT_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();
// const { DynamoDbClient, ScanCommand } = require("@aws-sdk/client-dynamodb");

app.use(express.json());

app.get("/users/:userId", async function (req, res) {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      const { userId, name } = Item;
      res.json({ userId, name });
    } else {
      res
        .status(404)
        .json({ error: 'Could not find user with provided "userId"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive user" });
  }
});

app.get("/whoami/", async function (req, res) {
  res.json({"username":"da335"});
});

app.post("/users", async function (req, res) {
  const { userId, name } = req.body;
  if (typeof userId !== "string") {
    res.status(400).json({ error: '"userId" must be a string' });
  } else if (typeof name !== "string") {
    res.status(400).json({ error: '"name" must be a string' });
  }

  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId: userId,
      name: name,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ userId, name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create user" });
  }
});

// add a single product / update existing product
app.post("/product", async function (req, res) {
  const { productId, name, quantity, price } = req.body;
  if (typeof productId !== "string") {
    res.status(400).json({ error: '"productId" must be a string' });
  } else if (typeof name !== "string") {
    res.status(400).json({ error: '"name" must be a string' });
  } else if (typeof quantity !== "number") {
    res.status(400).json({ error: '"quantity" must be a number'});
  } else if (typeof price !== "number") {
    res.status(400).json({ error: '"price" must be a number'});
  }

  const params = {
    TableName: PRODUCT_TABLE,
    Item: {
      productId: productId,
      name: name,
      quantity: quantity,
      price: price,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ productId, name, quantity, price });
  } catch (error) {
    console.log(error);
    res.status(500).setHeader('Access-Control-Allow-Origin', '*');
    res.json({ error: "Could not create product" });
  }
});


// get info of one existing product
app.get("/product/:productId", async function (req, res) {
  const params = {
    TableName: PRODUCT_TABLE,
    Key: {
      productId: req.params.productId,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      const { productId, name, quantity, price } = Item;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ productId, name, quantity, price });
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res
        .status(404)
        .json({ error: 'Could not find product with provided "productId"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).setHeader('Access-Control-Allow-Origin', '*');
    res.json({ error: "Could not retreive product" });
  }
});


// get info of all existing product
app.get("/allProduct/", async function (req, res) {
  const params = {
    TableName: PRODUCT_TABLE,
  };

  try {
    const items = await dynamoDbClient.scan(params).promise();
    if (items) {
         res.setHeader('Access-Control-Allow-Origin', '*');
         res.json({ "body": JSON.stringify(items.Items)});
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res
        .status(404)
        .json({ error: 'Could not find product with provided "productId"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).setHeader('Access-Control-Allow-Origin', '*');
    res.json({ error: "Could not retreive product" });
  }
});


// remove all existing product
app.get("/removeAllProduct/", async function (req, res) {
  const params = {
    TableName: PRODUCT_TABLE,
  };

  try {
    const items = await dynamoDbClient.scan(params).promise();
    if (items) {
      for (item of items.Items) {
        const params2 = {
          TableName: PRODUCT_TABLE,
          Key: {
            productId: item['productId'],
          },
        };
        await dynamoDbClient.delete(params2).promise();
        
      }
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({"body": JSON.stringify(items.Items)});
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res
        .status(404)
        .json({ error: 'Could not find product with provided "productId"' });
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).setHeader('Access-Control-Allow-Origin', '*');
    res.json({ error: "Could not remove all product" });
  }
});

// remove an existing product
app.get("/removeAProduct/:productId", async function (req, res) {
  const params = {
    TableName: PRODUCT_TABLE,
    Key: {
      productId: req.params.productId,
    },
  };

  try {
      const {item} = await dynamoDbClient.delete(params).promise();
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({isSuccess: "true"});
  } catch (error) {
    console.log(error);
    res.status(500).setHeader('Access-Control-Allow-Origin', '*');
    res.json({ error: "Could not remove this product" });
  }
});




app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
