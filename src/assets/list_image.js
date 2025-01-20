import logo from '../assets/logo/logo.svg';
import logo_png from '../assets/logo/logo.png';
import cover from '../assets/images/cover.jpg';
import tg_1 from '../assets/images/tg_1.jpg';
import tg_2 from '../assets/images/tg_2.jpg';
import tg_3 from '../assets/images/tg_3.jpg';
import bg_1 from '../assets/images/bg_1.jpg';
import bg_2 from '../assets/images/bg_2.jpg';
import tiktok from '../assets/images/tiktok.jpg';
import facebook from '../assets/images/facebook.jpg';
import instagram from '../assets/images/instagram.jpg';
import youtube from '../assets/images/youtube.jpg';
import p_1 from '../assets/images/p_1.jpg'
import p_2 from '../assets/images/p_2.jpg'
import s_1 from '../assets/images/s_1.jpg'
import subsidi from '../assets/images/subsidi.jpg';

const list_perum = [
    {
        address: 'Tangerang',
        name: 'Bonisari Sarana Indah',
        marker: 'subsidi',
        image: tg_3
    },
    {
        address: 'Tangerang',
        name: 'Grand Village Sepatan',
        marker: 'subsidi',
        image: tg_1
    },
    {
        address: 'Tangerang',
        name: 'Bayur Sarana Indah',
        marker: 'Sold Out',
        image: tg_2
    },
    {
        address: 'Bogor',
        name: 'Sarana Indah Residence',
        marker: 'Sold Out',
        image: bg_1
    },
    {
        address: 'Bogor',
        name: 'Grand Residence Indah',
        marker: 'Sold Out',
        image: bg_2
    },
]

const list_sosmed = [
    {
        icon: facebook,
        link: 'https://www.facebook.com/GrandVillageSepatan/'
    },
    {
        icon: instagram,
        link: 'www.instagram.com/grandvillagesepatan/'
    },
    {
        icon: tiktok,
        link: 'https://www.tiktok.com/@grandvillagesepatan_tgr'
    },
    {
        icon: youtube,
        link: 'www.youtube.com/grandvillagesepatan/'
    }
]

const list_achiev = [
    {
        name: 'Penghargaan 1',
        is_highlight: true,
        image: p_1
    },
    {
        name: 'Penghargaan 2',
        is_highlight: true,
        image: p_2
    },
    {
        name: 'Sertifikat 1',
        is_highlight: false,
        image: s_1
    }
]

export {
    logo,
    logo_png,
    cover,
    tg_1,
    tg_2,
    bg_1,
    bg_2,
    tiktok,
    facebook,
    instagram,
    youtube,
    p_1,
    p_2,
    list_sosmed,
    list_perum,
    list_achiev,
    subsidi
}