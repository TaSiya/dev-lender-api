
module.exports = (services)=>{
    async function allUsers(req, res, next) {
        try{
            let users = await services.allUsers();
            res.json({
                status : 'success',
                data : users
            })
        } catch(err) {
            res.json({
                status : "error"
            })
        }
    }

    return {
        allUsers
    }
}