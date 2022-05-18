import articleImage1 from '../images/about/about-1.jpg';
import articleImage2 from '../images/about/about-2.jpg';
import articleImage3 from '../images/about/about-3.jpg';
import articleImage4 from '../images/about/about-4.jpg';
import articleImage5 from '../images/about/about-5.jpg';
import articleImage6 from '../images/about/about-6.jpg';
import articleImage7 from '../images/about/about-7.jpg';
import articleImage8 from '../images/about/about-8.jpg';
import articleImage9 from '../images/about/about-9.jpg';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun...'

const articlesData1 = [
  {
    title: 'Актуальность',
    text: lorem,
    image: articleImage1,
    isBig: true,
    inRow: true,
    isTurned: false,

    is460Big: false,
    in460Row: true,
    is460Turned: false,
  },
  {
    title: 'Детали',
    text: lorem,
    image: articleImage2,
    isBig: false,
    inRow: false,
    isTurned: true,

    is460Big: false,
    in460Row: true,
    is460Turned: true,
  },
  {
    title: 'Забота',
    text: lorem,
    image: articleImage3,
    isBig: false,
    inRow: false,
    isTurned: false,

    is460Big: true,
    in460Row: false,
    is460Turned: false,
  },
]

const articlesData2 = [
  {
    title: 'Исполнение',
    text: lorem,
    image: articleImage4,
    isBig: false,
    inRow: false,
    isTurned: false,

    is460Big: false,
    in460Row: true,
    is460Turned: true,
  },
  {
    title: 'Интерес',
    text: lorem,
    image: articleImage5,
    isBig: false,
    inRow: false,
    isTurned: true,

    is460Big: false,
    in460Row: true,
    is460Turned: false,
  },
  {
    title: 'Лояльность',
    text: lorem,
    image: articleImage6,
    isBig: true,
    inRow: false,
    isTurned: false,

    is460Big: true,
    in460Row: false,
    is460Turned: false,
  },
]

const articlesData3 = [
  {
    title: 'Фамилия',
    text: lorem,
    image: articleImage7,
    isBig: false,
    inRow: false,
    isTurned: true,

    is460Big: false,
    in460Row: true,
    is460Turned: false,
  },
  {
    title: 'Фамилия',
    text: lorem,
    image: articleImage8,
    isBig: false,
    inRow: false,
    isTurned: false,

    is460Big: true,
    in460Row: true,
    is460Turned: false,
  },
  {
    title: 'Фамилия',
    text: lorem,
    image: articleImage9,
    isBig: false,
    inRow: false,
    isTurned: true,

    is460Big: false,
    in460Row: true,
    is460Turned: true,
  },
]

export {
  articlesData1,
  articlesData2,
  articlesData3
}