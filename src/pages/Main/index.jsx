import Header from "@/layouts/Header";
import { SimpleSlider } from "@/components/SimpleSlider";

function Main() {
  return (
    <>
      <Header />
      <div className="container front">
        <div className="header-include"></div>
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
                    <img src="../src/assets/img/ct-front-01.png" alt="" />
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
                    <img src="../src/assets/img/ct-front-02.png" />
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
                    <img src="../src/assets/img/ct-front-03.png" />
                  </div>
                </div>
              </div>
            </SimpleSlider>
          </div>
        </section>
        {/* Section : Category Shortcut */}
        <section className="category-shortcut">
          <div className="category-shortcut-inner">
            <div className="category-shortcut-items">
              <a
                href="/html/category-main.html"
                className="category-shortcut-item"
              >
                <em>
                  <i className="bi bi-calendar-event"></i>
                </em>
                <span>진행 중인 이벤트</span>
              </a>
              <a
                href="/html/category-main.html"
                className="category-shortcut-item"
              >
                <em>
                  <i className="bi bi-code"></i>
                </em>
                <span>개발·프로그래밍</span>
              </a>
              <a
                href="/html/category-main.html"
                className="category-shortcut-item"
              >
                <em>
                  <i className="bi bi-graph-up-arrow"></i>
                </em>
                <span>운동·건강</span>
              </a>
              <a
                href="/html/category-main.html"
                className="category-shortcut-item"
              >
                <em>
                  <i className="bi bi-spellcheck"></i>
                </em>
                <span>학문·외국어</span>
              </a>
              <a
                href="/html/category-main.html"
                className="category-shortcut-item"
              >
                <em>
                  <i className="bi bi-cup-hot"></i>
                </em>
                <span>라이프스타일</span>
              </a>
              <a
                href="/html/category-main.html"
                className="category-shortcut-item"
              >
                <em>
                  <i className="bi bi-three-dots"></i>
                </em>
                <span>더 보기</span>
              </a>
            </div>
          </div>
        </section>
        {/* Section : Focus Class */}
        <section className="focus-class">
          <div className="focus-class-inner">
            <div className="focus-class-content">
              <div className="front-header">
                <h2>강의 그 이상의 인사이트</h2>
                <a href="#one" className="btn-view-all">
                  전체 클래스 보기
                </a>
              </div>
              <div className="focus-class-items">
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/beyond-class-main-cover-01.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>
                      [2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드
                    </h4>
                    <div className="class-info">
                      코딩웍스 · 80강 · 16시간 30분
                    </div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/beyond-class-main-cover-02.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>아름답고 탄탄한 라인을 만들어주는 필라테스 클래스</h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/beyond-class-main-cover-03.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>외국인과 영어로 대화하는 노하우! 영어 발음 배우기</h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/beyond-class-main-cover-04.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>내 집 마련의 꿈을 꿈이 아닌 현실로 만드는 진짜 방법</h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/beyond-class-main-cover-05.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>
                      [2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드
                    </h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/beyond-class-main-cover-06.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>
                      [2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드
                    </h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/beyond-class-main-cover-07.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>
                      [2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드
                    </h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/beyond-class-main-cover-08.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>
                      [2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드
                    </h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="focus-class-content">
              <div className="front-header">
                <h2>기초부터 응용까지 한번에 OK</h2>
                <a href="#one" className="btn-view-all">
                  전체 클래스 보기
                </a>
              </div>
              <div className="focus-class-items">
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/basic-class-main-cover-01.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>월 500만원 매출을 내는 블로그 운영하는 노하우</h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/basic-class-main-cover-02.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>
                      눈으로 보는 색감을 그대로, 성공하는 촬영법과 감성 보정
                    </h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/basic-class-main-cover-03.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>
                      퍼블리셔를 위한 필수! 퍼블리셔 취업 진짜 실전 가이드
                    </h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/basic-class-main-cover-04.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>모바일 웹 퍼블리싱 포트폴리오 with Figma</h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/basic-class-main-cover-05.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>
                      [2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드
                    </h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/basic-class-main-cover-06.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>
                      [2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드
                    </h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/basic-class-main-cover-07.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>
                      [2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드
                    </h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div
                  className="focus-class-item"
                  onClick={() => (location.href = "/html/class-detail.html")}
                >
                  <div className="thum">
                    <img src="../src/assets/img/basic-class-main-cover-08.png" />
                    <span className="badge discount">30% 할인</span>
                  </div>
                  <div className="overview">
                    <h4>
                      [2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드
                    </h4>
                    <div className="class-info">코딩웍스·80강 ·16시간 30분</div>
                    <div className="class-price">
                      <span className="sale">30%</span>
                      <s className="price-prev">132,000원</s>
                      <span className="price-current">92,400원</span>
                    </div>
                    <div className="class-review">
                      <span className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="rating">4.9</span>
                      <span className="trainee">1,234명 수강</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section : Best Class */}
        <section className="best-class">
          <div className="best-class-inner">
            <div className="best-class-content">
              <div className="front-header">
                <h2>카테고리 별 베스트 클래스</h2>
                <a href="#none">전체 클래스 보기</a>
              </div>
              <div className="best-class-wrap">
                <div className="invite-banner">
                  <a href="#none">
                    <img src="../src/assets/img/banner-invitation.png" alt="" />
                  </a>
                </div>
                <div className="invite-banner-tablet">
                  <a href="#none">
                    <img
                      src="../src/assets/img/banner-invitation-tablet.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="best-class-items-outer">
                  <div className="best-class-items">
                    <div
                      className="best-class-item"
                      onClick={() =>
                        (location.href = "/html/class-detail.html")
                      }
                    >
                      <div className="thum">
                        <img src="../src/assets/img/best-class-main-cover-01.png" />
                      </div>
                      <div className="overview">
                        <h4>
                          면접과 취업을 부르는 '퍼블리셔 개인 포트폴리오
                          홈페이지' 제작
                        </h4>
                        <div className="class-info">
                          코딩웍스·80강 ·16시간 30분
                        </div>
                        <div className="class-price">
                          <span className="sale">30%</span>
                          <s className="price-prev">132,000원</s>
                          <span className="price-current">92,400원</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="best-class-item"
                      onClick={() =>
                        (location.href = "/html/class-detail.html")
                      }
                    >
                      <div className="thum">
                        <img src="../src/assets/img/best-class-main-cover-02.png" />
                      </div>
                      <div className="overview">
                        <h4>HTML+CSS+JS 포트폴리오 실전 퍼블리싱(시즌2)</h4>
                        <div className="class-info">
                          코딩웍스·80강 ·16시간 30분
                        </div>
                        <div className="class-price">
                          <span className="sale">30%</span>
                          <s className="price-prev">132,000원</s>
                          <span className="price-current">92,400원</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="best-class-items">
                    <div
                      className="best-class-item"
                      onClick={() =>
                        (location.href = "/html/class-detail.html")
                      }
                    >
                      <div className="thum">
                        <img src="../src/assets/img/best-class-main-cover-03.png" />
                      </div>
                      <div className="overview">
                        <h4>
                          SCSS(SASS) FLEX GRID 핵심이론(PDF) 교재 및 활용예제
                        </h4>
                        <div className="class-info">
                          코딩웍스·80강 ·16시간 30분
                        </div>
                        <div className="class-price">
                          <span className="sale">30%</span>
                          <s className="price-prev">132,000원</s>
                          <span className="price-current">92,400원</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="best-class-item"
                      onClick={() =>
                        (location.href = "/html/class-detail.html")
                      }
                    >
                      <div className="thum">
                        <img src="../src/assets/img/best-class-main-cover-04.png" />
                      </div>
                      <div className="overview">
                        <h4>SCSS(SASS)+GRID+FLEX 실전 포트폴리오 퍼블리싱</h4>
                        <div className="class-info">
                          코딩웍스·80강 ·16시간 30분
                        </div>
                        <div className="class-price">
                          <span className="sale">30%</span>
                          <s className="price-prev">132,000원</s>
                          <span className="price-current">92,400원</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="best-class-items">
                    <div
                      className="best-class-item"
                      onClick={() =>
                        (location.href = "/html/class-detail.html")
                      }
                    >
                      <div className="thum">
                        <img src="../src/assets/img/best-class-main-cover-05.png" />
                      </div>
                      <div className="overview">
                        <h4>중상급 퍼블리싱을 위한 CSS3의 모든 것</h4>
                        <div className="class-info">
                          코딩웍스·80강 ·16시간 30분
                        </div>
                        <div className="class-price">
                          <span className="sale">30%</span>
                          <s className="price-prev">132,000원</s>
                          <span className="price-current">92,400원</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="best-class-item"
                      onClick={() =>
                        (location.href = "/html/class-detail.html")
                      }
                    >
                      <div className="thum">
                        <img src="../src/assets/img/best-class-main-cover-06.png" />
                      </div>
                      <div className="overview">
                        <h4>최고의 프론트엔드 CSS Frameworks, UIkit</h4>
                        <div className="class-info">
                          코딩웍스·80강 ·16시간 30분
                        </div>
                        <div className="class-price">
                          <span className="sale">30%</span>
                          <s className="price-prev">132,000원</s>
                          <span className="price-current">92,400원</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section : Early Bird */}
        <section className="early-bird">
          <div className="early-bird-inner">
            <div className="early-bird-content">
              <div className="coundown-wrap">
                {/* The Final Countdown  */}
                <div id="early-bird-countdown"></div>
                {/* The Final Countdown */}
                <span className="early-bird-info">
                  조기인원 마감시 이벤트가 종료됩니다.
                </span>
              </div>
              <div className="early-bird-banner">
                <div className="banner-about">
                  <h1>
                    얼리버드~ 왔어요
                    <span>얼리버드 선착순 할인 이벤트, 신규강의 30% 할인</span>
                  </h1>
                  <h2 className="hash-tag">#빅찬스 #세일 #30%</h2>
                </div>
                <div className="banner-thum">
                  <img
                    src="../src/assets/img/banner-early-bird-01.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section : Blog */}
        <section className="blog">
          <div className="blog-inner">
            <div className="blog-content">
              <div className="front-header">
                <h2>Beyond Insight, 블로그 읽어보기</h2>
                <a href="#none" className="btn-view-all">
                  전체 보기
                </a>
              </div>
              <div className="blog-items">
                <div className="blog-item">
                  <div className="thum">
                    <img src="../src/assets/img/blog-cover-01.png" alt="" />
                  </div>
                  <div className="desc">
                    <span className="blog-sort">Web Publishing</span>
                    <div className="blog-outline">
                      <h4>
                        퍼블리싱의 모든 것! 인라인요소, 블록요소, 인라인블록
                      </h4>
                      <p>
                        퍼블리싱의 모든 것이라고 말해도 과언이 아닌 HTML
                        인라인요소, 블록요소, 인라인블록의 특징을 보기 좋게 정리
                      </p>
                    </div>
                    <div className="blog-writer">
                      <div className="writer-avatar">
                        <img
                          src="../src/assets/img/mentor-avatar-01.jpg"
                          alt=""
                        />
                      </div>
                      <div className="writer-info">
                        <b>비와우산</b>
                        <div className="date-comment">
                          <span>
                            <i className="bi bi-calendar"></i> May 24
                          </span>
                          <span>
                            <i className="bi bi-chat"></i> 4 comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="thum">
                    <img src="../src/assets/img/blog-cover-02.png" alt="" />
                  </div>
                  <div className="desc">
                    <span className="blog-sort">Web Publishing</span>
                    <div className="blog-outline">
                      <h4>레이아웃 제작 실력을 높이는방법 Mondrian Layout</h4>
                      <p>
                        레이아웃 제작 실력을 향상시키기 위해 각자의 방법이 있을
                        수 있고, 일반적인 방법이 있을 수 있고, 경험이 많은
                        사람들이
                      </p>
                    </div>
                    <div className="blog-writer">
                      <div className="writer-avatar">
                        <img
                          src="../src/assets/img/mentor-avatar-02.jpg"
                          alt=""
                        />
                      </div>
                      <div className="writer-info">
                        <span>비와우산</span>
                        <div className="date-comment">
                          <span>
                            <i className="bi bi-calendar"></i> May 24
                          </span>
                          <span>
                            <i className="bi bi-chat"></i> 4 comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="thum">
                    <img src="../src/assets/img/blog-cover-03.png" alt="" />
                  </div>
                  <div className="desc">
                    <span className="blog-sort">Web Publishing</span>
                    <div className="blog-outline">
                      <h4>예쁜게 찌그러트리는 CSS Border Radius Generator</h4>
                      <p>
                        더블 보더 레디어스 애니메이션을 만들 때 보더레이어스를
                        중복해서 사용하면 다양한 모양의 박스를 만들 수 있습니다.
                      </p>
                    </div>
                    <div className="blog-writer">
                      <div className="writer-avatar">
                        <img
                          src="../src/assets/img/mentor-avatar-03.jpg"
                          alt=""
                        />
                      </div>
                      <div className="writer-info">
                        <span>비와우산</span>
                        <div className="date-comment">
                          <span>
                            <i className="bi bi-calendar"></i> May 24
                          </span>
                          <span>
                            <i className="bi bi-chat"></i> 4 comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section : Slogan */}
        <section className="slogan">
          <div className="slogan-inner">
            <div className="slogan-content">
              <h1>비욘드 인사이트 온라인 강의 플랫폼</h1>
              <span>
                <em>346,467명</em>의 수강생과 <em>3,215개 강의</em>가 비욘드
                인사이트를 통해 배움을 즐겁게 만들고 있습니다.
              </span>
            </div>
          </div>
        </section>
        {/* Section : Tip & Tech */}
        <section className="tip-tech">
          <div className="tip-tech-inner">
            <div className="tip-tech-content">
              <div className="front-header">
                <h2>비욘트 인사이트 팁 & 테크</h2>
                <a href="#none">전체 보기</a>
              </div>
              <div className="tip-tech-wrap">
                <div className="tip-tech-items">
                  <div className="tip-tech-item">
                    <div className="tip-tech-info">
                      <span className="tip-tech-sort">필수 유틸리티</span>
                      <h3>
                        파일 관리을 위한 필수 유틸리티! 멀티 윈도우 탐색기 Q-Dir
                      </h3>
                      <p>
                        일반적인 윈도우 사용자라면 굳이 멀티 윈도우 탐색기가
                        필요는 없습니다. 필요한 파일을 열기 위해서 윈도우 탐색기
                        열고 찾아가면 됩니다. 하지만 디자이너, 퍼블리셔
                      </p>
                    </div>
                    <div className="thum">
                      <img src="../src/assets/img/tip-tech-cover-01.jpg" />
                    </div>
                  </div>
                  <div className="tip-tech-item">
                    <div className="tip-tech-info">
                      <span className="tip-tech-sort">작업 생산성</span>
                      <h3>비주얼 스튜디오 코드 캡쳐 익스텐션, CodeSnap</h3>
                      <p>
                        비주얼 스튜디오 코드 익스텐션 중에서 코드캡쳐를 하는
                        CodeSnap을 소개합니다. 일반적인 캡쳐도구를 사용하면
                        크기를 맞추는게 번거롭습니다. 특히 코드가 화면을
                        위아래로 넘을 경우 코드캡쳐가
                      </p>
                    </div>
                    <div className="thum">
                      <img src="../src/assets/img/tip-tech-cover-02.jpg" />
                    </div>
                  </div>
                </div>
                <div className="tip-tech-items">
                  <div className="tip-tech-item">
                    <div className="tip-tech-info">
                      <span className="tip-tech-sort">지식공유자 인터뷰</span>
                      <h3>
                        퍼블리셔 취업·이직을 위한 코딩웍스의 프론트엔드 강의
                      </h3>
                      <p>
                        퍼블리셔 취업을 위한 진짜 가이드 전자책(PDF)으로
                        효율적인 퍼블리싱 학습방법, 좋은 퍼블리싱 강의 잘
                        가르치는 퍼블리싱 강사 고르는 안목, 신입이지만
                        경력자처럼 퍼블리싱하는 요령
                      </p>
                    </div>
                    <div className="thum">
                      <img src="../src/assets/img/tip-tech-cover-03.jpg" />
                    </div>
                  </div>
                  <div className="tip-tech-item">
                    <div className="tip-tech-info">
                      <span className="tip-tech-sort">프로그램 관련</span>
                      <h3>디자인의 약점을 보완해 줄 히든카드~ 미리캔버스</h3>
                      <p>
                        퍼블리셔에게 디자인 일이 생기면 좀 부담스러운게
                        사실이죠. 한다고 해도 시간 대비 퀄리티가 마음에 들지
                        않는 경우가 많아서요. 포토샵 디자인도 잘하는
                        퍼블리셔라면 좋겠지만 여러가지를 모
                      </p>
                    </div>
                    <div className="thum">
                      <img src="../src/assets/img/tip-tech-cover-04.jpg" />
                    </div>
                  </div>
                </div>
                <div className="tip-tech-items">
                  <div className="tip-tech-item">
                    <div className="tip-tech-info">
                      <span className="tip-tech-sort">작업 생산성</span>
                      <h3>비주얼 스튜디오 코드에서 빈 줄 없애기</h3>
                      <p>
                        비주얼 스튜디오 코드에서 [정규식 찾아 바꾸기]라는
                        방법으로 완벽하게 빈 줄을 해결할 수 있습니다. 제작자가
                        의도한 빈 줄은 유지하고 표현식에 따라 생긴 의도하지 않은
                        빈 줄은 삭제하는 방법입니다.
                      </p>
                    </div>
                    <div className="thum">
                      <img src="../src/assets/img/tip-tech-cover-05.jpg" />
                    </div>
                  </div>
                  <div className="tip-tech-item">
                    <div className="tip-tech-info">
                      <span className="tip-tech-sort">IT 소식</span>
                      <h3>2022년 6월 15일 Internet Explorer 11 공식 종료</h3>
                      <p>
                        마이크로소프트에서 2022년 6월 15일에 Explorer 11 지원
                        종료한다고 공식적으로 발표했습니다. 작년에 기사를 찾아
                        봤을 때는 공식적으로 종료를 2021년 01월 27일이라고
                        나왔는데 공식 발표가
                      </p>
                    </div>
                    <div className="thum">
                      <img src="../src/assets/img/tip-tech-cover-06.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <a href="#none" className="btn-tip-tech">
                Tip & Tech 기사 더 보기
              </a>
            </div>
          </div>
        </section>

        <div className="footer-include"></div>
      </div>

      {/* <div className="front-event-banner">
    <div className="event-banner-item mentor-hiring">
      <a href="#none"><img src="../src/assets/img/event-banner-mentor.png" alt=""/></a>
    </div>
    <div className="event-banner-item new-year">
      <a href="#none"><img src="../src/assets/img/event-banner-new-year.png" alt=""/></a>
    </div>
    <div className="close-buttons">
      <a href="#none">오늘 그만 보기</a>
      <a href="#none">닫기</a>
    </div>
  </div> */}
    </>
  );
}

export default Main;
