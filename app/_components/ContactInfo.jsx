import React from 'react'

function ContactInfo() {
  return (
    <>
    <section className="why_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="full">
          <form action="index.html">
            <fieldset>
              <input
                type="text"
                placeholder="Введите свое полное имя"
                name="name"
                required=""
              />
              <input
                type="email"
                placeholder="Введите ваш адрес электронной почты"
                name="email"
                required=""
              />
              <input
                type="text"
                placeholder="Введите тему"
                name="subject"
                required=""
              />
              <textarea
                placeholder="Введите ваше сообщение"
                required=""
                defaultValue={""}
              />
              <input
                type="submit"
                defaultValue="представлять на рассмотрение"
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default ContactInfo
