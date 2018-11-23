
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
            const axios = require('axios')
            let user ;
            let data = [];
            let allUsers = await services.allUsers();
            for(let i = 0 ; i < allUsers.length ; i++){
                user = allUsers[i].name;
                let userData = await services.selectCombined(user);
                console.log(userData,' wouhfuiaheifhqiueahfhasufhueqhafuheuih');
                
                axios.get('https://api.github.com/users/'+user).then( response =>{
                    data = response.data;
                    console.log(data);
                    let username = data.login;
                    let picture = data.avatar_url;
                    let home = data.html_url;
                    let followers = data.followers_url
                    
                    
                });
            }

            res.json({
                status : 'success',
                data : [
                    {
                        username,
                        picture,
                        home,
                        followers
                    }
                ]
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