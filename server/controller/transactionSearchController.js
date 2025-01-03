const Transations = require("../models/transation.model");

async function getTransactionsBySearch(req, res) {
  const { search } = req.query;
    

if (!search) {
    return res.status(400).send("Search parameter is required.");
  }
  
  try {
    const isNumeric = !isNaN(search);
    const query = {
      $or: [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    };
  
    if (isNumeric) {
      query.$or.push({ price: parseFloat(search) });
    }
  
    const transactions = await Transations.find(query);
  
    if (transactions.length === 0) {
      return res.status(404).json({ message: "No transactions found for the given search criteria." });
    }
  
    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
}

module.exports = getTransactionsBySearch;
