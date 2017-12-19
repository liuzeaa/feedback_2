var express = require('express');
var router = express.Router();
var sequelize = require('../config');
/*登录接口*/
router.post('/login',function(req,res,next){
  var LoginName = req.body.LoginName,password = req.body.Password;
  sequelize
    .query(`select * from UserInfo where LoginName = '${LoginName}'`)
    .then((user)=>{
      if(password!=user[0][0].Password){
        res.json({
          status:"0",
          msg:'用户名密码错误',
          result:""
        });
      }else{

        res.json({
          status:"1",
          msg:'',
          result:user[0][0]
        });
      }
    })
    .catch(err=>{
      res.json({
        status:"2",
        msg:err.message
      });
    })
})
//注册接口
router.post('/register',(req,res,next)=>{
  var LoginName = req.body.LoginName,password = req.body.Password;

})
module.exports = router;
