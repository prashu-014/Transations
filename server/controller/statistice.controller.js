const connectDB = require("../config/dbConnection");
const transations = require('../models/transation.model')

async function getStatasticsByMonth(req, res) {


    const { month } = req.body;

    if (!month) {
        return res.status(400).send("not found data...")
    }

    try {
        connectDB()
        const transactions = await transations.find(
            {
                $expr: {
                    $eq: [{ $month: { $dateFromString: { dateString: "$dateOfSale" } } }, month],
                },
            }

        );

        const filteredData = transactions.map((transaction) => ({
            id: transaction.id,
            price: transaction.price,
            dateOfSale: transaction.dateOfSale,
            sale: transaction.sale
        }));

        res.status(200).json(filteredData)

    } catch (error) {
        console.log(error);

    }


}

module.exports = getStatasticsByMonth