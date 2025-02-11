type ProjectTypes = {
  id: string;
  title: string;
  image: string;
  description?: string;
  about: { [key: string]: string | string[] };
};

type ProjectStoreShape = {
  projects: ProjectTypes[];
};

export const useProjectStore = defineStore("project", {
  state: (): ProjectStoreShape => ({
    projects: [
      {
        id: "01",
        title: "인터넷물류 직거래장터시범 서비스 구축",
        image: "/completedProjectImgs/1.jpg",
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
        title: "규장각 기록유산 시스템구축",
        image: "/completedProjectImgs/2.jpg",
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
        title: "KT 모카월렛 1차 고도화 개발 및 운영 유지보수",
        image: "/completedProjectImgs/3.jpg",
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
        title: "동북아역사넷 웹사이트 고도화 사업",
        image: "/completedProjectImgs/4.jpg",
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
    ],
  }),
  getters: {
    latest: (state) => (state.projects.length ? state.projects[0] : null),
    latest5: (state) =>
      state.projects.length <= 5 ? state.projects : state.projects.slice(-5),
    getProject: (state) => (id: string) =>
      state.projects.find((b) => b.id === id),
    projectCount: (state) => state.projects.length,
  },
  actions: {
    addProject(project: ProjectTypes) {
      this.projects.push(project);
    },
  },
});
