import s from './About.module.scss';
import HeroBanner from '../../components/About/HeroBanner/HeroBanner';
import DescriptionBlock from '../../components/About/DescriptionBlock/DescriptionBlock';
import AwardCard from '../../components/About/AwardCard/AwardCard';
import PeoplesBlock from '../../components/About/PeoplesBlock/PeoplesBlock';

import banner from '../../assets/images/about/hero_banner.png';
import qr from '../../assets/images/about/about_QR.png';
import wardsImg1 from '../../assets/images/about/wards_img1.png';
import wardsImg2 from '../../assets/images/about/wards_img2.png';
import collectionsImg1 from '../../assets/images/about/collections_img1.png';
import collectionsImg2 from '../../assets/images/about/collections_img2.png';
import thingImg1 from '../../assets/images/about/thing_img1.png';
import thingImg2 from '../../assets/images/about/thing_img2.png';

// Попечители
import aLapenko from '../../assets/images/about/peoples/trustees/A.Lapenko.png';
import sGudkov from '../../assets/images/about/peoples/trustees/S.Gudkov.png';
import sPal from '../../assets/images/about/peoples/trustees/S.Pal.png';
import vSmehov from '../../assets/images/about/peoples/trustees/V.Smehov.png';
import haski from '../../assets/images/about/peoples/trustees/Haski.png';
import zhMedvedeva from '../../assets/images/about/peoples/trustees/Zh.Medvedeva.png';
import uBorisov from '../../assets/images/about/peoples/trustees/U.Borisov.png';
import nIvleeva from '../../assets/images/about/peoples/trustees/N.Ivleeva.png';

// Совет фонда
import mVdovina from '../../assets/images/about/peoples/fund_council/M.Vdovina.png';
import uTai from '../../assets/images/about/peoples/fund_council/U.Tai.png';
import iSaveliev from '../../assets/images/about/peoples/fund_council/I.Saveliev.png';
import oRyabova from '../../assets/images/about/peoples/fund_council/O.Ryabova.png';
import gNahapetiyan from '../../assets/images/about/peoples/fund_council/G.Nahapetiyan.png';
import uKrikuha from '../../assets/images/about/peoples/fund_council/U.Krikuha.png';
import fZaharova from '../../assets/images/about/peoples/fund_council/F.Zaharova.png';

// команда
import mVdovina2 from '../../assets/images/about/peoples/team/M.Vdovina.png';
import pSimonov from '../../assets/images/about/peoples/team/P.Simonov.png';
import zhKim from '../../assets/images/about/peoples/team/Zh.Kim.png';
import aNemov from '../../assets/images/about/peoples/team/A.Nemov.png';
import vKolpinova from '../../assets/images/about/peoples/team/V.Kolpinova.png';
import eKoshevaya from '../../assets/images/about/peoples/team/E.Koshevaya.png';
import eMakarovskaya from '../../assets/images/about/peoples/team/E.Makarovskaya.png';
import iLivizkaya from '../../assets/images/about/peoples/team/I.Livizkaya.png';
import sViprizkaya from '../../assets/images/about/peoples/team/S.Viprizkaya.png';
import tGrigorieva from '../../assets/images/about/peoples/team/T.Grigorieva.png';
import mProhina from '../../assets/images/about/peoples/team/M.Prohina.png';
import iEgorov from '../../assets/images/about/peoples/team/I.Egorov.png';
import vBalikova from '../../assets/images/about/peoples/team/V.Balikova.png';
import dTurov from '../../assets/images/about/peoples/team/D.Turov.png';
import gNikonov from '../../assets/images/about/peoples/team/G.Nikonov.png';
import iSamadAli from '../../assets/images/about/peoples/team/I.Samad-Ali.png';
import aKuhta from '../../assets/images/about/peoples/team/A.Kuhta.png';
import iSherbakova from '../../assets/images/about/peoples/team/I.Sherbakova.png';
import uDavidova from '../../assets/images/about/peoples/team/U.Davidova.png';
import kVanshet from '../../assets/images/about/peoples/team/K.Vanshet.png';
import aPavlov from '../../assets/images/about/peoples/team/A.Pavlov.png';


const About = () => {
  return (
    <main className={s.main}>
      <HeroBanner banner={banner}/>


      {/* Наша миссия */}
      <section className={s.section_mission}>
        <h2 className={s.section_header}>Наша миссия</h2>

        <p>ПОМОЩЬ — это оказание адресной и прозрачной помощи.</p>
        <p>Проект, как точка сборки нового времени, объединяющий поколения.</p>
        <p>Пять Основных категорий для оказания адресной помощи — пожилые люди, дети, Животные, семьи с одним родителем и чрезвычайные ситуации.</p>
        <p>Главные ценности проекта — любовь, уважение, сострадание, ответственность, прозрачность и технологичность.  Помогать другим — норма.</p>
        <p>Помогая другому, ты помогаешь самому себе. Присоединяйся, будь в Помощь!</p>
        
        <div className={s.mission__bottom_block}>
          <p>Оставайся тут или Заходи в приложение, применяй фильтр для выбора категории и выбирай понравившийся сбор. Делай перевод на удобную сумму и получай прозрачный отчёт после завершения сбора.</p>
          <img src={qr} alt="qr" />
        </div>

      </section>



      {/* блоки из 2 изображений и абзацев */}
      <section className={s.section_textImages}>
        <DescriptionBlock
          image1={wardsImg1}
          image2={wardsImg2}
          header={{text:'ПОДОПЕЧНЫЕ', classname: s.section_header}}
          texts={[
            "Данные большинства пожилых подопечных мы получаем от профильных организаций-партнеров. Они координируют все процессы на местах, в том числе подписание документов и проведение фотосессии. Верифицированного подопечного мы повторно проверяем.",
            "В данный момент мы оказываем помощь в 57 городах России. География проекта расширяется. Подопечный должен быть старше 60 лет, с низким уровнем дохода и без поддержки со стороны родственников. Конкретные критерии определяются организациями-партнерами."
          ]}
        />
      </section>
      <section className={s.section_textImages}>
        <DescriptionBlock
          image1={collectionsImg1}
          image2={collectionsImg2}
          header={{text:'Регулярные РАЗОВЫЕ и срочные СБОРЫ', classname: s.section_header}}
          texts={[
            "Участвуй в разовых сборах для разных категорий нуждающихся — детей, животных, семей с одним родителем, пострадавших в чрезвычайных ситуациях и пожилых людей.",
            "Сборы открываются верифицированными благотворительными организациями на разные потребности. Например, если ребенку требуется операция или животным в приюте необходимо закупить корм."
          ]}
        />
      </section>
      <section className={s.section_textImages}>
        <DescriptionBlock
          image1={thingImg1}
          image2={thingImg2}
          header={{text:'СЕРВИС ПОМОЩЬ ДЕЛО', classname: s.section_header}}
          texts={[
            "Помогать можно не только деньгами, но и делами! Участвуй в благотворительных делах в качестве помощника, применяя свои навыки. Для участия заполняй «Анкету помощника» и указывай свои навыки и города, в которых готов помогать.",
            "Сервис предложит дела, соответствующие твоим навыкам. Участвуй, а после завершения смотри отчёт о прошедшем деле и оставляй отзыв организатору. На карте появляются благотворительные дела, созданные фондами и компаниями.",
            "Для участия заполняй «Анкету помощника» и указывай свои навыки и города, в которых готов помогать.",
            "На карте появляются благотворительные дела, созданные фондами и компаниями."
          ]}
        />
      </section>



      {/* Достижения */}
      <section className={s.awards}>
        <h2 className={s.section_header}>Достижения</h2>
        <div>
          <AwardCard title="Серебро НПБК 2021" description="Серебро в категории 'Социальная ответственность' за рекламную кампанию 'Продуктовый сад'" />
          <AwardCard title="Золото SRSLY 2021" description="Победители в номинации 'Помощник года' - проект 'ПОМОЩЬ' и Никита Кукушкин" />
          <AwardCard title="Серебро Большая Рыба 2022" description="Серебро в номинации 'Digital' от Sostav.ru" />
        </div>
      </section>



      {/* Попечители */}
      <section>
        <h2 className={s.section_header}>Попечители</h2>
        <PeoplesBlock
          text="Наши попечители — это апостолы проекта. Они популяризируют проект, участвуют в его развитии и помогают нам делать помощь удобной, прозрачной и технологичной."
          images={[
            {src: aLapenko, name: "Антон Лапенко"},
            {src: sGudkov, name: "Саша Гудков"},
            {src: sPal, name: "Саша Паль"},
            {src: vSmehov, name: "Вениамин Смехов"},
            {src: haski, name: "Хаски"},
            {src: zhMedvedeva, name: "Женя Медведева"},
            {src: uBorisov, name: "Юра Борисов"},
            {src: nIvleeva, name: "Настя Ивлеева"},
          ]}
        />
      </section>

      
      {/* СОВЕТ ФОНДА */}
      <section>
        <h2 className={s.section_header}>Совет фонда</h2>
        <PeoplesBlock
          text="Юридическая база проекта — благотворительный фонд «Я В ПОМОЩЬ». Совет фонда — высший управляющий орган, который принимает стратегические решения, утверждает годовой план и определяет вектор развития проекта."
          images={[
            {src: mVdovina, name: "Маша Вдовина"},
            {src: uTai, name: "Юлий Тай"},
            {src: iSaveliev, name: "Иван Савельев"},
            {src: oRyabova, name: "Ольга Рябова"},
            {src: gNahapetiyan, name: "Гор Нахапетян"},
            {src: uKrikuha, name: "Юлия Крикуха"},
            {src: fZaharova, name: "Фаина Захарова"},
          ]}
        />
      </section>


      {/* Команда */}
      <section>
        <h2 className={s.section_header}>Команда</h2>
        <PeoplesBlock
          text="сотрудники фонда, основные подрядчики и волонтеры."
          images={[
            {src: mVdovina2, name: "Маша Вдовина"},
            {src: pSimonov, name: "Павел Симонов"},
            {src: zhKim, name: "Женя Ким"},
            {src: aNemov, name: "Антон Немов"},
            {src: vKolpinova, name: "Вита Колпинова"},
            {src: eKoshevaya, name: "Екатерина Кошевая"},
            {src: eMakarovskaya, name: "Екатерина Макаровская"},
            {src: iLivizkaya, name: "Ирина Ливицкая"},
            {src: sViprizkaya, name: "Соня Выприцкая"},
            {src: tGrigorieva, name: "Татьяна Григорьева"},
            {src: mProhina, name: "Мария Прохина"},
            {src: iEgorov, name: "Илья Егоров"},
            {src: vBalikova, name: "Виктория Балыкова"},
            {src: dTurov, name: "Дмитрий Туров"},
            {src: gNikonov, name: "Григорий Никонов"},
            {src: iSamadAli, name: "Инджила Самад Али"},
            {src: aKuhta, name: "Алексей Кухта"},
            {src: iSherbakova, name: "Ирина Щербакова"},
            {src: uDavidova, name: "Юля Давыдова"},
            {src: kVanshet, name: "Катя Ваншет"},
            {src: aPavlov, name: "Артем Павлов"},
          ]}
        />
      </section>

    </main>
  );
};

export default About;