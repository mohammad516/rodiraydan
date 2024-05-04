import Image from "next/image";
import React from "react";

function Client() {
  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Отзывы клиентов</h2>
        </div>
        <div
          id="carouselExample3Controls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="box col-lg-10 mx-auto">
                <div className="img_container">
                  <div className="img-box">
                    <div className="img_box-inner">
                      <Image width={200} height={150} src="/images/client.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h5>Ольга Смирнова</h5>
                  <h6>Долго искали, нашли здесь!</h6>
                  <p>
                    Мы давно искали подходящего специалиста и помогли нам только
                    тут! В этой команде собрались только профессионалы, мы
                    бесконечно благодарны ребятам. Спасибо.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box col-lg-10 mx-auto">
                <div className="img_container">
                  <div className="img-box">
                    <div className="img_box-inner">
                      <Image width={200} height={200} src="/images/client1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h5>Наталья Кузнецова</h5>
                  <h6>Качественные услуги</h6>
                  <p>
                    Перепробовали несколько вариантов, прежде чем обратиться
                    сюда. Ни разу не пожалели! Теперь советуем всем своим
                    друзьям и знакомым.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box col-lg-10 mx-auto">
                <div className="img_container">
                  <div className="img-box">
                    <div className="img_box-inner">
                      <Image width={200} height={200} src="/images/client4.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h5>Дмитрий Петров</h5>
                  <h6>Лучший сервис, который мы видели</h6>
                  <p>
                    Менеджеры очень отзывчивые и помогают решить практически
                    любой вопрос, всегда на связи и быстро отвечают. Понравилось
                    человеческое отношение ко мне и к решению моей проблемы.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn_box">
            <a
              className="carousel-control-prev"
              href="#carouselExample3Controls"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-long-arrow-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExample3Controls"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
