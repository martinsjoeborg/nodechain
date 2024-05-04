import "./GetOneBlock.css"
import { useState } from "react";
import axios from "axios";


const GetOneBlock = () => {


    const [blockchain, setBlockchain] = useState();
    const[block, setBlock] = useState("test");
    const [nonce, setNonce] = useState("");

    async function getBlockchain(e) {
        e.preventDefault();
        console.log("get blockchain");

        await axios.get('http://localhost:3001/api/v1/blockchain')
            .then(response => {
                let array = response.data.data.chain;

                

                // setBlockchain(response.data.data.chain);
                console.log(response.data.data.chain[1].data[0].fullName);
            })
            .catch(error => {
                console.error(error);
            });
        
        for (let i = 0; i < blockchain.length; i++) {
            if (blockchain[i].nonce === nonce) {
                setBlock(blockchain[i]);
            }
        }
    }

    function test() {
        console.log(block)
    }



    return ( 
        <div>
            <form onSubmit={getBlockchain}>
                <p>Enter nonce to get block</p>
                <input type="text" value={nonce} onChange={(e) => setNonce(e.target.value)}/>
                <button>Get Block</button>
            </form>

            <div>{ }</div>
            <button onClick={test}>test</button>
        </div>
     );
}
 
export default GetOneBlock;