module.exports = pool =>{
    async function allUsers(){
        let result = await pool.query('select * from users');
        return result.rows;
    }
    async function insertUser(user){
        await pool.query('insert into users (name) values ($1)', [user]);
    }
    return{
        allUsers,
        insertUser
    }
}