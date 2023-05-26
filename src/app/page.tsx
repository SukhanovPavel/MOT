import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

import styles from "../styles/home.module.css";

const inter = Inter({ subsets: ['latin'] });

const Arrow = <svg  className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>

export default function Home() {
  return (
      <div className={styles._}>
        <header className={styles.header}>
          <Link className={styles.logo} href="/">МосОблТелеком</Link>
          <Link className={styles.headerLinks} href="/">О компании</Link>
          <Link className={styles.headerLinks} href="/">Услуги и цены</Link>
          <Link className={styles.headerLinks} href="/">Как оплатить</Link>
          <Link className={styles.headerLinks} href="/">Клиенту сети</Link>
          <Link className={styles.headerLinks} href="/">Контакты</Link>
          <Link className={styles.headerLinks} href="/">Новости</Link>
          <Link className={styles.headerLinks} href="/">Зона охвата</Link>
        </header>
        <main className={styles.main}>
          {/*<section class="w-full h-screen grid grid-cols-3 gap-16">*/}

          <form className={styles.leftCol}>
            <span>Проверить адрес:</span>
            <span className={styles.inputWrap}>
                  <label>Город: </label>
                  <input className={styles.input}/>
            </span>
            <span className={styles.inputWrap}>
                  <label>Улица: </label>
                  <input className={styles.input}/>
            </span>
            <div className={styles.wrap}>
              <span>
                  <label>Дом:</label><input className={styles.input}/>
              </span>
              <span>
                  <label>Корпус:</label><input className={styles.input}/>
              </span>
            </div>
            <button type="submit" className={styles.searchButton}>Проверить</button>
          </form>


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
                    style={{textShadow: "#000 1px 0 5px", margin: "1rem"}}
                >
                  Наши клиенты самые довольные!!!
                </div>
                <div className={styles.lk}>
                  <a href="http://lk.mosobl-telecom.ru/" target="_blank"><div>{Arrow}</div>Личный кабинет</a>
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
                    className="text-6xl font-bold text-center text-yellow-400"
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
                  {`${(new Date()).getDate()}.${(new Date()).getMonth()+1}.${(new Date()).getFullYear()}`}
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
          {/*</section>*/}
        </main>
      </div>
  )
}