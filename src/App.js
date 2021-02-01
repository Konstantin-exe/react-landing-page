/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from './img/logo.png';
import downloadBtn from './img/downloadButton.png';
import playBtn from './img/playButton.png';
import macBook from './img/macBook.png';
import screen from './img/screen.png';
import lifeHacker from './img/featured-01.png';
import combinator from './img/featured-02.png';
import productHunt from './img/featured-03.png';

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 65%;
  padding-top: 35px;
  padding-bottom: 20px;
  font-weight: 630;
  font-size: 95%;

  a {
    text-decoration: none;
    color: #f5f5f5;
    text-transform: uppercase;
  }

  img {
    height: 35px;
    margin: 0 40px;
  }
`;

const sectionHeaderStyle = css`
  border-top: solid 1px #333;
`;

const headerStyle = css`
  text-align: -webkit-center;

  margin: 0 auto;
  width: 57%;

  h1 {
    font-size: 56px;
    color: #f5f5f5;
    font-weight: 570;
    line-height: 72px;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 32px;
    color: #868689;
    font-weight: 300;
    line-height: 40px;
    padding-top: 0px;
  }
  a {
    display: flex;
    margin-top: 20px;
    font-size: 18px;
    color: #00a2ff;
    border: 2px solid #00a2ff;
    text-decoration: none;

    border-radius: 9px;
    font-weight: 500;
  }

  img {
    height: 25px;
  }
`;

const headerLink = css`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

const watch = css`
  position: relative;
  top: -39px;
  right: -80px;
`;

const load = css`
  position: relative;
  top: -39px;
  right: -100px;
`;

const headerLinkLeft = css`
  padding: 15px 100px 15px 15px;
`;

const headerLinkRight = css`
  padding: 15px 75px 15px 15px;
`;

const temps = css`
  text-align: -webkit-center;
  margin-bottom: -550px;
`;
const macBookTemp = css`
  margin-top: 30px;
  height: 750px;
  width: 100%;
  margin-bottom: 0px;
`;
const screenTemp = css`
  height: 451px;
  width: 680px;
  position: relative;
  top: -716px;
  margin-bottom: 0px;
`;

const asSeen = css`
  text-align: -webkit-center;
  color: #f5f5f5;
  font-size: 21px;
  line-height: 52px;
  position: relative;
`;

const asSeenProducts = css`
  justify-content: space-around;
  display: flex;
  width: 77%;
  height: 50px;
`;

function App() {
  return (
    <>
      <nav css={navStyle}>
        <a href="#1">Product</a>
        <a href="#1">Support</a>
        <img src={logo} alt="" />
        <a href="#1">What's new</a>
        <a href="#1">Buy</a>
      </nav>
      <section css={sectionHeaderStyle}>
        <header css={headerStyle}>
          <h1>
            Ghostnote 2<sup>®</sup>
          </h1>
          <h3>
            The powerful todo and notes app just got a complete revamp. Support
            MacOS Catalina
          </h3>
          <div css={headerLink}>
            <div>
              <a css={headerLinkLeft} href="#1">
                Watch Video
              </a>
              <img css={watch} src={playBtn} alt="" />
            </div>
            <div>
              <a css={headerLinkRight} href="#1">
                Download Free Trial
              </a>
              <img css={load} src={downloadBtn} alt="" />
            </div>
          </div>
        </header>
        <div css={temps}>
          <img css={macBookTemp} src={macBook} alt="" />
          <img css={screenTemp} src={screen} alt="" />
        </div>
        <section css={asSeen}>
          <h2>As seen in</h2>
          <div css={asSeenProducts}>
            <img src={lifeHacker} alt="" />
            <img src={combinator} alt="" />
            <img src={productHunt} alt="" />
          </div>
        </section>
        <hr />
        <section>
          <h3> What our Users Say</h3>
          <p>
            As always never just take our words for it. Instead ask some of the
            many happy users who are being more productive with Ghostnote 2.
          </p>
          <div>
            <div>
              <img src="#1" alt="" />
              <p>
                @GhostnoteApp has completely changed how I capture meeting notes
                and track feedback on comps in Illustrator.
              </p>
              <a href="#1">jasoncarulli (@jasoncarulli)</a>
            </div>
            <div>
              <img src="#1" alt="" />
              <p>
                Hey! Super Pumped about the new Ghostnote App! I have had
                Ghostnote on my Mac since you guys started. Also wanted to ask
                if I could try your Beta or if its already ready then what can I
                do to get the new Ghostmote 2? Thanks so much and very pumped to
                see it! Cheers!
              </p>
              <a href="#1">William WES Thompson (@WesThompson)</a>
            </div>
            <div>
              <img src="#1" alt="" />
              <p>
                @GhostnoteApp Ghost Note is a note taking game changer. Once I
                can view all my notes, it will be revolutionary with
                documentation & coding.
              </p>
              <a href="#1">Tyler Zika (@tylerzika)</a>
            </div>
            <div>
              <img src="#1" alt="" />
              <p>
                Just installed @GhostnoteApp - brilliant concept to have context
                based note taking OS wide
              </p>
              <a href="#1">Peter Binderup (@pbinderup)</a>
            </div>
            <div>
              <img src="#1" alt="" />
              <p>
                @GhostnoteApp Do you really need another note/todo app? You do
                if you don't have @Ghostnoteapp an OS X Contextual App 4
                Notes&Todos
              </p>
              <a href="#1">Christopher (@communicating)</a>
            </div>
            <div>
              <img src="#1" alt="" />
              <p>
                Ok, I definitely don't need another notes app ... but
                @ghostnoteapp looks like it's just what I've been missing:
              </p>
              <a href="#1">Matthew Guay (@maguay)</a>
            </div>
          </div>
        </section>
      </section>
      <section>
        <h3>Subscribe to Ghostnote News</h3>
        <p>
          A monthly newsletter with the latest. Get productivity tips and learn
          about upcoming features. Ghostnote news keep you up to date.
        </p>
        <div>
          <input type="email" placeholder="Subscribe to our mailing list" />
          <button>Subscribe</button>
        </div>
      </section>
      <section>
        <div>
          <img src="#1" alt="" />
          <img src="#1" alt="" />
        </div>
        <div>
          <h3>Try Ghotnote</h3>
          <p>
            Join the thousands of others who are right now experiencing the
            power of contextual notes. 14 days free trial.
          </p>
          <a href="#1">Download Free Trial</a>
        </div>
      </section>
      <footer>
        <p>Privacy Policy | GDRP | Made in Brooklyn</p>
        <img src="#1" alt="" />
        <p>Copyright © 2015-2019 Ghostnote. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
