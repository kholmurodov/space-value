<template>
  <div
    class="main-banner wow fadeIn"
    id="top"
    data-wow-duration="1s"
    data-wow-delay="0.5s"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div
                class="left-content header-text wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <h6>
                  {{ $t("hero.intro") }} <span>{{ $t("hero.company") }}</span>
                </h6>
                <h3>우리는 <em>Global IT</em> 기업의 <span>Leader</span>가</h3>
                <p>
                  되기 위한 회사 경영을 열성적으로 추진해 나갈 것이며, 정보화된
                  무한 경쟁 사회에서 고객 여러분의 신뢰를 바탕으로 품질보증,
                  납기 준수, 기술력 확보 등 21세기 디지털 경쟁에 이바지하고
                  있습니다.
                </p>
                <form id="search" action="#" method="GET">
                  <fieldset>
                    <input
                      type="address"
                      name="address"
                      class="email"
                      placeholder="Your website URL..."
                      autocomplete="on"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <button type="submit" class="main-button">
                      Analyze Site
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="right-image wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img
                  src="assets/images/banner-right-image.png"
                  alt="team meeting"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
