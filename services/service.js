
module.exports = pool =>{
    const request = require('request');
    async function allUsers(){
        let result = await pool.query('select * from users');
        return result.rows;
    }
    async function insertUser(user){
        await pool.query('insert into users (name) values ($1)', [user]);
    }
    async function getGithubData(user){
        console.log('Siyandaaaaaaa');
    }
    async function combinedData(){
        // await getGithubData('tasiya');
        let result = await pool.query(`select name, age, email, bio, address, contact,position from users 
        join details on users.id = details.name_id;`);
        return result.rows;
    }
    async function selectCombined(name){
        let result = await pool.query(`select name, age, email, bio, address, contact,position from users 
        join details on users.id = details.name_id where name = $1`, [name]);
        return result.rows;
    }
    async function projects(){
        let result = await pool.query('select * from projects');
        return result.rows;
    }
    return{
        allUsers,
        combinedData,
        insertUser,
        selectCombined,
        projects
    }
}