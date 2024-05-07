const connectDB = require("./mongodb");

const createProduct = async (req, res) => {
  try {
    const { name, price = 0, image = null } = req.body;

    if (!name) {
      res.status(400).json({
        message: "ProductName is Required",
      });
      return;
    }

    if (!price) {
      res.status(400).json({
        message: "Price  is Required",
      });
      return;
    }

    if (!image) {
      res.status(400).json({
        message: "ProductImage is Required",
      });
      return;
    }

    const mongoDB = await connectDB();
    const exists = await mongoDB.collection("PItems").countDocuments({ name });

    if (exists) {
      res.status(400).json({
        message: "ProductName already Exists",
      });
      return;
    }

    const dbdata = {
      id: new Date().getTime().toString(),
      name,
      price,
      image,
      createdat: new Date(),
    };
    await mongoDB.collection("PItems").insertOne({ ...dbdata });
    res.status(200).json({ message: "Product added Successfully" });
  } catch (error) {
    console.log("ERROR in Add Product", error);
    res.status(400).json({ message: "Error Occured" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const mongoDB = await connectDB();
    const data = await mongoDB
      .collection("PItems")
      .find(
        {},
        {
          projection: {
            id: 1,
            name: 1,
            price: 1,
            image: 1,
          },
        }
      )
      .toArray();

    const modifiedData = data.map((d) => {
      return {
        id: d.id,
        title: d.name,
        price: d.price,
        image: d.image,
      };
    });
    res.status(200).json({ data: modifiedData });
  } catch (error) {
    console.log("ERROR in Get Product", error);
    res.status(400).json({ message: "Error Occured" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
};
