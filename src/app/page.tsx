import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });

import IMG from "../../public/png-clipart-internet-access-voice-over-ip-telecommunication-circuit-technology-computer-network-electronics.png"

export default function Home() {
  return (
      <>
        <header className="h-12 p-2 w-full mx-auto bg-white  shadow-lg flex items-end justify-end space-x-10">
          <img alt="img" src="https://oniomania.ru/attachments/Image/i_23.jpg?template=generic" width={70} height={20}/>
          <Link className="text-2xl font-bold" href="/" class="font-bold text-4xl">МосОблТелеком</Link>
          <Link className="underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400" href="/">О компании</Link>
          <Link className="underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400" href="/">Услуги и цены</Link>
          <Link className="underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400" href="/">Как оплатить</Link>
          <Link className="underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400" href="/">Клиенту сети</Link>
          <Link className="underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400" href="/">Контакты</Link>
          <Link className="underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400" href="/">Новости</Link>
          <Link className="underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400" href="/">Форум</Link>
          <Link className="underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400" href="/">Зона охвата</Link>
        </header>
        <main
            className={`flex min-h-screen gap-x-16 flex-col items-center justify-center bg-cover ${inter.className}`}
            style={{backgroundImage: "url('https://oniomania.ru/attachments/Image/i_23.jpg?template=generic')"}}
        >
          <section class="w-full h-screen grid grid-cols-3 gap-16">

            {/*<Image alt="img" src={IMG} className="bg-red-500"/>*/}

            <div
                class="h-full flex justify-center items-center"
            >
              <form className="flex flex-col gap-3 items-center">
                <span>Проверить адрес:</span>
                <span className="flex flex-col w-44">
                          <label>Город: </label>
                          <input className="border-2 border-blue-400"/>
                      </span>
                <span className="flex flex-col w-44">
                          <label>Улица: </label>
                          <input className="border-2 border-blue-400"/>
                      </span>
                <div className="flex gap-3 items-end">
                          <span className="flex flex-col w-20">
                              <label>Дом:</label><input className="border-2 border-blue-400"/>
                          </span>
                  <span className="flex flex-col w-20">
                              <label>Корпус:</label><input className="border-2 border-blue-400"/>
                          </span>
                </div>
                <button type="submit" className="w-28 border-2 border-blue-400 bg-yellow-500">Проверить</button>
              </form>
            </div>


            <div class="col-span-2 grid grid-cols-3 m-2">
              <div className="col-span-2 flex flex-col bg-gray-200 opacity-90 rounded-2xl justify-between">
                <div className="h-16 w-full flex">
                  <div
                      className="h-16 w-2/5 bg-blue-400 rounded-ss-2xl text-white text-2xl flex items-center justify-center"
                      style={{textShadow: "#000 1px 0 5px"}}
                  >
                    Частным клиентам:
                  </div>
                  <div
                      className="h-16 w-3/5 bg-red-500 rounded-se-2xl text-white text-2xl flex items-center justify-center"
                      style={{textShadow: "#000 1px 0 5px"}}
                  >
                    Корпоративным клиентам:
                  </div>
                </div>
                <div
                    className="h-1/4 w-full text-4xl font-sans text-center text-yellow-500 font-bold "
                    style={{textShadow: "#000 1px 0 5px"}}
                >
                  Наши клиенты самые довольные!!!
                </div>
                <div>
                  <form className="flex flex-col items-end w-2/3 gap-5 h-48">
                    <span>Вход в личный кабинет:</span>
                    <label>Логин:  <input className="border-2 border-blue-400"/></label>
                    <label>Пароль:  <input className="border-2 border-blue-400"/></label>
                    <div className="space-x-10">
                      <button className="underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400">Вход</button>
                      <button className="underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400">Регистрация</button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="flex flex-col justify-around">
                <a
                    href="tel:88005555555" className="text-3xl  font-bold text-center">
                  8(800)555-55-55
                </a>
                <div
                    className="text-6xl font-bold text-center text-yellow-400"
                    style={{textShadow: "#000 1px 0 5px"}}
                >
                  Интернет
                </div>
                <div
                    className="text-6xl font-bold text-center text-yellow-400"
                    style={{textShadow: "#000 1px 0 5px"}}
                >
                  в каждый
                </div>
                <div
                    className="text-9xl font-bold text-center text-yellow-400"
                    style={{textShadow: "#000 1px 0 5px"}}
                >
                  дом
                </div>
              </div>
            </div>


            <div class="w-full">
              <p className="bg-yellow-400 text-2xl font-bold text-center opacity-90 rounded-se-2xl">Новости:</p>
              <div className="bg-white opacity-70 rounded-ee-2xl space-y-4 p-4 ">
                <p>
                  {`${(new Date()).getDate()}.${(new Date()).getMonth()}.${(new Date()).getFullYear()}`}
                </p>
                <p className="font-bold">Здесь будут новости компании</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis ipsam itaque modi repellendus? Amet, commodi
                  consequuntur culpa cum ea, eos facilis harum maiores natus
                  quod repellat, sequi sint soluta voluptate?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur dicta exercitationem harum inventore ipsum,
                  iure nemo voluptas? Aspernatur consequuntur cum eveniet
                  impedit placeat qui, vero. Ab consequuntur deserunt maxime unde.
                </p>
              </div>
            </div>


            <div class="w-full col-span-2">
              <p
                  className="text-2xl font-bold text-yellow-400 text-center bg-blue-400 opacity-90 rounded-ss-2xl"
                  style={{textShadow: "#000 1px 0 5px"}}
              >
                Добро пожаловать!
              </p>
              <div className="font-sans text-xl bg-gray-300 opacity-80 space-y-4 p-2">
                <p>
                  Компания "МосОблТелеком" работает на рынке услуг связи с 2001 года. Основное направление
                  деятельности компании - построение сетей доступа масштаба района, города. Мы
                  предоставляем полный спектр услуг, необходимый для нормальной работы как частным так и
                  корпоративным клиентам.
                </p>
                <p>
                  Нашими клиентами и деловыми партнерами являются Управы районов, Дирекции единого
                  заказчика, жилищно-строительные кооперативы и товарищества собственников жилья,
                  застройщики, торговые и сервисные компании, а также ряд бизнес-центров. Помимо
                  предоставления услуг связи мы оказываем содействие нашим клиентам в проектировании и
                  строительстве телекоммуникационной инфраструктуры
                </p>
                <p>
                  Наши клиенты обеспечиваются технической поддержкой и бесплатными консультациями при
                  возникновении каких-либо вопросов.
                </p>
              </div>
            </div>
          </section>
        </main>
      </>
  )
}