
const mongoose = require('mongoose')
const fetchData = require('../helper/fetchData');
const connectDB = require("../config/dbConnection");
const Transations = require("../models/transation.model");


async function fetchTransation() {

    try {
      connectDB();
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
  
            })
            await newData.save();
          }
        }
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      mongoose.connection.close();
    }
  }

module.exports = fetchTransation;