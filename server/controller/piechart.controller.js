const transations = require('../models/transation.model')

async function getcategoryByYear(req, res) {

    const { yearnum } = req.query;
    const year = parseInt(yearnum, 10);

    if (!year) {
        return res.status(400).send("not found data...")
    }

    try {
        const transactions = await transations.find(
            {
                $expr: {
                    $eq: [{ $year: { $dateFromString: { dateString: "$dateOfSale" } } }, year],
                },
            }

        );

        const filteredData = transactions.map((transaction) => ({
            id: transaction.id,
            category: transaction.category,
            dateOfSale: transaction.dateOfSale,

        }));

        res.status(200).json(filteredData)

    } catch (error) {
        console.log(error);

    }


}

module.exports = getcategoryByYear