export type ProjectType = "qa" | "si";

type Project = {
  id: string;
  type: ProjectType;
  title: string;
  image: string;
  description?: string;
  about: { [key: string]: string | string[] };
};

type ProjectStoreShape = {
  projects: Project[];
};

export const useProjectStore = defineStore("project", {
  state: (): ProjectStoreShape => ({
    projects: [
      {
        id: "01",
        type: "si",
        title: "인터넷물류 직거래장터시범 서비스 구축",
        image: "1.jpg",
        description:
          "인터넷 물류 직거래장터 서비스는 화주와 물류 업체 간 등록, 상호검색, 매칭, 역경매, 계약 및 결제기능을 온라인으로 구현하여 등록된 창고정보에 대해서 분류별 조회를 통한 상호 간 경쟁을 유도하고 계약 주체 상호 간 거래 조건을 온라인을 통해 확인 후, 공인인증서 기반의 계약 체계를 지원토록 하고 있습니다.",
        about: {
          발주처: "국토교통부",
          OS: "UNIX",
          개발기술: "WebToB/JEUS/ORACLE",
          사용기술: "전자정부프레임워크/JAVA/JSP",
          기타: [
            "3,000여 창고업체 정보 수집 및 DB 구축",
            "견적, 역경매, 계약서 작성 지원",
            "물류직거래장터 OPEN API",
            "전자서명/결제/전자세금계산서 솔루션도입",
            "웹앱 제작 및 DAUM MAP 적용",
          ],
        },
      },
      {
        id: "02",
        type: "si",
        title: "규장각 기록유산 시스템구축",
        image: "2.jpg",
        description:
          "각 기관별로 분산되어 있는 의궤 메타정보를 하나의 사이트에서 검색할 수 있는 의궤종합포털 서비스를 구축하고 규장각 홈페이지의 고도화를 수행해 중요기록 문화유산에 대한 접근성을 향상시키고, 중요기록유산 DB 열람 및 관리에 대한 기반을 구축하였으며 구축된 이미지 자료에 대해 웹 표준을 준수하는 이미지 뷰어를 개발했습니다",
        about: {
          발주처: "서울대학교 규장각",
          OS: "CentOS",
          개발기술: "WebToB/JEUS/jetty/ORACLE",
          사용기술: "전자정부프레임워크/JAVA/JSP",
          기타: [
            "의궤/승정원일기/동궁일기 등 DB 정비 및 구축",
            "원문열람 표준 플랫폼 설계",
            "CMS 구축 및 이미지뷰어 개발",
            "규장각 모바일 서비스 지원",
            "타일맵기반의 이미지서버 구축",
          ],
        },
      },
      {
        id: "03",
        type: "si",
        title: "KT 모카월렛 1차 고도화 개발 및 운영 유지보수",
        image: "3.jpg",
        description:
          "O2O 마케팅 경쟁력 강화를 통한 고객/가맹점주 만족도 제고 및 클립파트너와의 효과적인 시너지 제공을 위해 KTH와 Geofen-cing(지오펜싱) 기술을 적용한 O2O 서비스로 KT 클립(CLiP) 사업을 공동 추진하였으며 이 후 고객에게 안정적인 서비스를 제공해 CLiP 서비스의 만족도 향상을 목표로 통합환경에서 CLiP 앱(안드로이드, iOS), 서버, 어드민 등 시스템에 대한 유지보수 업무 수행을 총괄했습니다.",
        about: {
          발주처: "KTH",
          OS: "CentOS",
          개발기술: "Apache/Tomcat/PPAS",
          사용기술: "Spring/JAVA/JSP",
          기타: [
            "Geofencing 솔루션 구축",
            "모카월렛 웹사이트 및 App 운영 지원",
            "Geofencing 용 다양한 API",
            "CLiP 검색을 위한 다양한 API",
            "Geofencing 플랫폼 운영 및 voc 응대",
          ],
        },
      },
      {
        id: "04",
        type: "si",
        title: "동북아역사넷 웹사이트 고도화 사업",
        image: "4.jpg",
        description:
          "동북아역사자료 콘텐츠 구축의 기반으로 원문데이터베이스를 정비, 구축하고 재단의 각종 수집․생산자료, 용역결과보고서, 내부자료, 사진자료 등을 데이터  베이스로 구축했으며 이를 연구 및 정책개발 자료로 활용토록 지원해 역사현안에 대한 각종 자료 정보화를 통한 대국민 서비스 강화를 목적으로 동북아역사넷 사이트를 구축 및 운영 지원했습니다.",
        about: {
          발주처: "동북아역사재단",
          OS: "CentOS/Windows Server 2008",
          개발기술: "Apache/Tomcat/MS-SQL 2008",
          사용기술: "전자정부프레임워크/JAVA/JSP",
          기타: [
            "원문자료의 XML 기반 구축 및 DB 구축",
            "교육콘텐츠 구축 및 원문텍스트와 이미지 연계",
            "동북아역사넷 사이트 리뉴얼",
            "구글맵 및 구글어스 연동",
            "Kristal 검색엔진 적용",
          ],
        },
      },
      {
        id: "05",
        type: "si",
        title: "데이터스토어 시스템 개선 및 유지보수 용역",
        image: "5.jpg",
        description:
          "데이터스토어 온라인 유통 구조 개선을 위한 거래절차 기능 향상 및 유통 기반 지원 서비스 개발 그리고 이를 통한 안정적인 운영을 목표로 데이터스토어와 DB스타즈 사이트를 구축, 운영 중이며 누구나 쉽게 데이터(FILE  DATA, OPEN API)를 온라인으로 판매하거나 구매할 수 있는 서비스를 제공토록 운영 지원하고 있습니다.",
        about: {
          발주처: "데이터진흥원",
          OS: "CentOS",
          개발기술: "Apache/Tomcat/Altibase/MySQL",
          사용기술: "Spring/JAVA/JSP",
          기타: [
            "데이터스토어, DB스타즈 사이트 리뉴얼 운영",
            "구글 맞춤검색을 통한 통합검색",
            "OPEN API 생성/등록 지원",
            "API 유통플랫폼 적용 및 운영",
            "웹앱 제작 및 결제시스템 구축",
          ],
        },
      },
      {
        id: "06",
        type: "si",
        title: "KT 미디어허브 옥외광고 분석서비스 개발 용역",
        image: "6.jpg",
        description:
          "KT media hub 내 보유 광고 매체 및 외부 연계 데이터의 주요 패턴을 추출하고 결과를 분석 및 시각화하는 서비스를 구축하여 광고 효과를 높이고 객관적인 분석이 가능한 서비스를 구축했습니다. 옥외 매체 효과 예측/분석을 위해 통합 광고플랫폼 내에 실시간 데이터가 반영된 GCRM 기반 공간분석 솔루션을 적용했습니다.",
        about: {
          발주처: "KTH",
          OS: "CentOS",
          개발기술: "Apache/Tomcat/GeoServer/MySQL",
          사용기술: "전자정부프레임워크/JAVA/JSP",
          기타: [
            "광고분석 기본 플랫폼 개발",
            "옥외광고 매체지도 데이터 개발",
            "KT CDR 데이터 연동을 통한 유동인구 연계",
            "지역별 OTV 광고 & VOD 집행 데이터 연동",
            "사용자 행동 데이터(신용카드 데이터) 융합",
          ],
        },
      },
      {
        id: "07",
        type: "si",
        title: "KT Clip 2차 고도화 사업",
        image: "7.jpg",
        description:
          "클립서비스 업무담당자에게 마케팅 활용 목적으로 제공하기 위한 서비스에 대한 필요성으로 클립서비스 관리자 사이트 개선을 추진하였으며 `15년도 모카월렛서비스가 CLiP서비스로 전환되면서 CLiP서비스 위주의 가입/이  용 통계현황 등 다양한 통계기능 개발에 대한 필요성으로 통계 사이트의 고도화를 추진했습니다.",
        about: {
          발주처: "KTH",
          OS: "CentOS",
          개발기술: "Apache/Tomcat/PPAS/MS-SQ",
          사용기술: "Spring/JAVA/JSP",
          기타: [
            "CLiP 앱 로그 수집/분석 서버 구축",
            "관리자 페이지 고도화",
            "신통계 시스템 구축",
            "배치(스케쥴링)서버 구축/운영",
            "서버간 이기종 데이터 이관",
          ],
        },
      },
      {
        id: "08",
        type: "si",
        title: "KT 매체세일즈포털 (AD CORE) 구축 및 통합 운영",
        image: "8.jpg",
        description:
          "KT 매체세일즈포털 서비스의 안정적인 운영, 매체세일즈 기반의 추가 기능 개발/적용 및 KT 광고 사업의 경쟁력 강화를 목표로 데이터 업데이트를 통한 현행화 및 서버의 안정적 운영(OP 업무)과 고도화 추진 항목에 따른 개발 수행 (SM 업무) 업무를 지속적으로 진행하고 있습니다.",
        about: {
          발주처: "KTH",
          OS: "CentOS",
          개발기술: "Apache/Tomcat/GeoServer/MySQL",
          사용기술: "전자정부프레임워크/JAVA/JSP",
          기타: [
            "bc카드 1,200대 상권 및 지역에 대한 타겟분석",
            "OTV시청률분석을 통한 지역 소비성향 분석",
            "Report Designer를 이용한 레포팅 지원",
            "KTH GeoTrend 데이터 적용",
          ],
        },
      },
      {
        id: "09",
        type: "si",
        title: "K-ICT 빅데이터 센터 기초 융합데이터",
        image: "9.jpg",
        description:
          "창업자 및 중소벤처의 빅데이터 산업 진입에 활용하기 위한 융합 데이터 제작․제공서비스 사업에 참여를 했으며 제작, 가공된 융합 빅데이터는 중소기  업이 활용 할 수 있도록 K-ICT 빅데이터 센터 인프라를 통하여 제공하고 있습니다. 또한, 데이터스토어 사이트에도 무료 데이터 상품으로 등록되어있습니다.",
        about: {
          발주처: "정보화진흥원",
          OS: "-",
          개발기술: "Txt/excel",
          사용기술: "주소정제/좌표부여 등 가공",
          기타: [
            "인구관련(5종) / 사업체관련(6종) / 교통관련  (2종) / 공동주택관련(2종) / 교육관련(3종) / 기  타(9종) 총 27종의 데이터 제작, 납품",
          ],
        },
      },
      {
        id: "10",
        type: "si",
        title: "국립공원관리공단 생태탐방연수원 통합홈페이지 구축",
        image: "8.jpg",
        description:
          "홈페이지를 통해 국립공원관리공단 생태탐방연수원의 예약관리를 효율적으로 운영하고 사용자가 좀 더 쉽게 정보를 얻고 예약할 수 있는 시스템을 구축했습니다. 또한, 지속해서 추가되는 연수원별 홈페이지를 통합관리 할 수 있는 통합 홈페이지 및 관리자 페이지를 구축하여 국립공원 생태탐방 연수원의 정보들을 체계적으로 관리할 수 있는 기반을 마련했습니다.",
        about: {
          발주처: "국립공원관리공단",
          OS: "CentOS",
          개발기술: "Apache/Tomcat/ORACLE",
          사용기술: "Spring/JAVA/JSP",
          기타: [
            "관리자시스템 고도화",
            "프로그램/대관 예약 시스템 구축",
            "통계 기능 구축",
            "생태탐방 연수원 통합 홈 구축",
            "등록 콘텐츠에 대한 디자인 지원",
          ],
        },
      },
      {
        id: "11",
        type: "si",
        title: "서울형  지도태깅과 공간정보 플랫폼 활용 확산 사업",
        image: "11.jpg",
        description:
          "Rule 기반의 주소정제 엔진으로 주소체계 변경에 용이한 적용이 가능하고주소 데이터 표준화 및 행정구역 현행화, 최신 우편번호 부여, 구주소-새주소 변환, 주소 정제 오류 원인/결과 집계를 지원하는 솔루션으로 주소정제  를 수행했습니다. 또한, 구축 된 관리 시스템에 주소정제 Library를 탑재  해 실시간/대용량 주소 정제, Rule 테이블 관리 및 정제 결과 리포팅 페이지를 구축했습니다.",
        about: {
          발주처: "다울지오인포",
          OS: "Window Server 2008/AIX",
          개발기술: "IIS/WebLogic/ORACLE",
          사용기술: "Struts1/JAVA/JSP",
          기타: [
            "NEOaDD 주소정제솔루션 적용(GS인증 획득)",
            "주소정제관리툴 구현",
            "연계 OPEN API 구축",
            "사업수행에 맞춰 주소정제솔루션 커스터마이징",
          ],
        },
      },
      {
        id: "12",
        type: "si",
        title: "YES24 Shift Novel Service 웹사이트 구축",
        image: "12.jpg",
        description:
          "YES24의 Shift Novel Service 웹사이트 구축사업을 수행함에 있어 개발된 e연재(라이트노벨) UI를 기준으로 커스터마이징을 진행하며 수행하였습니다. 일본 관련 콘텐츠를 다른 디자인으로 보여주고 결제 정보(정산)를 따로 운영하기 위해 shift novel 사이트를 별도로 구축하는 사업입니다.",
        about: {
          발주처: "YES24",
          OS: "Window Server 2008",
          개발기술: "IIS/MS-SQL 2008",
          사용기술: "JAVA/ASP",
          기타: [
            "반응형 웹으로 시프트노벨 구축",
            "예스24 상품 연동 방식 개선",
            "CMS 고도화",
            "YES24 eBook 웹 뷰어 고도화",
          ],
        },
      },
      {
        id: "13",
        type: "si",
        title: "미래엔 디지털교과서 HTML5 콘텐츠 개발",
        image: "13.jpg",
        description:
          "고등음악, 고등사회, 중등정보 3종의 디지털교과서 콘텐츠를 개발 했습니다.",
        about: {
          발주처: "",
          OS: "",
          개발기술: "",
          사용기술: "",
          기타: ["", "", "", ""],
        },
      },
      {
        id: "14",
        type: "si",
        title: "최적위치타켓팅 솔루션 구축",
        image: "14.jpg",
        description:
          "KT가 보유한 통신데이터, 인구정보 등 다양한 Data Source를 통해 얻어지는 BigData 및 공간정보 분석기술을 활용하여 최적위치타겟팅 플랫폼을 구축하였으며 이를 통해 안전예방지수, 사용자 지정 가중치에 따른 기지국셀 순위 산정 및 표출을 제공하여 최적의 위치를 산정하고자 하는 다양한 분야에서 활용이 가능한 솔루션을 구축하였습니다.",
        about: {
          발주처: "KT",
          OS: "Cent OS",
          개발기술: "Apache/JBOSS/GeoServer",
          DB: "PPAS/PostGIS",
          사용기술: "Spring프레임워크/JAVA/JSP",
          기타: [
            "최적위치타겟팅 데이터 조회/활 용 기능 구현",
            "heatmap 기능, 기지국 폴리곤 표출 등의 시각화 기능 개발",
            "검색조건, 가중치조건에 따른 결과 산출 및 기지국 순위 표출",
            "기지국정보 데이터 생성 batch",
          ],
        },
      },
      {
        id: "15",
        type: "si",
        title: "최적위치타켓팅 솔루션 구축",
        image: "15.jpg",
        description:
          "디지털 성범죄 예방서비스 시각화 포털 개발의 일환으로 경찰청에서 사용할 수 있도록 안심맵 솔루션을 구축하였으며 해당 솔루션을 통해 연/월 선택에 따른 지하철 노선별, 출구별 유동인구 정보와 위험등급 정보를 일목요연하게 제공하여 지하철 성범죄 예방 및 개선을 위한 정책 수립에 도움이 될 수 있는 빅데이터 정보와 기능을 제공하고 있습니다.",
        about: {
          발주처: "KT",
          OS: "Cent OS",
          개발기술: "Apache/JBOSS/GeoServer",
          DB: "PPAS/PostGIS",
          사용기술: "Spring프레임워크/JAVA/JSP",
          기타: [
            "다양한 검색조건 지원",
            "선택 노선에 대한 역별 위험등급 표시 정보 팝업 제공",
            "검색결과 지하철 역사 및 출구 번호 폴리곤 표출 제공",
            "지하철 유동인구, 위험등급 데이터 제공",
          ],
        },
      },
      {
        id: "16",
        type: "si",
        title: "서울 원격수업 지원 플랫폼 유지보수 및 안정화",
        image: "16.jpg",
        description:
          "포스트 코로나 시대에 대비해 유연하고 안전한 원격교육 플랫폼의 필요성이 대두되고 있습니다. 이에 최신 ICT기술을 활용해 교수자와 학습자 간의 맞춤형 교육플랫폼 요구와 원격수업에 대한 필요에 맞춰 쌍방향 실시간 화상 수업, 비실시간 수업 지원 연계시스템 및 사이버 학급형 LMS 시스템을 구축하였습니다.",
        about: {
          발주처: "KT DS",
          OS: "Cent OS",
          개발기술: "Apache/JBOSS",
          DB: "Postgres",
          사용기술: "Spring/JAVA/JSP/Vue",
          기타: [
            "클라우드 기반의 유연하고 확장 가능한 원격수업 지원",
            "실시간 양방향 화상수업 시스템",
            "사용자 개설 용이한 참여형 강좌 시스템 제공",
            "출결 관리 등 사이버 학급형 LSM 시스템 제공",
          ],
        },
      },
      {
        id: "17",
        type: "si",
        title: "하이러닝 서비스 유지보수 및 안정화",
        image: "17.jpg",
        description:
          "최신 ICT 기술을 활용해 교수자와 학습자 간의 맞춤형 교육 플랫폼을 구축 하였습니다.학교 현장의 다양한 요구사항과 필요에 맞춰 교육용 AI 및 학습 관리 시스템 기반의 온라인 교수·학습 플랫폼을 제공합니다.유연하고 안전한 교육 플랫폼을 제공하여 학교 현장의 편의를 제공 합니다.",
        about: {
          발주처: "KT DS",
          OS: "Cent OS",
          개발기술: "Apache/JBOSS",
          DB: "Postgres",
          사용기술: "Spring/JAVA/JSP/Vue/Redis",
          기타: [
            "에듀테크 기반의 미래형 교육을 지원하는 통합 플랫폼",
            "학생 학업/진로.이수 등의 손쉬운 학급관리 지원 제공",
            "라이브학습도구, 소통툴, 자료 연동",
            "AI 기반의 맞춤형 진단과 콘텐츠 추천 및 학습을 제공",
          ],
        },
      },
      {
        id: "18",
        type: "qa",
        title: "테스트 케이스 관리 - Testlink",
        image: "18.jpg",
        description:
          "테스트 스위트, 케이스 구조화 및 버전별 관리로 변경된 명세에 따라 현행화 및 히스토리 관리에 용이 프로젝트, 플랫폼, 빌드별 케이스와 테스터 지정으로 테스트 계획을 체계적으로 관리 가능 상황별 보고서 추출 및 mantisBT와 연동으로 테스트와 동시에 이슈 리포팅",
        about: {
          발주처: "KT DS",
          사용툴: "Testlink",
          WEB: "Apache",
          DB: "MySQL",
          기타: [
            "오픈소스 툴 활용",
            "커스텀 및 프로젝트 요구도에 맞게 구조화 진행",
            "기존 명세 기반으로 현행화",
            "구글 드라이버로 파일 테스크 관리 후 링크 첨부하여 테스트 케이스별 명세 확인 가능",
          ],
        },
      },
      {
        id: "19",
        type: "qa",
        title: "MantisBT (Bug Tracking System)  ",
        image: "19.jpg",
        description:
          "사용자별 할당, 이슈노트, 타임라인 등의 기능으로 이슈 트랙킹 및 협력사와의 공동작업에 용이 프로젝트 성향에 맞춰 커스텀 필드로 기기, 심각도, 업데이트 일, 할당 팀 등 세부 내역 커스터 마이징 테스트 관리툴인 Testlink와 연동과 태그 기능으로 시스템별 이슈 취합 및 리그레이션 테스트에 용이하도록 설계",
        about: {
          발주처: "KT DS",
          OS: "MantisDB",
          개발기술: "Apache",
          DB: "MySQL",
          사용기술: "",
          기타: [
            "오픈소스 툴 활용",
            "학생 학업/진로.이수 등의 손쉬운 학급관리 지원 제공",
            "프로젝트 성향에 맞춰 커스터 마이징",
            "사용자 그룹별 필터 적용",
          ],
        },
      },
      {
        id: "20",
        type: "qa",
        title: "자동화 테스트",
        image: "20.jpg",
        description:
          "프로젝트 성향에 맞춰 PC별 병렬 실행 및 개별 실행 가능하도록 설계 테스트 스크립트, 환경(dev/live), 계정정보 등의 전환 및 변경이 쉽게 구조화하여 유지보수에 용이하도록 설계",
        about: {
          발주처: "KT DS",
          OS: "Python",
          개발기술:
            "Pytest, order, xdist, chromedriver, selenium, Webdriver, git, jenkins",
          Server: "Selenium-grid",
          기타: [
            "1개의 드라이버 당 일반, 시크릿 모드로 교사, 학생 로그인",
            "초, 중, 고 다른 계정 정보로 병렬 실행",
            "__inin__으로 test.py 넘버링별 자동 인식하게 하여 테스트 스크립트 유지보수 간편화",
            "테스트 종료 후 자동 리포트 생성",
          ],
        },
      },
    ],
  }),
  getters: {
    latest: (state) => (state.projects.length ? state.projects[0] : null),
    getLatest: (state) => (id: string) => {
      const shuffled = state.projects
        .filter((p) => p.id !== id)
        .sort(() => 0.5 - Math.random());

      return shuffled.length <= 5 ? shuffled : shuffled.slice(-5);
    },
    getProject: (state) => (id: string) =>
      state.projects.find((project) => project.id === id),
    getProjects: (state) => (type: string) =>
      state.projects.filter((project) => project.type === type),
    projectCount: (state) => state.projects.length,
  },
});
