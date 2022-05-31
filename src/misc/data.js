import articleImage1 from '../images/articles/articles-1.jpg';
import articleImage2 from '../images/articles/articles-2.jpg';
import articleImage3 from '../images/articles/articles-3.jpg';
import articleImage4 from '../images/articles/articles-4.jpg';
import articleImage5 from '../images/articles/articles-5.jpg';
import articleImage6 from '../images/articles/articles-6.jpg';

import designerImage1 from '../images/designers/designer-1.jpg';
import designerImage2 from '../images/designers/designer-2.jpg';
import designerImage3 from '../images/designers/designer-3.jpg';

import navImage1 from '../images/nav/nav-1.png';
import navImage2 from '../images/nav/nav-2.png';
import navImage3 from '../images/nav/nav-3.png';
import navImage4 from '../images/nav/nav-4.png';

import nav460Image1 from '../images/nav/nav-1-460.png';
import nav460Image2 from '../images/nav/nav-2-460.png';
import nav460Image3 from '../images/nav/nav-3-460.png';
import nav460Image4 from '../images/nav/nav-4-460.png';


const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun...'

const articlesData1 = [
  {
    title: 'Актуальность',
    text: 'Создаем стильную мебель, вдохновляясь лучшими европейскими трендами. Концепция бренда «Melatika» –  это синергия современных идей и передовых технологий в сфере дизайна.',
    image: articleImage1,
  },
  {
    title: 'Детали',
    text: 'Изысканная эстетика в каждом шве и соединении –  один из главных канонов нашего бренда. Мы видим большое в малом, создавая эксклюзивы для вашего интерьера.',
    image: articleImage2,

  },
  {
    title: 'Забота',
    text: 'От начала работы над эскизом до распаковки и сборки мебели у вас дома, мы оберегаем наших клиентов на всех этапах.',
    image: articleImage3,

  },
]

const articlesData2 = [
  {
    title: 'Лояльность',
    text: 'Готовы работать над любым заказом и выполнить его в срок. Доставим мебель до вашего дома, поднимем, распакуем и соберем. Ваше пожелание –  наше точное исполнение.',
    image: articleImage4,

  },
  {
    title: 'Интерес',
    text: 'Ваш персональный менеджер, понимает тренды, и заинтересован в реализации вашего дизайн-проекта. Он всегда на связи, и готов ответить на любые вопросы.',
    image: articleImage5,

  },
  {
    title: 'Исполнение',
    text: 'Сделаем мебель в точном соответствии с вашим персональным эскизом. Воплотим любые пожелания клиента в качественном исполнении и учетом всех деталей. Вместе мы создадим интерьер, в котором хочется жить, заниматься творчеством и наслаждаться комфортом.',
    image: articleImage6,
  },
]

const designerCardsData = [
  {
    name: 'Виктория Мусина',
    subtitle : 'Дизайнер интерьеров',
    text: 'О компании “Мелатика” я узнала через соц. сети, мне понравился обширный выбор тканей, ценовой диапазон, сроки производства и то, как лояльно работают с дизайнерами.',
    image: designerImage1,
    videoURl: 'https://www.youtube.com/embed/2P_swy-CIqE?autoplay=1&iv_load_policy=3",'
  },
  {
    name: 'Елена Бузина',
    subtitle : 'Дизайнер интерьеров',
    text: 'Мы смогли реализовать дизайн-проект в жизнь в точности, как на картинке. С любыми вопросами всегда помогала служба поддержки. Нас устроило соотношение “цена-качество” именно здесь.',
    image: designerImage2,
    videoURl: 'https://www.youtube.com/embed/I9JvyEOXUtM?autoplay=1&iv_load_policy=3",'

  },
  {
    name: 'Миля Тагирова',
    subtitle : 'Дизайнер интерьеров',
    text: 'Мне понравилось то, что даже не пришлось приходить в салон. Я посмотрела проекты компании, отправила свой эскиз и мне всё сделали качественно. Получилось даже лучше, чем моя визуализация.',
    image: designerImage3,
    videoURl: false
  },
]

const navElementsData = [
  {
    title: 'Каталог',
    linkTo: '/catalog',
    image: navImage1,
    image460: nav460Image1,
  },
  {
    title: 'Персональные решения',
    linkTo: '#solution',
    image: navImage2,
    image460: nav460Image2,
  },
  {
    title: 'Дизайнерам',
    linkTo: '#solution',
    image: navImage3,
    image460: nav460Image3,
  },
  {
    title: 'Контакты',
    linkTo: '#contacts',
    image: navImage4,
    image460: nav460Image4,
  },
]

export {
  articlesData1,
  articlesData2,
  designerCardsData,
  navElementsData,
}