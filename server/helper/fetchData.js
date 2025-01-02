
const fetchData = async () => {

    const data = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const response = await data.json();

    return response;

}

module.exports = fetchData;