const connectDB = require("../config/dbConnection");
const Transations = require("../models/transation.model");

async function getTransactionsByMonth(req, res) {
  const { month } = req.body; 

  try {
    connectDB()
    const transactions = await Transations.find({
        $expr: {
            $eq: [{ $month: { $dateFromString: { dateString: "$dateOfSale" } } }, month],
          },
    });

    if (transactions.length === 0) {
      return res.status(404).json({ message: "No transactions found for the given month" });
    }

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
}

module.exports = getTransactionsByMonth;
