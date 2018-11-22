
module.exports = (services)=>{
    async function apiLinks(req,res){
        try{
            res.send('/api/users .... /api/usersData ... /api/github ... ')
        } catch(err) {

        }
    }
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
    async function combiningRoute(req, res, next){
        try{
            let allData = await services.combinedData();

            res.json({
                status: 'success',
                allData
            })
        } catch(err) {
            res.json({
                status : err.stack
            })
        }
    }
    async function getGigHub(req, res){
        try{
            let user = 'Phindie'
            const axios = require('axios')
            axios.get('https://api.github.com/users/'+user).then( response =>{
                let data = response.data;
                let username = data.login;
                console.log(username);
                
                
                
            })
        } catch(err) {
            res.json({
                status : "failed",
                message : err.stack
            })
        }
    }
    return {
        apiLinks,
        allUsers,
        combiningRoute,
        namePost,
        getGigHub
    }
}