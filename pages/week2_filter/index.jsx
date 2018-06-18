import React from 'react'

import '../../assets/week2/index.styl'

export default () => (
  <div className="container__week2">
    <div className="nav">
      <div className="nav-bar">
        <div className="nav-bar-logo">HaveFun</div>
        <label className="nav-bar-search-container">
          <input
            className="nav-bar-search"
            type="text"
            placeholder="Explore your activites"
          />
        </label>
      </div>
    </div>
    <main className="main">
      <aside className="main-aside">
        <ul className="main-aside-list">
          <li className="main-aside-list-item">
            <input
              type="checkbox"
              name=""
              id="l1"
              className="main-aside-list-item-input"
            />
            <label htmlFor="l1" className="main-aside-list-item-title">
              Location
            </label>
            <div className="main-aside-list-item-content">
              <select
                className="main-aside-list-item-content-select"
                name=""
                id="">
                <option value="">Taiwan</option>
                <option value="">Japanese</option>
                <option value="">China</option>
              </select>
            </div>
            <div className="main-aside-list-item-mark" />
          </li>
          <li className="main-aside-list-item">
            <input
              type="checkbox"
              name=""
              id="l2"
              className="main-aside-list-item-input"
            />
            <label htmlFor="l2" className="main-aside-list-item-title">
              Date
            </label>
            <div className="main-aside-list-item-content">
              <label className="main-aside-list-item-content-label">
                <div className="main-aside-list-item-content-label-title">
                  from
                </div>
                <input
                  className="main-aside-list-item-content-label-input"
                  type="text"
                  value="2018/05/24"
                />
              </label>
              <label className="main-aside-list-item-content-label">
                <div className="main-aside-list-item-content-label-title">
                  to
                </div>
                <input
                  className="main-aside-list-item-content-label-input"
                  type="text"
                  value="2018/06/01"
                />
              </label>
            </div>
            <div className="main-aside-list-item-mark" />
          </li>
          <li className="main-aside-list-item">
            <input
              type="checkbox"
              name=""
              id="l3"
              className="main-aside-list-item-input"
            />
            <label htmlFor="l3" className="main-aside-list-item-title">
              Categories
            </label>
            <div className="main-aside-list-item-content">
              <div className="main-aside-list-item-content-radiusList">
                <label
                  className="main-aside-list-item-content-radiusList-item"
                  htmlFor="c1">
                  <input
                    type="radio"
                    name="categories"
                    id="c1"
                    className="main-aside-list-item-content-radiusList-item-input"
                  />
                  <span className="main-aside-list-item-content-radiusList-item-checkbox" />
                  <span className="main-aside-list-item-content-radiusList-item-value">
                    All
                  </span>
                </label>
                <label
                  className="main-aside-list-item-content-radiusList-item"
                  htmlFor="c2">
                  <input
                    type="radio"
                    name="categories"
                    id="c2"
                    className="main-aside-list-item-content-radiusList-item-input"
                  />
                  <span className="main-aside-list-item-content-radiusList-item-checkbox" />
                  <span className="main-aside-list-item-content-radiusList-item-value">
                    Entertainment
                  </span>
                </label>
                <label
                  className="main-aside-list-item-content-radiusList-item"
                  htmlFor="c3">
                  <input
                    type="radio"
                    name="categories"
                    id="c3"
                    className="main-aside-list-item-content-radiusList-item-input"
                  />
                  <span className="main-aside-list-item-content-radiusList-item-checkbox" />
                  <span className="main-aside-list-item-content-radiusList-item-value">
                    Food
                  </span>
                </label>
                <label
                  className="main-aside-list-item-content-radiusList-item"
                  htmlFor="c4">
                  <input
                    type="radio"
                    name="categories"
                    id="c4"
                    className="main-aside-list-item-content-radiusList-item-input"
                  />
                  <span className="main-aside-list-item-content-radiusList-item-checkbox" />
                  <span className="main-aside-list-item-content-radiusList-item-value">
                    Learning
                  </span>
                </label>
              </div>
            </div>
            <div className="main-aside-list-item-mark" />
          </li>
        </ul>
      </aside>
      <section className="main-section">
        <div className="main-section-result">
          Showing <span className="main-section-result-number">15</span> results
          by...
        </div>
        <ul className="main-section-tags">
          <li className="main-section-tags-item">Koahsiung</li>
          <li className="main-section-tags-item">Entertainment</li>
        </ul>
        <ul className="main-section-posts">
          <li className="main-section-posts-item">
            <div
              className="main-section-posts-item-image"
              style={{ backgroundImage: 'url(https://fakeimg.pl/644x352/)' }}
            />
            <div className="main-section-posts-item-info">
              <div className="main-section-posts-item-info-title">
                Kogi Cosby sweater.
              </div>
              <div className="main-section-posts-item-info-content">
                Donec euismod scelerisque ligula. Maecenas eu varius risus, eu
                aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis
                lorem luctus id.
              </div>
              <div className="main-section-posts-item-info-author">
                <div className="main-section-posts-item-info-raise">
                  Fthan Foster
                </div>
                <div className="main-section-posts-item-info-tag">
                  Entertainment
                </div>
              </div>
              <div className="main-section-posts-item-info-author">
                <div className="main-section-posts-item-info-where">
                  Kaohsiung City
                </div>
                <div className="main-section-posts-item-info-time">
                  2018/5/24 - 2018/5/31
                </div>
              </div>
            </div>
          </li>
          <li className="main-section-posts-item">
            <div
              className="main-section-posts-item-image"
              style={{ backgroundImage: 'url(https://fakeimg.pl/644x352/)' }}
            />
            <div className="main-section-posts-item-info">
              <div className="main-section-posts-item-info-title">
                Kogi Cosby sweater.
              </div>
              <div className="main-section-posts-item-info-content">
                Donec euismod scelerisque ligula. Maecenas eu varius risus, eu
                aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis
                lorem luctus id.
              </div>
              <div className="main-section-posts-item-info-author">
                <div className="main-section-posts-item-info-raise">
                  Fthan Foster
                </div>
                <div className="main-section-posts-item-info-tag">
                  Entertainment
                </div>
              </div>
              <div className="main-section-posts-item-info-author">
                <div className="main-section-posts-item-info-where">
                  Kaohsiung City
                </div>
                <div className="main-section-posts-item-info-time">
                  2018/5/24 - 2018/5/31
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="main-section-page">
          <li className="main-section-page-btn">«</li>
          <li className="main-section-page-btn main-section-page-btn__active">
            1
          </li>
          <li className="main-section-page-btn">2</li>
          <li className="main-section-page-btn">3</li>
          <li className="main-section-page-btn">4</li>
          <li className="main-section-page-btn">5</li>
          <li className="main-section-page-btn">»</li>
        </ul>
      </section>
    </main>
  </div>
)
