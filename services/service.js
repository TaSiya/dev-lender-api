module.exports = pool =>{
    async function allUsers(){
        let result = await pool.query('select * from users');
        return result.rows;
    }

    return{
        allUsers
    }
}