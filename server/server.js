const express = require('express');
const app = express();
const PORT = 8000;
var axios = require('axios');

app.get('/apiRes',function(req,res){


            var config = {
            method: 'get',
            url: 'https://sandbox.api.apacepayments.com/ext/refunds',
            headers: { 
               
                'Accept': 'application/json', 
                'apace-public-id': '84a56ef01e49c3c15e21061b8bf6df5a6409dad0dba078ddf10be84985b4dbaa5d95aa4ef411ec56373d968f1e22f0b9953b', 
                'apace-secret': '6ea5646b5025a93386416a9cd00e824b9fcfe52cbf47d8240c442da7866fb31fe3a2e4a5c3c5f1a8a6859e1dcb818b932f5c'
            }
            };
            
            axios(config)
            .then(function (response) {
            console.log('sdfsdfsdfsd',JSON.stringify(response.data));
            return res.send(response.data);
            })
            .catch(function (error) {
            console.log(error);
            });
            

});



app.get('/apiOrders',function(req,res){


        var config = {
        method: 'get',
        url: 'https://api.bigcommerce.com/stores/g2ygr4dac9/v2/orders',
        headers: { 
            'Content-Type': 'application/json', 
            'accept': 'application/json', 
            'X-Auth-Token': 'f95mohxbqfy0yxrj42w9fxywob990bb'
        }
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return res.send(response.data);

        })
        .catch(function (error) {
        console.log(error);
        });




});
app.listen(PORT);



