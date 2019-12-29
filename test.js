const nodePandocPromise = require('./index')
var src="# Hello \n\nIt\'s bananas";
var args = ['-f', 'markdown', '-t', 'html5'];

nodePandocPromise(src,args)
    .then((res)=>{
        console.log(res);
    }).catch(err=>{
    console.error("oops",err);
});
