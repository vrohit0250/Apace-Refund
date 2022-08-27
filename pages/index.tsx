import React ,{ useEffect,useState } from 'react';

import { Panel, Text, Button, H1, H2, Link as StyledLink} from '@bigcommerce/big-design';
import styles from "./style.module.css";
import { ReactElement } from 'react';
import Dashboard from './dashboard'; 
import fs from "fs";

// import { StarIcon } from '@bigcommerce/big-design-icons';
// export const getStaticProps = async () =>{
//         const res = await fetch('https://sandbox.api.apacepayments.com/ext/refunds');
//         const data = await res.json();
//         console.log(data)
//         return{
//             props:{
//                 data,
//             },
//         }
// }

const Index=({data}) =>{
        return (
            <> 
            <Dashboard orders={JSON} />


            
            {/* {data.map((curElem)=>{ return( <div key={curElem.id}>
                        <h3>{curElem.id}</h3>
                        <h2>{curElem.refundNumber}</h2>
                        <h3>{curElem.amount}</h3>
                        <h2>{curElem.createdAt}</h2>

     </div>)}) */}
        {/* } */}
        </>  
        );
    }

export default Index;

