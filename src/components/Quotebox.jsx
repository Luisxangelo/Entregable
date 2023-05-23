import "./styles/Quotebox.css"
import Footpart from "./Footerpart.jsx"


const QuoteBox = ({phrase, handleChangeQuote, author}) => {
  return (<>
    <div className="quoteBox_Container">
    <section className="quoteBox">
        <article className="quoteBox_phrase">
            <p>{phrase}</p>
        </article>
    </section>
    <button className="quoteBox_btn" onClick={handleChangeQuote}>
        <img src="./public/image/vector.png" alt="" />
    </button>
    <Footpart author={author} />
    </div>
     
   </>
  )
}

export default QuoteBox