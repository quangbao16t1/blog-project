import Joi from 'joi';

export const registerValidator = (data) => {
    const rule = Joi.object({
        firstName: Joi.string().min(4).max(225).required(),
        lastName: Joi.string().min(4).max(225).required(),
        email: Joi.string().min(6).max(225).required().email(),
        gender: Joi.string().min(3).max(15).required(),
        address: Joi.string().min(3).max(225).required(),
        // password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
        phoneNumber: Joi.string().pattern(new RegExp('^[0-9]{6,12}$')).required(),
        passwordHash: Joi.string().required(),
        roleId: Joi.required()
    })

    return rule.validate(data);
}

export const updateUserValidate = (data) => {
    const rule = Joi.object({
        firstName: Joi.string().min(4).max(225).required(),
        lastName: Joi.string().min(4).max(225).required(),
        gender: Joi.string().min(3).max(15).required(),
        address: Joi.string().min(3).max(225).required(),
        phoneNumber: Joi.string().pattern(new RegExp('^[0-9]{6,12}$')).required(),
        roleId: Joi.number().required()
    })

    return rule.validate(data);
}

export const postValidate = (post) => {
    const rule = Joi.object({
        userId: Joi.number().required(),
        title: Joi.string().required(),
        content: Joi.string().required(),
        imageCover: Joi.string().allow(null),
    })

    return rule.validate(post);
}

export const cmtValidate = (cmt) => {
    const rule = Joi.object({
        userId: Joi.number().required(),
        postId: Joi.number().required(),
        parentId: Joi.string().allow(null),
        comment: Joi.string().required(),
        publish: Joi.string().allow(null),
    })

    return rule.validate(cmt)
}

export const cmtUpdateValidate = (cmt) => {
    const rule = Joi.object({
        comment: Joi.string().max(255).required(),
        publish: Joi.string().allow(null),
    })

    return rule.validate(cmt)
}

export const rateValidate = (rate) => {
    const rule = Joi.object({
        userId: Joi.number().required(),
        postId: Joi.number().required(),
        rate: Joi.number().min(0).max(5).required()
    })

    return rule.validate(rate)
}

export const rateUpdateValidate = (rate) => {
    const rule = Joi.object({
        rate: Joi.number().min(0).max(5).required()
    })

    return rule.validate(rate)
}

export const bookmarkValidate = (bookmark) => {
    const rule = Joi.object({
        userId: Joi.number().required(),
        postId: Joi.number().required(),
        note: Joi.string().required()
    })

    return rule.validate(bookmark)
}