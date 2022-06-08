import Message from '../commons/message.js';
import RES from '../commons/status.js';
import { rateUpdateValidate, rateValidate } from '../commons/validation.js';
import RateService from '../services/rate.service.js';

const RateController = {};

RateController.createRate = async (req, res) => {
    const rate = {
        userId: req.body.userId,
        postId: req.body.postId,
        rate: req.body.rate,
    }

    const { error } = rateValidate(rate);

    if (error) return res.status(422).json({
        error: error.details[0].message
    });

    await RateService.createRate(rate)
        .then(() => {
            RES.created(res, rate, Message.create);
        })
        .catch((error) => {
            RES.internal(res, Message.unCreate);
        })
}

RateController.getAllRates = async (req, res) => {
    try {
        const rate = await RateService.getAllRates();
        RES.success(res, rate, Message.success);
    } catch (error) {
        RES.internal(res, Message.notFound)
    }
}

RateController.deleteRate = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await RateService.deleteRate(id);
        RES.success(res, result, Message.delete)
    } catch (error) {
        RES.notFound(res, Message.unDelete)
    }
}

RateController.getRateById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await RateService.getRateById(id);
        RES.success(res, result, Message.success)
    } catch (error) {
        RES.notFound(res, Message.notFound)
    }
}

RateController.updateRate = async (req, res) => {
    const rateUpdate = {
        userId: req.body.userId,
        postId: req.body.postId,
        rate: req.body.rate,
    }

    const id = req.params.id;
    const { error } = rateUpdateValidate(rateUpdate);

    if (error) return res.status(422).json({
        error: error.details[0].message
    });

    await RateService.updateRate(id, rateUpdate)
        .then(() => {
            RES.updated(res, Message.update)
        })
        .catch((error) => {
            RES.internal(res, Message.unUpdate)
        })
}

RateController.getRateByPostId = async (req, res) => {
    try {
        const id = req.params.postId;

        const result = await RateService.getRateByPostId(id);
        RES.success(res, result, Message.success);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}

export default RateController;