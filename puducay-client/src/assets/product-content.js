import shirt from './img/nu_shirt.png';
import notebook from './img/nu_notebook.jpg';
import tumbler from './img/nu_tumbler.jpg';
import hoodie from './img/nu_hoodie.jpg';
import lanyard from './img/nu_lanyard.jpg';
import cap from './img/nu_cap.png';
import fan from './img/nu_fan.png';
import bags from './img/nu_totebag.jpg';
import sticker from './img/nu_sticker.png';


const products = [
  {
    name: 'campus-tote-bag',
    title: 'NU Campus Tote Bag',
    category: 'Bags',
    price: 'PHP 499',
    stock: 'In stock',
    image:  bags,
    content: [
      'A roomy everyday tote for books, gym clothes, chargers, and quick campus errands.',
      'Made with thick canvas, reinforced handles, and a clean monochrome print.',
      'Best for students who want one simple carry-all bag for class and after-class plans.',
    ],
  },
  {
    name: 'daily-notes-pack',
    title: 'NU',
    category: 'Stationery',
    price: 'PHP 249',
    stock: 'In stock',
    image: notebook,
    title: 'NU Daily Notes Pack',
    category: 'Stationery',
    price: 'PHP 249',
    stock: 'In stock',
    content: [
      'A notebook, sticky notes, and quick-label tabs for daily class work.',
      'The set is light, compact, and easy to keep inside a backpack or locker.',
      'Useful for lectures, reminders, project lists, and exam review schedules.',
    ],
  },
  {
    name: 'stainless-tumbler',
    title: 'NU Stainless Tumbler',
    category: 'Drinkware',
    price: 'PHP 599',
    stock: 'Low stock',
    image: tumbler,
    content: [
      'A double-wall tumbler built for water, coffee, or tea during long school days.',
      'The matte finish keeps the look simple while the lid helps reduce spills in your bag.',
      'Fits most side pockets and keeps drinks ready between classes.',
    ],
  },
  {
    name: 'portable-rechargeable-fan',
    title: 'NU Portable Rechargeable Fan',
    category: 'Tech',
    price: 'PHP 899',
    stock: 'In stock',
    image: fan,
    content: [
      'A compact rechargeable fan designed for students for use in dorms, classrooms, and study areas.',
      'Provides strong airflow with multiple speed settings to keep you cool during long study sessions.',
      'Lightweight and portable design makes it easy to carry and use anywhere on campus or at home.',
    ],
  },
  {
    name: 'hoodie-jacket',
    title: 'NU Hoodie Jacket',
    category: 'Apparel',
    price: 'PHP 1,199',
    stock: 'Preorder',
    image: hoodie,
    content: [
      'A soft everyday hoodie with a relaxed fit for classrooms, commute days, and weekends.',
      'The heavy cotton blend keeps structure while staying comfortable for regular wear.',
      'Available through preorder so sizes can be reserved before release.',
    ],
  },
  {
  name: 'nu-stickers',
  title: 'NU Stickers',
  category: 'Accessories',
  price: 'PHP 99',
  stock: 'In stock',
  image: sticker,
  content: [
    'A set of official NU-themed stickers perfect for laptops, phones, and notebooks.',
    'Made with high-quality adhesive material that sticks well and lasts long.',
    'A simple way for students to show school pride in a fun and creative style.',
    ],
  },
  {
    name: 'id-lanyard',
    title: 'NU ID Lanyard',
    category: 'Accessories',
    price: 'PHP 179',
    stock: 'In stock',
    image: lanyard,
    content: [
      'A durable lanyard and card holder set for IDs, access cards, and small passes.',
      'The clip is easy to detach when scanning or presenting credentials.',
      'Simple enough for daily use and sturdy enough for a full semester.',
    ],
  },
  {
    name: 'student-cap',
    title: 'NU Cap',
    category: 'Apparel',
    price: 'PHP 399',
    stock: 'In stock',
    image: cap,
    content: [
      'A comfortable everyday cap designed for students for school and casual wear.',
      'Provides light sun protection while keeping a simple and clean student look.',
      'Durable and easy to wear daily, perfect for long hours on campus or outdoor activities.',
    ],
  },
];

export default products;
