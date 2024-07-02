const quote = document.querySelector("#quote"),
  author = document.querySelector("#author"),
  btnNewQuote = document.querySelector(".new-quote"),
  btnTelegram = document.querySelector(".telegram");

const aip_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const res = await fetch(url);
  const data = await res.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getQuote(aip_url);

btnNewQuote.addEventListener("click", () => getQuote(aip_url));

const telegram = () => {
  window.open(
    `https://telegram.me/share/url?url=${author.innerHTML}&text="${quote.innerHTML}"`,
    "Telegarm Window",
    "width=600",
    "height=300"
  );
};

btnTelegram.addEventListener("click", () => telegram());
