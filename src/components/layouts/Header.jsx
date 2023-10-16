import { useState, useEffect } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // 컴포넌트가 마운트될 때 이벤트 리스너 추가
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={scrollY > 100 ? "active" : ""}>
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
            <a className="trigger" href="#none">
              전체 카테고리
            </a>
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
              <div className="mega-navi-item-wrap">
                <a href="#none">웹 개발</a>
                <a href="#none">프론트엔드</a>
                <a href="#none">백엔드</a>
                <a href="#none">모바일 앱 개발</a>
                <a href="#none">데이터베이스</a>
                <a href="#none">게임 개발</a>
                <a href="#none">자격증</a>
              </div>
            </div>
            <div className="mega-navi-item">
              <b>운동·건강</b>
              <div className="mega-navi-item-wrap">
                <a href="#none">요가</a>
                <a href="#none">필라테스</a>
                <a href="#none">발레</a>
                <a href="#none">스트레칭·자세 개선</a>
                <a href="#none">피트니스</a>
                <a href="#none">러닝·사이클</a>
              </div>
            </div>
            <div className="mega-navi-item">
              <b>학문·외국어</b>
              <div className="mega-navi-item-wrap">
                <a href="#none">영어</a>
                <a href="#none">중국어</a>
                <a href="#none">일본어</a>
                <a href="#none">독일어</a>
                <a href="#none">스페인어</a>
                <a href="#none">외국어 시험</a>
              </div>
            </div>
            <div className="mega-navi-item">
              <b>라이프스타일</b>
              <div className="mega-navi-item-wrap">
                <a href="#none">뷰티</a>
                <a href="#none">명상</a>
                <a href="#none">심리</a>
                <a href="#none">타로·사주·운세</a>
                <a href="#none">게임·e스포츠</a>
                <a href="#none">반려동물</a>
                <a href="#none">인문학</a>
              </div>
            </div>
            <div className="mega-navi-item">
              <b>창업·재태크</b>
              <div className="mega-navi-item-wrap">
                <a href="#none">국내 쇼핑몰</a>
                <a href="#none">해외 쇼핑몰</a>
                <a href="#none">블로그</a>
                <a href="#none">유튜브</a>
                <a href="#none">전자책·디지털파일</a>
                <a href="#none">쉐어하우스·숙박업</a>
                <a href="#none">요식업</a>
              </div>
            </div>
            <div className="mega-navi-item">
              <b>사진·영상</b>
              <div className="mega-navi-item-wrap">
                <a href="#none">유튜브</a>
                <a href="#none">디자인</a>
                <a href="#none">포토샵</a>
                <a href="#none">스마트폰</a>
                <a href="#none">사진촬영</a>
                <a href="#none">영상편집</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <div className="member-login-overlay">
        <div className="member-login">
          <div className="member-account">
            <h1 className="login-slogan">
              나를 성장시키는 배움,
              <br />
              <em>비욘드 인사이트</em>에서 시작하세요.
            </h1>
          </div>
          <div className="login-field">
            <div>
              <input type="email" placeholder="이메일" />
            </div>
            <div>
              <input type="password" placeholder="비밀번호" maxLength={12} />
              <i className="toggle-pw bi bi-eye-slash"></i>
            </div>
            <button className="btn-member-primary">로그인</button>
          </div>
          <div className="join-member">
            비욘드 인사이트가 처음이신가요? <a href="#none">간편 회원가입</a>
          </div>
          <div className="easy-login">
            <a href="#none" className="btn-easy-login kakao"></a>
            <a href="#none" className="btn-easy-login facebook"></a>
            <a href="#none" className="btn-easy-login apple"></a>
            <span className="or">또는</span>
            <a href="#none" className="btn-easy-login email"></a>
          </div>
          <p className="login-notice">
            처음 로그인하면 비욘드 인사이트의 이용약관 및 개인정보처리방침에
            동의한 것으로 간주합니다.
          </p>
          <button className="btn-modal-close">&times;</button>
        </div>
      </div>
    </>
  );
}
