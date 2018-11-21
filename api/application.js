
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

    async function namePost(req, res, next){
        try{
            let name = req.params.username;
            await services.insertUser(name);
            res.json({
                status: 'success',
            })
        } catch(err) {
            res.json({
                status : err.stack
            })
        }
    }
    return {
        allUsers,
        namePost
    }
}