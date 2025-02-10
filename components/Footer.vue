<template>
  <footer id="contact">
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4 col-xs-12">
          <aside>
            <div class="widget">
              <h4 class="text-center">Contact Us<span></span></h4>
              <ul>
                <li>
                  <label><strong>주소 : </strong></label>
                  <p>서울시 관악구 복은6길 49, 1층 ㈜제이제이시스템</p>
                </li>
                <li>
                  <label><strong>대표이사 : </strong></label>
                  <p>김종민</p>
                </li>
                <li>
                  <label><strong>전화번호 : </strong></label>
                  <p>010-2354-8025</p>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div class="col-sm-8 col-xs-12">
          <iframe
            src="https://maps.google.com/maps?hl=en&amp;q=서울시 관악구 복은6길 49&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="300"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div class="row">
        <div
          class="col-lg-12 wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          <p>
            <nuxt-link to="/" rel="nofollow">
              {{ $t("hero.company") }} 서울시 관악구 복은6길 49, 1층 사업자번호:
              660-81-01343
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
aside {
  background: #fcfcfc;
  padding: 8px 15px 0 15px;
  margin: 0 0 0px 0;
  border: 1px solid #e6e6e6;
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.03);
  -moz-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.03);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.03);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

aside .widget {
  margin-bottom: 1px;
}

aside .widget ul {
  list-style: none;
  margin-left: 0;
}

aside .widget ul li {
  border-bottom: 1px dotted #efefef;
  margin: 1px 0 0 0;
  padding-bottom: 1px;
}

aside .widget h4 {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 5px;
  margin-bottom: 5px;
}

/* categories */
aside .widget ul.cat {
  list-style: none;
  margin-left: 0;
}
aside .widget ul.cat li {
  padding-left: 24px;
  background-repeat: no-repeat;
  background-position: -456px -69px;
}
aside .widget ul.cat li a {
  color: #444;
}
aside .widget ul.cat li a:hover {
  text-decoration: none;
}

/* recent posts */

aside .widget ul.recent-posts li {
  overflow: hidden;
  display: inline-block;
}

aside .widget ul.recent-posts li a {
  color: #444;
  text-align: left;
  font-weight: 600;
}

aside .widget ul.recent-posts li a:hover {
  text-decoration: none;
}

aside .widget ul.recent-posts li span.date {
  float: left;
  font-size: 11px;
  margin-top: 10px;
}

aside .widget ul.recent-posts li span.comment {
  float: left;
  margin-left: 20px;
  font-size: 11px;
  margin-top: 10px;
}

/* tags */
aside .widget ul.tags li {
  display: inline;
  border: none;
}

aside .widget ul.tags li a {
  margin-bottom: 10px;
  border: none;
  color: #fff;
}

aside p {
  text-align: left;
  margin: 0 0 10px;
}
</style>
