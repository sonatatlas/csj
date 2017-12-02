//login.js


// PUT LOGIN

const post =async ctx=>{
    const body = ctx.request.body
    if(body.account==="caoshiji666"&&body.psw==="caoshiji666"){
	ctx.session.login = true
	ctx.body={stat:true}
    }else{
	ctx.body={stat:false}
    }
	
}

module.exports={
    post
}
