import { useState } from "react";

function Calculator() {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [clicked, setClicked] = useState(false);

  const totalTipPerPersone = Math.floor(bill * percentage) / 100;

  const total = totalTipPerPersone / numberOfPeople;

  const totalAmount = Math.floor(bill + totalTipPerPersone) / numberOfPeople;

  function handlePercentageButtonClick(value) {
    setPercentage(value);
  }

  function handleReset() {
    setBill(0);
    setPercentage(0);
    setNumberOfPeople(0);
  }

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="calculator-body">
      <section className="bill-input">
        <span className="bill-input-span">Bill</span>
        <span className="bill-input-dollar">$</span>
        <input
          className="bill-input-value"
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
        <article className="main-part">
          <span className="main-part-span">Select Tip %</span>

          <div className="buttons">
            <button onClick={() => handlePercentageButtonClick(5)}>5%</button>
            <button onClick={() => handlePercentageButtonClick(10)}>10%</button>
            <button onClick={() => handlePercentageButtonClick(15)}>15%</button>
            <button onClick={() => handlePercentageButtonClick(25)}>25%</button>
            <button onClick={() => handlePercentageButtonClick(50)}>50%</button>

            {!clicked ? (
              <button onClick={handleClick}>Custom</button>
            ) : (
              <input
                onChange={(e) => setPercentage(Number(e.target.value))}
                value={percentage}
                className="input-custom"
              />
            )}
          </div>
        </article>
        <article className="footer-part">
          <span className="footer-part-span">Number of people</span>
          <input
            className="footer-part-input"
            type="number"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(Number(e.target.value))}
          />
        </article>
      </section>

      <section className="total-input">
        <>
          <article className="tip-amount">
            <p className="tip-amount-p">
              Tip Amount  <br /> / <span className="number-span">Person</span>
            </p>
            {percentage === 0 ? "" : <p className="number"> $ {total} </p>}
          </article>
          <article className="total">
          <p className="tip-amount-p">

              Total Amount  <br />  / <span className="number-span">Person</span>
            </p>

            {numberOfPeople === 0 ? "" : <p className="number"> $ {totalAmount}
            
            
            
            </p>}
          </article>
        </>

        <button className="btn-reset" onClick={handleReset}>
          RESET
        </button>
      </section>
    </div>
  );
}
export default Calculator;
