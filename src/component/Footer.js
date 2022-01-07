import '../css/Footer.css';

function Footer() {
  return (
    <footer>
      <section>
        <div className="left">
            <a
              href="https://github.com/flavio-bianchetti"
              target="_blank"
              rel="noreferrer"
            >
            Developed by Flávio Bianchetti
            </a>
        </div>
        <div className="middle">
            2020 - 2021
        </div>
        <div className="right">
          <a
              href="https://www.coingecko.com/pt/api/documentation"
              target="_blank"
              rel="noreferrer"
            >
              API provided by CoinGeko
            </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
