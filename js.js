function finishhomework(callback){
    console.log("starting homework....");
    setTimeout(()=>{
        console.log("finished homework");
        callback();
    },3000);
}
function startdinner(callback){
    console.log("start dinner...");
    setTimeout(() => {
        console.log("dinner done.....");
        callback();
    }, 1500);
}
function gotoplayground(callback){
    console.log('go to playground.....');
    
}
finishhomework(() => {
    startdinner(() => {
        gotoplayground();
    });
});
