const transations = require('../models/transation.model')

async function getStatasticsByMonth(req, res) {

    const { month } = req.query;
    const monthNumber = parseInt(month, 10);

    if (!month) {
        return res.status(400).send("not found data...")
    }

    try {
        const transactions = await transations.find(
            {
                $expr: {
                    $eq: [{ $month: { $dateFromString: { dateString: "$dateOfSale" } } }, monthNumber],
                },
            }

        );

        const filteredData = transactions.map((transaction) => ({
            id: transaction.id,
            price: transaction.price,
            dateOfSale: transaction.dateOfSale,
            sale: transaction.sold
        }));

        res.status(200).json(filteredData)

    } catch (error) {
        console.log(error);

    }


}

module.exports = getStatasticsByMonth