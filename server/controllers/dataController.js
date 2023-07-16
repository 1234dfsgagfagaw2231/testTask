const ApiError = require('../error/ApiError');
const Data = require('../models/models');

class DataController {

    async getAllData(req, res) {
        let data = await Data.findAll();
        if (!data) {
            return ApiError.badRequest("Dataset not found");
        }
        res.json(data)
    }

    async getOneData(req, res) {
        const {id} = req.params;
        if (!id) {
            return ApiError.badRequest("query id not found");
        }

        let data = await Data.findOne({
            where: {id}
        });
        if (!data) {
            return ApiError.badRequest("Dataset not found");
        }
        res.json(data);
    }

    async createData(req, res, next) {
        try {
            const {name, coordinate, labels} = req.body;
            const data = await Data.create({
                name,
                coordinate,
                labels
            });
            console.log(name,
                coordinate,
                labels)
            return res.json(data);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateData(req, res, next) {
        try {
            const {id} = req.params;
            const newData = req.body;
            if (!id) {
                return ApiError.badRequest("query id not found");
            }
            if (newData) {
                const data = await Data.update(newData,
                    {where: {id: id}}
                );
                return res.json(data);
            } else {
                return ApiError.badRequest("Set correct data");
            }
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async deleteData(req, res, next) {
        try {
            const {id} = req.params;
            if (!id) {
                return ApiError.badRequest("query id not found");
            }
            const data = await Data.destroy({
                where: {id}
            });
            return res.json(data);
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new DataController();