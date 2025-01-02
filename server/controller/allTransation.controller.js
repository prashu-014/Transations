
const fetchData = require('../helper/fetchData');
const Transations = require("../models/transation.model");


async function fetchTransation(req,res) {
  try {
    const transation = await Transations.findOne();
    if (!transation) {
      const transationsData = await fetchData();
      if (transationsData) {
        for (let item of transationsData) {
          const newData = new Transations({
            id: item.id,
            title: item.title,
            price: item.price,
            description: item.description,
            category: item.category,
            image: item.image,
            sold: item.sold,
            dateOfSale: item.dateOfSale
          });
          await newData.save();
        }
      }
      res.status(200).json({data: "none"});
    } else {
      const data = await Transations.find();
      res.status(200).json({status:true ,transation:data});
    }
  } catch (error) {
    console.error('Error fetching or saving transactions:', error);
    res.status(500).json({error: "Internal Server Error"});
  }
  }

module.exports = fetchTransation;