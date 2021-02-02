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
import Christopher from './img/Christopher.png';
import Jason from './img/jason.png';
import Matthew from './img/Matthew.jpg';
import Tyler from './img/Tyler.jpg';
import William from './img/William.jpg';
import color from './img/color.png';
import clipArt from './img/clipart.png';

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

const lineStyle = css`
  width: 160px;
  margin-top: 133px;
  margin-bottom: 133px;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    328deg,
    rgba(29, 197, 255, 1) 0%,
    rgba(16, 115, 255, 1) 100%
  );
`;

const costumerReviewSection = css`
  text-align: -webkit-center;

  h3 {
    margin: 0 auto;
    font-size: 32px;
    color: #f5f5f5;
    font-weight: 600;
    line-height: 70px;
    margin-bottom: 5px;
  }

  p {
  }

  img {
    height: 80px;
    border-radius: 50%;
    filter: grayscale(100%);
  }
`;

const costumerReviewIntro = css`
  font-size: 24px;
  color: #868689;
  font-weight: 250;
  line-height: 35px;
  width: 60%;
  margin-top: 14px;
`;

const costumerReviews = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  text-align: -webkit-center;
  margin-bottom: 100px;

  div {
    margin-top: 55px;
    width: 31%;
    font-size: 16px;
    line-height: 1.2;
    color: #f5f5f5;
    letter-spacing: 0.2px;
  }
  a {
    text-decoration: none;
    font-weight: 449;
    font-size: 14px;
    color: #00a2ff;
  }
`;

const blank = css`
  opacity: 0.1;
`;

const subscribe = css`
  background-image: linear-gradient(
    328deg,
    rgba(29, 197, 255, 1) 0%,
    rgba(16, 115, 255, 1) 100%
  );
  text-align: -webkit-center;
  padding-top: 70px;
  padding-bottom: 100px;

  h3 {
    margin: 0 auto;
    font-size: 32px;
    color: #f5f5f5;
    font-weight: 600;
    line-height: 70px;
    margin-bottom: 5px;
  }

  p {
    font-size: 24px;
    color: white;
    font-weight: 250;
    line-height: 35px;
    width: 60%;
    margin-top: 14px;
    width: 55%;
  }

  input {
    box-sizing: border-box;
    border-style: none;
    padding-top: 13px;
    padding-right: 430px;
    padding-bottom: 15px;
    padding-left: 20px;
    border-radius: 30px;
    margin-right: 20px;
    text-rendering: auto;
    cursor: text;
    margin-top: 25px;
    text-align: center;
  }

  button {
    padding: 12px 20px;
    border-style: none;
    box-sizing: border-box;
    background-color: #1173ff;
    border-radius: 30px;
    color: white;
  }
`;
const tryImges = css`
  padding-top: 125px;
  margin-bottom: 0px;
`;
const tryMe = css`
  display: flex;
  margin-bottom: -170px;
  h3 {
    margin: 0 auto;
    font-size: 32px;
    color: #f5f5f5;
    font-weight: 600;
    line-height: 70px;
  }
`;

const tryMacBook = css`
  margin-top: 30px;
  margin-left: 25px;
  height: 390px;
  width: 700px;
  margin-bottom: 0px;
`;
const tryScreen = css`
  height: 236px;
  width: 380px;
  position: relative;
  top: -372px;
  left: 185px;
  margin-bottom: 0px;
`;

const tryText = css`
  padding-top: 150px;
  margin-left: -50px;
  margin-bottom: 0px;

  p {
    font-size: 20px;
    color: #868689;
    font-weight: 250;
    line-height: 35px;
    margin-top: 14px;
    width: 60%;
  }
`;

const freeTrialBtn = css`
  padding: 15px 15px 15px 15px;
  border: 2px solid #00a2ff;
  border-radius: 9px;
  margin-top: 0px;
  width: 34%;
  margin-bottom: 0px;

  a {
    font-size: 18px;
    color: #00a2ff;
    text-decoration: none;
    font-weight: 500;
  }
`;

const download = css`
  position: relative;
  height: 23px;
  left: 200px;
  top: -39px;
  margin: 0;
  padding: 0;
`;

const footer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 75%;
  margin: 0 auto;
  border-top: 1px solid #333;
  color: #50575b;
  font-size: 14px;
  padding-top: 60px;
  padding-bottom: 60px;

  img {
    height: 20px;
    margin: 0 40px;
  }
`;

const clip = css`
  z-index: 100;
  position: fixed;
  box-sizing: border-box;
  right: 20px;
  bottom: 20px;
  height: 60px;
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
        <hr css={lineStyle} />
        <section css={costumerReviewSection}>
          <h3> What Our Users Say</h3>
          <p css={costumerReviewIntro}>
            As always never just take our words for it. Instead ask some of the
            many happy users who are being more productive with Ghostnote 2.
          </p>
          <div css={costumerReviews}>
            <div>
              <img src={Jason} alt="" />
              <p>
                @GhostnoteApp has completely changed how I capture meeting notes
                and track feedback on comps in Illustrator.
              </p>
              <a href="#1">jasoncarulli (@jasoncarulli)</a>
            </div>
            <div>
              <img src={William} alt="" />
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
              <img src={Tyler} alt="" />
              <p>
                @GhostnoteApp Ghost Note is a note taking game changer. Once I
                can view all my notes, it will be revolutionary with
                documentation & coding.
              </p>
              <a href="#1">Tyler Zika (@tylerzika)</a>
            </div>
            <div>
              <img css={blank} src={color} alt="" />
              <p>
                Just installed @GhostnoteApp - brilliant concept to have context
                based note taking OS wide
              </p>
              <a href="#1">Peter Binderup (@pbinderup)</a>
            </div>
            <div>
              <img src={Christopher} alt="" />
              <p>
                @GhostnoteApp Do you really need another note/todo app? You do
                if you don't have @Ghostnoteapp an OS X Contextual App 4
                Notes&Todos
              </p>
              <a href="#1">Christopher (@communicating)</a>
            </div>
            <div>
              <img src={Matthew} alt="" />
              <p>
                Ok, I definitely don't need another notes app ... but
                @ghostnoteapp looks like it's just what I've been missing:
              </p>
              <a href="#1">Matthew Guay (@maguay)</a>
            </div>
          </div>
        </section>
      </section>
      <section css={subscribe}>
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
      <section css={tryMe}>
        <div css={tryImges}>
          <img css={tryMacBook} src={macBook} alt="" />
          <img css={tryScreen} src={screen} alt="" />
        </div>
        <div css={tryText}>
          <h3>Try Ghostnote</h3>
          <p>
            Join the thousands of others who are right now experiencing the
            power of contextual notes. 14 days free trial.
          </p>
          <div css={freeTrialBtn}>
            <a href="#1">Download Free Trial</a>
          </div>
          <img css={download} src={downloadBtn} alt="" />
        </div>
      </section>
      <footer css={footer}>
        <p>Privacy Policy | GDRP | Made in Brooklyn</p>
        <img src={logo} alt="" />
        <p>Copyright © 2015-2019 Ghostnote. All rights reserved.</p>
      </footer>
      <img css={clip} src={clipArt} alt="" />
    </>
  );
}

export default App;
