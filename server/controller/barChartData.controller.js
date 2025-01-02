const transations = require('../models/transation.model')

async function getBarChartDataByMonth(req, res) {

    const { month } = req.body;


    if (!month) {
        return res.status(400).send("not found data...")
    }

    try {
        const Transactions = await transations.aggregate([
            {
                $addFields: {
                    month: { $month: { $dateFromString: { dateString: "$dateOfSale" } } },
                },
            },
            {
                $match: {
                    month: month,
                },
            },
        ]);


        const maxPrice = Math.max(...Transactions.map((t) => t.price));


        const data = rangefind(maxPrice, Transactions)


        return res.status(200).json({
            month: month,
            transactions: data,
        });

    } catch (error) {
        console.log(error);

    }

}



function rangefind(max, transactions) {
    const ranges = [];
    const step = 100;

    for (let i = 1; i <= 900; i += step) {
        const rangeTransactions = transactions.filter(
            (transaction) => transaction.price >= i && transaction.price < i + step
        );

        ranges.push({
            min: i,
            max: i + step - 1,
            transactions: rangeTransactions,
        });
    }

    const rangeAbove900 = transactions.filter(
        (transaction) => transaction.price > 900
    );

    ranges.push({
        min: 900,
        max: max,
        transactions: rangeAbove900,
    });

    return ranges;
}


module.exports = getBarChartDataByMonth;