type OfferType = {
  title: string;
  image?: string;
  description?: string;
};

type OfferStoreShape = {
  offers: OfferType[];
};

export const useOfferStore = defineStore("offer", {
  state: (): OfferStoreShape => ({
    offers: [
      {
        title: "인터넷물류 직거래장터시범 서비스 구축",
        image: "/completedProjectImgs/1.jpg",
      },
      {
        title: "규장각 기록유산 시스템구축",
        image: "/completedProjectImgs/2.jpg",
      },
      {
        title: "KT 모카월렛 1차 고도화 개발 및 운영 유지보수",
        image: "/completedProjectImgs/3.jpg",
      },
      {
        title: "동북아역사넷 웹사이트 고도화 사업",
        image: "/completedProjectImgs/4.jpg",
      },
    ],
  }),
});
