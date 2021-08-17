const role = require('../models/role.model');

const register = async ( req, res ) => {
    if( !req.body.name || !req.body.description ) return res.status(400).send({
        code    : '101',
        message : 'Process failed. Incomplete data.',
    });

    const existingRole = await role.findOne( { name : req.body.name } );

    if( existingRole ) return res.status(400).send({
        code : '102',
        message : 'Process failed. Role already exists.',
    });

    const roleObj = new role({
        name        : req.body.name,
        description : req.body.description,
        dbstatus    : true,
    });
    const result = await roleObj.save();

    if( !result ) return res.status(400).send('103. Process failed. Failed to register role');

    return res.status(201).send( { roleObj } );
};

const list = async ( req, res ) => {
    const roles = await role.find();
    return res.status(200).send( { data : roles } );
};

module.exports = { register, list };
