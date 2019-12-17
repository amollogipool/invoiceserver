var mysqlQuery = require('../../config');
/**
 * This function represent to insert record to Employee master
 * @param {*} req 
 * @param {*} res 
 * @author Amol Dhamale
 */

function addNewInvoice(req,res){
    var param = req.body;
    var query="INSERT INTO `invoice_master` (`item`, `price`, `qty`, `discount`, `amount`, `sgst`, `cgst`, `amttax`,`paid`,`status`) VALUES ('" + param.item + "','" + param.price + "','" + param.qty + "','" + param.discount + "','" + param.amount +"','" + param.sgst + "','" + param.cgst + "','" + param.amttax + "','"+ param.paid +"',1)";
    mysqlQuery.excecuteQuery(query, function(error, result){
        if(error){
            return res.json({
                error: true,
                message: error
            })
        }else{
            return res.json({
                error: false,
                message: "Record Inserted Successfully"
            });
        }
    });
}

/**
 * This function represent to select all record from Employee Master table
 * @param {*} req 
 * @param {*} res 
 * @author Amol Dhamale
 */
function getAllInvoice(req, res) {
    var query = "SELECT `id`, `cid`, `item`, `price`, `qty`, `discount`, `amount`, `sgst`, `cgst`, `amttax`, `paid`, `status` FROM `invoice_master` where status = 1 ORDER by id DESC";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error){
            return res.json({
                error: true,
                message: error
            })
        }else{
            return res.json({
                error: false,
                result: result
            })
        }
    });
}

/**
 * This function represent select record from Employee Master table for edit
 * @param {*} req 
 * @param {*} res 
 * @author Amol Dhamale
 */

function getInvoiceById(req, res) {
    var id = req.params.id;
    var query = "SELECT * FROM invoice_master where id=" + id;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error){
            return res.json({
                error: true,
                message: error
            });
        }else{
            return res.json({
                result: result[0]
            });
        }
            
    })
}


/**
 * This function represent to update the Empoyee Master
 * @param {*} req 
 * @param {*} res 
 * @author Amol Dhamale
 */

function updateInvoiceById(req, res) {
    var param = req.body;
    var query = "UPDATE invoice_master SET `item`= '" + param.item + "',`price`= '" + param.price + "',`qty`= '" + param.qty + "',`discount`= '" + param.discount + "', `amount`= '" + param.amount + "',`sgst`= '" + param.sgst + "',`cgst`='"+ param.cgst + "', `amttax`= '" + param.amttax + "',`paid`='" + param.paid + "', WHERE id =" + param.id;
    mysqlQuery.excecuteQuery(query, function (error, result) { 
        if (!error){
            return res.json({
                error: false,
                message: "Employee Updated Successfully"
            });
        }else{
            return res.json({
                error: true,
                message: error
            })
        }
    })
}

/**
 * This function represent to delete record from Employee Master table
 * @param {*} req 
 * @param {*} res 
 * @author Amol Dhamale
 */
function DeleteInvoiceById(req, res) {
    var param = req.body;
    var query = "UPDATE `invoice_master` SET `status` = 0 WHERE id=" + param.id;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error){
            return res.json({
                error: true,
                message: error
            })
        }else{
            return res.json({
                result: result
            })
        }
    })
}

module.exports = {
    // login: login,
    addNewInvoice: addNewInvoice,
    getAllInvoice: getAllInvoice,
    getInvoiceById: getInvoiceById,
    updateInvoiceById: updateInvoiceById,
    DeleteInvoiceById: DeleteInvoiceById
}