import Restaurant from "../models/restaurant.model.js";

const restaurantController = {};

// CREATE
restaurantController.create = async (req, res) => {
  try {
    const { title, type, imageUrl } = req.body;

    if (!title || !type || !imageUrl) {
      return res.status(400).send({ message: "Title, Type or imageUrl cannot be empty!" });
    }

    const exists = await Restaurant.findOne({ where: { title } });
    if (exists) {
      return res.status(400).send({ message: "Restaurant already exists" });
    }

    const newRestaurant = await Restaurant.create({ title, type, imageUrl });
    res.status(201).send(newRestaurant);
  } catch (error) {
    res.status(500).send({ message: error.message || "Something went wrong" });
  }
};

// READ ALL + Sorting
restaurantController.getAll = async (req, res) => {
  try {
    // ?sort=asc&field=title
    const sortOrder = req.query.sort === "desc" ? "DESC" : "ASC";
    const field = req.query.field || "title";

    const data = await Restaurant.findAll({
      order: [[field, sortOrder]],
    });

    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error.message || "Something went wrong" });
  }
};

// READ BY ID
restaurantController.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Restaurant.findByPk(id);

    if (!data) {
      return res.status(404).send({ message: `Restaurant with id=${id} not found` });
    }

    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error.message || "Something went wrong" });
  }
};

// UPDATE
restaurantController.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, type, imageUrl } = req.body;

    if (!title && !type && !imageUrl) {
      return res.status(400).send({ message: "Title, Type or imageUrl cannot all be empty!" });
    }

    const [num] = await Restaurant.update(
      { title, type, imageUrl },
      { where: { id } }
    );

    if (num === 1) {
      res.send({ message: "Restaurant updated successfully!" });
    } else {
      res.status(404).send({ message: `Restaurant with id=${id} not found or no changes` });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Something went wrong" });
  }
};

// DELETE
restaurantController.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send({ message: "Id is missing" });
    }

    const num = await Restaurant.destroy({ where: { id } });

    if (num === 1) {
      res.send({ message: "Restaurant deleted successfully!" });
    } else {
      res.status(404).send({ message: `Restaurant with id=${id} not found` });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Something went wrong" });
  }
};

export default restaurantController;
