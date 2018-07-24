// css
import "normalize.css";
import "./../css/main.scss";

const input = document.getElementById("price_switch");

const ENTRY_LVL_PRICE = 89.99;
const AMATEUR_LVL_PRICE = 100.99;
const PROFESSIONAL_LVL_PRICE = 119.99;

function priceLoop(initialValue, interval, counter, element) {
  let i = counter;
  setTimeout(function() {
    element.innerHTML = `${i}`;
    if(interval < 0) {
      i--;
      if (i > initialValue + interval) {
        priceLoop(initialValue, interval, i, element);
      }
    } else {
      i++;
      if (i < initialValue + interval) {
        priceLoop(initialValue, interval, i, element);
      }
    }
  }, 500);
}

input.addEventListener("click", function() {
  const yearElement = document.getElementById("year");
  const monthElement = document.getElementById("month");
  yearElement.classList.toggle("pricing__switch--active");
  monthElement.classList.toggle("pricing__switch--active");

  const entry = document.getElementById('entry');
  const amateur = document.getElementById('amateur');
  const professional = document.getElementById('professional');

  /* Clear all pending timeouts */
  const highestTimeoutId = setTimeout(";");
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }

  if (yearElement.classList.contains("pricing__switch--active")) {
    priceLoop(ENTRY_LVL_PRICE -1, -10, ENTRY_LVL_PRICE, entry);
    priceLoop(AMATEUR_LVL_PRICE -1, -10, AMATEUR_LVL_PRICE, amateur);
    priceLoop(PROFESSIONAL_LVL_PRICE -1, -10, PROFESSIONAL_LVL_PRICE, professional);
  } else {
    entry.innerHTML = `${ENTRY_LVL_PRICE}`;
    amateur.innerHTML = `${AMATEUR_LVL_PRICE}`;
    professional.innerHTML = `${PROFESSIONAL_LVL_PRICE}`;
  }
});

document.getElementById("hamburger").addEventListener("click", function() {
  this.classList.toggle("change");
  document.getElementById("menu").classList.toggle("change");
});
