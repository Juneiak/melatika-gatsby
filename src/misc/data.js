const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun...'
import articleImage1 from '../images/about/about-1.jpg';
import articleImage2 from '../images/about/about-2.jpg';
import articleImage3 from '../images/about/about-3.jpg';
import articleImage4 from '../images/about/about-4.jpg';
import articleImage5 from '../images/about/about-5.jpg';
import articleImage6 from '../images/about/about-6.jpg';

const articlesData = [
  {
    title: 'Title',
    text: lorem,
    image: articleImage1,
    isBig: false,
    inRow: false,
    isTurned: false,
  },
  {
    title: 'Title',
    text: lorem,
    image: articleImage2,
    isBig: false,
    inRow: false,
    isTurned: true,
  },
  {
    title: 'Title',
    text: lorem,
    image: articleImage3,
    isBig: true,
    inRow: false,
    isTurned: false,
  },
  {
    title: 'Title',
    text: lorem,
    image: articleImage4,
    isBig: true,
    inRow: true,
    isTurned: false,
  },
  {
    title: 'Title',
    text: lorem,
    image: articleImage5,
    isBig: false,
    inRow: false,
    isTurned: true,
  },
  {
    title: 'Title',
    text: lorem,
    image: articleImage6,
    isBig: false,
    inRow: false,
    isTurned: false,
  }
]

export {
  articlesData,
}