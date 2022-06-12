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

import navImage1_480 from '../images/nav/nav-1-480.png';
import navImage2_480 from '../images/nav/nav-2-480.png';
import navImage3_480 from '../images/nav/nav-3-480.png';
import navImage4_480 from '../images/nav/nav-4-480.png';


import catalogImage1 from '../images/catalog/catalog-1.jpg'
import catalogImage2 from '../images/catalog/catalog-2.jpg'
import catalogImage3 from '../images/catalog/catalog-3.jpg'
import catalogImage4 from '../images/catalog/catalog-4.jpg'


const articlesData1 = [
  {
    title: 'Кастомизация',
    text: 'Реализуем уникальные проекты, вдохновлённые Вашей фантазией. С легкостью создадим и привезём мебель Вашей мечты.',
    image: articleImage1,
  },
  {
    title: 'Детали',
    text: 'Суть нашего бренда – изысканность швов и подбор материалов. Мы способны увидеть великое в маломи в срок изготовить уникальную и долговечную мебель.',
    image: articleImage2,

  },
  {
    title: 'Ткани',
    text: 'Эксклюзивные и популярные, любого цвета и фактуры. Мы сможем найти любую из них, чтобы наша мебель идеально вписалась в интерьер Вашего дома, или квартиры.',
    image: articleImage3,

  },
]

const articlesData2 = [
  {
    title: 'Выгода',
    text: 'Дизайнер интерьера, сотрудничая с нами, получает весомую выгоду, размер которой зависит от объемов и сложности работ.',
    image: articleImage4,

  },
  {
    title: 'Интерес',
    text: 'Ваш персональный менеджер разбирается в мебельных трендах и заинтересован помочь реализовать Ваш дизайн-проект. Он на связи 24/7 и готов ответить на любые вопросы, по работе.',
    image: articleImage5,

  },
  {
    title: 'Лояльность',
    text: 'Любим сложные задачи и уважаем сроки. Это значит, мы вовремя доставим, поднимем, распакуем и соберем Ваш заказ, оставив после себя порядок.',
    image: articleImage6,
  },
]

const designerCardsData = [
  {
    name: 'Виктория Мусина',
    subtitle : 'Дизайнер интерьеров',
    text: 'О компании “Мелатика” я узнала через соц. сети, мне понравился обширный выбор тканей, ценовой диапазон, сроки производства и то, как лояльно работают с дизайнерами.',
    image: designerImage1,
    videoURl: 'https://www.youtube.com/embed/2P_swy-CIqE?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&rel=0&showinfo=0&mute=1&autohide=1',
  },
  {
    name: 'Елена Бузина',
    subtitle : 'Дизайнер интерьеров',
    text: 'Мы смогли реализовать дизайн-проект в жизнь в точности, как на картинке. С любыми вопросами всегда помогала служба поддержки. Нас устроило соотношение “цена-качество” именно здесь.',
    image: designerImage2,
    videoURl: 'https://www.youtube.com/embed/I9JvyEOXUtM?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&rel=0&showinfo=0&mute=1&autohide=1',

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
    image_480: navImage1_480,
  },
  {
    title: 'Персональные решения',
    linkTo: '#solution',
    image: navImage2,
    image_480: navImage2_480,
  },
  {
    title: 'Дизайнерам',
    linkTo: '#solution',
    image: navImage3,
    image_480: navImage3_480,
  },
  {
    title: 'Контакты',
    linkTo: '#contacts',
    image: navImage4,
    image_480: navImage4_480,
  },
]

const catalogData = [
  {
    title: 'Диваны',
    linkUrl: '#',
    image: catalogImage1,
  },
  {
    title: 'Кровати',
    linkUrl: '#',
    image: catalogImage2,
  },
  {
    title: 'Детские',
    linkUrl: '#',
    image: catalogImage3,
  },
  {
    title: 'Аксессуары',
    linkUrl: '#',
    image: catalogImage4,
  },
]

export {
  articlesData1,
  articlesData2,
  designerCardsData,
  navElementsData,
  catalogData,
}