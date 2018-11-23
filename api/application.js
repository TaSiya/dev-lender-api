
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
            let dataa = [];
            let allUsers = await services.allUsers();
            for(let i = 0 ; i < allUsers.length ; i++){
                user = allUsers[i].name;
                let userData = await services.selectCombined(user);
                axios.get('https://api.github.com/users/'+user).then( response =>{
                    let dataResponse = response.data;
                    // console.log(dataResponse);
                    
                    dataa.push({
                        username : dataResponse.login,
                        picture : dataResponse.avatar_url,
                        home : dataResponse.html_url,
                        followers : dataResponse.followers_url,

                    });
                    console.log(dataa);
                    
                    
                });
            }

            res.json({
                status : 'success',
                response : dataa
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