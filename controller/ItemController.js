const { item } = require('../models')

class ItemController {
    static getItems(req, res) {
        item.findAll()
        .then((result)=>{
                res.send(result);
            })
        .catch((err) => {
            res.send(err)
        });
       
    }
    static create(req, res) {
        //
    }
    static update(req, res) {
        //
    }
    static delete(req, res) {
        //
    }
    static getInfoById(req, res) {
        //
    }
}

module.exports = ItemController