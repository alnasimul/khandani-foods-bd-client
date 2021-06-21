import surma from '../images/Surma P..png';
import karatoya from '../images/Karatoya St..png';
import greenTea from '../images/Green tea.png';

const teas = [
    {
        id: 'KT01-1000',
        category: 'Tea',
        title: 'সুরমা প্রিমিয়াম',
        description: 'প্রিমিয়াম এ গ্রেড ক্লোন চা পাতা ঘ্রান ও স্বাদে অনন্য',
        img: surma,
        price: 650,
        quantity: '1 kg',
    },
    {
        id: 'KT02-1000',
        category: 'Tea',
        title: 'করোতয়া স্ট্যান্ডার্ড',
        description: 'খুবই ভালো মানের স্ট্যান্ডার্ড ক্লোন চা পাতা স্বাদে ও ঘ্রানে অতুলনীয়',
        img: karatoya,
        price: 500,
        quantity: '1 kg',
    },
    {
        id: 'KT03-1000',
        category: 'Tea',
        title: 'প্রিমিয়াম গ্রীন টি ',
        description: 'আমরা সকলেই জানি গ্রীন টি শরীরের জন্য বেশ উপকারি তার মধ্যে বিশেষভাবে ওজন হ্রাস, হার্টকে সুস্থ এবং ডায়বেটিস নিয়ন্ত্রনে বেশ কার্যকরী',
        img: greenTea,
        price: 1200,
        quantity: '1 kg',
    }
]

export default teas;