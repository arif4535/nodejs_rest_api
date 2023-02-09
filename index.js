const qr= require('qrcode');


let stJson = JSON.stringify(data);
qr.toString(stJson,{type:"terminal"},function(err,code)
{
    if(err) return console.log("error");
    console.log(code);
});

qr.toString(stJson,function(err,code)
{
    if(err) return console.log("error");
    console.log(code);
});
const data = {
    errorCorrectionLevel: 'H',
    type: 'terminal',
    quality: 0.95,
    margin: 1,
    color: {
     dark: '#208698',
     light: '#FFF',
    },
   }
   let strData = JSON.stringify(data)