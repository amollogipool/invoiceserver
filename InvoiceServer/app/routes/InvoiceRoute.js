var express = require('express');
var router = express.Router();
var InvoiceController = require('../controllers/InvoiceController');
router.post('/add',InvoiceController.addNewInvoice);
router.get('/read',InvoiceController.getAllInvoice);
router.get('/read/:id',InvoiceController.getInvoiceById);
router.post('/update',InvoiceController.updateInvoiceById);
router.put('/delete',InvoiceController.DeleteInvoiceById);
module.exports = router;