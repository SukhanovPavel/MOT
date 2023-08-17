import React from 'react';
import {ContactMap} from "@/Components/ContactMap/ContactMap";
import {PageLayout} from "@/shared/PageLayout/PageLayout";

import styles from "./page.module.css";

const zones = [
    { center: [55.579016, 39.548045]},             //Шатура
    { center: [55.663283, 39.862768]},             //Рошаль
    { center: [55.718141, 39.737677]},             //Мишеронь
    { center: [55.592179, 40.025749]},             //Пустоша
    { center: [55.547591, 40.009112]},      //Черусти
    { center: [55.602937, 39.944604]},      //Пустоши
    { center: [55.317461, 39.826602]},      //Дмитровский Погост
    { center: [55.256447, 39.985720]},      //Озеро Белое
    { center: [55.583978, 39.540951]},      //парк Шатура
    { center: [55.596686, 39.704781]},    // Бордуки
    { center: [55.656514, 39.751251]},      //Власово
    { center: [55.562154, 39.688117]},     // Кривандино
    { center: [55.597047, 39.512667]},  //Митинская
    { center: [55.598055, 39.479969]},  //Тархановка
    { center: [55.601300, 39.574639]},  //Озерная улица
    { center: [55.610316, 39.578577]},      //Керва
    { center: [55.710849, 39.871311]}, //Бакшеево
    { center: [55.575750, 39.530166]},  //Проспект Ильича
    { center: [55.574207, 39.537092]},  //Советская улица Шатура
    { center: [55.575398, 39.530256]}, //Проспект Ильича 40
    { center: [55.575300, 39.529024]},  //Офис Шатура
    // { center: [55.610316, 39.578577]},
    // { center: [55.610316, 39.578577]},
]

const Page = () => {
    return (
        <PageLayout>
            <div className={styles.desc}>
                <h2>Зона охвата</h2>
                <p>Быстрый и качественный интернет по Шатурскому району</p>
            </div>
            <ContactMap
                // defaultPlacemark
                placemarks={zones}
                zoom={10}
                center={[55.600882, 39.788486]}
            />
        </PageLayout>
    );
};

export default Page;