function App() {
  return (
    <>
      <div className="container front">
        <header>
          <div className="header-inner">
            <div className="logo-search">
              <div className="logo">
                <a href="#none">
                  <img src="/src/assets/img/logo-beyond-insight.png" alt="" />
                </a>
              </div>
              <div className="search">
                <input type="text" placeholder="어떤 강의를 찾으시나요?" />
                <i className="bi bi-search"></i>
              </div>
              <div className="login-register-buttons">
                <button className="btn-login">로그인</button>
                <button className="btn-register">회원가입</button>
              </div>
              <div className="user-alarm">
                <span className="cart">
                  <i className="bi bi-cart"></i>
                  <em data-count="2"></em>
                </span>
                <span className="alarm">
                  <i className="bi bi-bell"></i>
                  <em data-count="2"></em>
                </span>
                <span className="avatar">
                  <img src="/src/assets/img/mentor-avatar-21.jpg" alt="" />
                </span>
              </div>
            </div>
            <div className="gnb">
              <a href="#none">전체 카테고리</a>
              <a href="#none">베스트 클래스</a>
              <a href="#none">이벤트</a>
              <a href="#none">새로운 클래스</a>
              <a href="#none">신규 회원 혜택</a>
              <a href="#none">시그니쳐 클래스</a>
            </div>
          </div>
          <div className="mega-navi">
            <div className="mega-navi-inner">
              <div className="mega-navi-item">
                <b>개발·프로그래밍</b>
                <a href="#none">웹 개발</a>
                <a href="#none">프론트엔드</a>
                <a href="#none">백엔드</a>
                <a href="#none">모바일 앱 개발</a>
                <a href="#none">데이터베이스</a>
                <a href="#none">게임 개발</a>
                <a href="#none">자격증</a>
              </div>
              <div className="mega-navi-item">
                <b>운동·건강</b>
                <a href="#none">요가</a>
                <a href="#none">필라테스</a>
                <a href="#none">발레</a>
                <a href="#none">스트레칭·자세 개선</a>
                <a href="#none">피트니스</a>
                <a href="#none">러닝·사이클</a>
              </div>
              <div className="mega-navi-item">
                <b>학문·외국어</b>
                <a href="#none">영어</a>
                <a href="#none">중국어</a>
                <a href="#none">일본어</a>
                <a href="#none">독일어</a>
                <a href="#none">스페인어</a>
                <a href="#none">외국어 시험</a>
              </div>
              <div className="mega-navi-item">
                <b>라이프스타일</b>
                <a href="#none">뷰티</a>
                <a href="#none">명상</a>
                <a href="#none">심리</a>
                <a href="#none">타로·사주·운세</a>
                <a href="#none">게임·e스포츠</a>
                <a href="#none">반려동물</a>
                <a href="#none">인문학</a>
              </div>
              <div className="mega-navi-item">
                <b>창업·재태크</b>
                <a href="#none">국내 쇼핑몰</a>
                <a href="#none">해외 쇼핑몰</a>
                <a href="#none">블로그</a>
                <a href="#none">유튜브</a>
                <a href="#none">전자책·디지털파일</a>
                <a href="#none">쉐어하우스·숙박업</a>
                <a href="#none"></a>
                <a href="#none">요식업</a>
              </div>
              <div className="mega-navi-item">
                <b>사진·영상</b>
                <a href="#none">유튜브</a>
                <a href="#none">디자인</a>
                <a href="#none">포토샵</a>
                <a href="#none">스마트폰</a>
                <a href="#none">사진촬영</a>
                <a href="#none">영상편집</a>
              </div>
            </div>
          </div>
        </header>
        <section className="front-slider">
          <div className="front-slider-inner"></div>
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
