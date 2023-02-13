const getQuote = require('webseries-quotes')
const Statement = require('../Model/statementModel')
const { StatusCodes } = require('http-status-codes')

//This file consists of all the backend task that will be performed

const generateStatement = async (req, res) => {
    const statement = getQuote.getQuote(); //Here a single data is stored in statement
    Statement.create(statement);//Here the statment is stored in mongodb Database
    const totalQuotes = (await Statement.find({})).length
    res.status(StatusCodes.OK).json({ statement, totalQuotesGen: `Total no of qoutes generated are ${totalQuotes}` })
}

const getAllStatements = async (req, res) => {
    const statements = await Statement.find({});//Here it is fetching all the data that are stored in the mongodb database
    res.status(StatusCodes.OK).json({ statements })
}

module.exports = { generateStatement, getAllStatements };
