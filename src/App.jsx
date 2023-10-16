import { SimpleSlider } from './SimpleSlider';
import Header from './components/layouts/Header';

function App() {
  return (
    <>
      <div className="container front">
        {/* Header */}
        <Header />
        {/* Section : Front Slider */}
        <section className="front-slider">
          <div className="front-slider-items">
            <SimpleSlider>
              <div className="front-slider-item first">
                <div className="front-slider-item-wrap">
                  <div className="desc">
                    <b>EVENT</b>
                    <h1>
                      11월 신규회원 할인혜택!
                      <br />
                      무료 클래스부터 얼리버드 할인까지
                    </h1>
                    <span>2022.11.1~11.30</span>
                  </div>
                  <div className="pic">
                    <img src="/src/assets/img/ct-front-01.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="front-slider-item second">
                <div className="front-slider-item-wrap">
                  <div className="desc">
                    <b>추천 학습 로드맵</b>
                    <h1>
                      웹 퍼블리싱 입문부터 중상급까지
                      <br />
                      코딩웍스 퍼블리셔 취업 로드맵
                    </h1>
                  </div>
                  <div className="pic">
                    <img src="/src/assets/img/ct-front-02.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="front-slider-item third">
                <div className="front-slider-item-wrap">
                  <div className="desc">
                    <b>A to Z</b>
                    <h1>
                      누구나 쉽게 이해하는 웹개발
                      <br />
                      수강생에게 인정받은 검증된 강의들
                    </h1>
                    <span>2022.11.1~11.30</span>
                  </div>
                  <div className="pic">
                    <img src="/src/assets/img/ct-front-03.png" alt="" />
                  </div>
                </div>
              </div>
            </SimpleSlider>
          </div>
        </section>
        <section className="category-shortcut">
          <div className="category-shortcut-inner"></div>
        </section>
        <section className="focus-class">
          <div className="focus-class-inner"></div>
        </section>
        <section className="best-class">
          <div className="best-class-inner"></div>
        </section>
        <section className="early-bird">
          <div className="early-bird-inner"></div>
        </section>
        <section className="blog">
          <div className="blog-inner"></div>
        </section>
        <section className="slogan">
          <div className="slogan-inner"></div>
        </section>
        <section className="tip-tech">
          <div className="tip-tech"></div>
        </section>
        <footer>
          <div className="footer-inner"></div>
        </footer>
      </div>
    </>
  );
}

export default App;
