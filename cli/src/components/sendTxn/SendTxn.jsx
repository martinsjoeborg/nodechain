import "./SendTxn.css"

const SendTxn = () => {

    return ( 
        <div>
            <form >
                From:
                <input type="text" />
                <br />
                <br />
                To:
                <input type="text" />
                <br />
                <br />
                Amount:
                <input type="text" />
                <br />
                <br />

                <button>Send</button>
            </form>
        </div>
     );
}
 
export default SendTxn;