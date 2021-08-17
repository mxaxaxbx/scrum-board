const bcrypt = require('bcrypt');

const user = require('../models/user.model');
const role = require('../models/role.model');

const register = async ( req, res ) => {
    if(!req.body.name || ! req.body.email || !req.body.password ) return res.status(401).send({
        code : 101,
        message : 'Incomplete data',
    });

    let existingUser = await user.findOne( { email : req.body.email } );

    if( existingUser ) return res.status(401).send({
        code : 102,
        message : 'Unexpected error',
    });

    let hash       = await bcrypt.hash(req.body.password, 10);
    let roleFinded = await role.findOne( { name : 'user' } );

    if( !roleFinded ) return res.status(401).send({
        code : 104,
        message : 'No role found. Contact with your admin',
    });

    let userObj = new user({
        name     : req.body.name,
        email    : req.body.email,
        password : hash,
        roleId   : roleFinded._id,
        dbStatus : true,
    });

    let result = await userObj.save();
    if( !result ) return res.status(400).send({
        code : 103,
        message : 'An error ocurred please try again later',
    });
    
    try {
        let jwt = userObj.generateJWT();
        res.status(201).send( { jwt } );

    } catch(e) {
        console.log(`User Controller Register Error. ${e}`);
        return res.status(400).send({
            code : 105,
            message : 'An error ocurred please try again later',
        });
        
    }

}

const list = async( req, res ) => {
    let users = await user.find( { name : new RegExp( req.params['name'], 'i' ) } )
        .populate("roleId")
        .exec();

    return res.status(200).send({ data: users });
}

module.exports = { register, list};