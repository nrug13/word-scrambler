let str='kompüter';
function scr(val){
    let leng=val.length;
    let newemp='';
    for (let index = 0; index < leng; index++) {
        let random=Math.floor(Math.random()*leng);
        newemp+=val[random]  
    }
   return val=newemp;
}
console.log(scr(str))
