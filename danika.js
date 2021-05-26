window.onload = function(){
    let id = document.querySelector(`#user-id`);
    let passwd = document.querySelector(`#pw`);
    let logBtn = document.querySelector(`#login-btn`);

    logBtn.addEventListener('click', ()=>{
        if(id.value == "danika")
            if(passwd.value == "wjsansrk"){
                location.href="/suyeon.html";
                
                alert("로그인 성공");
            }
        else{
            alert("로그인 실패");
        }
    });
    
}