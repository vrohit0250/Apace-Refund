const express = require('express');
const router = express.Router();
var axios = require('axios');


router.get("/shows",(req,res)=>{
    return res.end("We made it ..!!!!!!!");
 });


 router.get("/apidata",(req,res)=>{
        var data = JSON.stringify({"customer":{"first_name":"John","last_name":"Doe","email":"johndoe@example.com"},"items":[{"item_id":"123456","sku":"ABC-123","item_url":"https://vendor.com/items/123456","item_image_url":"https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/9434044_fpx.tif?op_sharpen=1&wid=200&fit=fit,1&$filtersm$&fmt=webp","display_name":"Lavemi Men's Real Leather Ratchet Dress Belt with Automatic Buckle,Elegant Gift Box(55-0030)","return_date":"01/19/2022","unit_price":73.4,"return_qty":1}],"refund_verification":{"method":"GET","url":"https://run.mocky.io/v3/460a6ca6-bfba-4cab-b99d-6854fe7b5780"},"card_last_four":"1111","expiration_date":"2022-04-01T16:37:14.197Z","refund_amount":73.4,"order_id":"5448-556544-5425","order_url":"https://vendor.com/orders/5448-556544-545","order_date":"12/20/2022"});

        var config = {
        method: 'get',
        url: 'https://sandbox.api.apacepayments.com/ext/refunds',
        headers: { 
            'Content-Type': 'application/json', 
            'apace-public-id': '7ef075d9d9629bb5b3d03fa7bf4800280248a56ae0907f6c84aeed88093510b30470c6088b1e069509e504f128a854b91d1d', 
            'apace-secret': '5e96ea42b20b71277c5a9f270285418d8b28224baf5a03ee168ccda8b4eda04e89603e2b36a21440c6fc2be0268b5a4fd178', 
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI1MTI2MTQ5NCIsInVpcCI6IjE3Mi4xOS4wLjkiLCJleHAiOjE2MzEyNjg0NDMsInVuYW1lIjoiZGVnZXNvbnkiLCJycG0iOjI0MDAsInByZW1pdW0iOmZhbHNlLCJhcGlrZXkiOiIwZTM0NzFhNTI4OTQzNTI1ZDM1YzRmNzYxYjk1NzA3Yjg1MTI0MmYzIiwic2NvcGUiOlsib3duZWQucmVhZCJdLCJkbGltaXQiOjQwMCwiYXBpZGxpbWl0Ijp0cnVlLCJkTGltaXRSZW5ld0RhdGUiOiIyMDIxLTA5LTEwIn0.IkT7hsyKH0XeYDVtVVf84lz1jSLfjgLxbJ98kKqKsA4'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            apiData=JSON.stringify(response.data);
            return apiData;
        
        })
        .catch(function (error) {
        console.log(error);
        });
    return res.end(apiData);
 });


 module.exports = router;