
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
        await getGithubData('tasiya');
        let result = await pool.query(`select name, age, email, bio, address, contact, loan, deposit, capital, amount_left, position from users 
        join details on users.id = details.name_id
        join monies on details.id = monies.detail_id`);
        return result.rows;
    }
    return{
        allUsers,
        combinedData,
        insertUser
    }
}