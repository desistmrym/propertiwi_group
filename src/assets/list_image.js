import logo from '../assets/logo/logo.svg';
import logo_png from '../assets/logo/logo.png';
import cover from '../assets/images/cover.jpg';
import tg_1 from '../assets/images/tg_1.jpg';
import gvs_1 from '../assets/images/gvs_3.jpg';
import gvs_2 from '../assets/images/gvs_4.jpg';
import gvs_3 from '../assets/images/gvs_5.jpg';
import gvs_4 from '../assets/images/gvs_6.jpg';
import logo_gvs from '../assets/images/gvs_logo.png';
import tg_2 from '../assets/images/tg_2.jpg';
import bsi from '../assets/images/bsi.jpg';
import tg_3 from '../assets/images/tg_3.jpg';
import tg_3_1 from '../assets/images/tg_3_1.jpg';
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
import header from '../assets/images/header.jpg';
import why from '../assets/images/why.jpg';
import header_1 from '../assets/images/header_1.jpg';
import marker_subsidi from '../assets/images/marker_subsidi.jpg'
import marker_soldout from '../assets/images/marker_soldout.jpg'

const list_perum = [
    {
        address: 'Tangerang',
        name: 'Bonisari Sarana Indah',
        slug: 'bonisari_sarana_indah',
        marker: 'subsidi',
        image: tg_3,
        details: {
            image: [tg_3_1],
            image_marker: [marker_subsidi],
            link: '',
            description: `
                Merupakan Perumahan Subsidi paling strategis di Tangerang. Rumah subsidi paling dekat ke Bandara Soekarno-Hatta dan ke PIK 2 (Pantai Indah Kapuk 2). Mempersembahkan konsep perumahan subsidi yang nyaman, asri namun tetap mengedepankan konsep modern.
            `,
            address: 'Jln Raya Pakuhaji, Desa Pakuhaji - Bonisari',
            luas_proyek: '± 20 Hektar',
            total_unit: '± 1.800 unit',
            type: '30/60 FLPP'
        }
    },
    {
        address: 'Tangerang',
        name: 'Grand Village Sepatan',
        slug: 'grand_village_sepatan',
        marker: 'subsidi',
        image: tg_1,
        details: {
            image: [tg_1, gvs_1, gvs_2, gvs_3, gvs_4,],
            image_marker: [logo_gvs, marker_subsidi],
            link: 'https://maps.app.goo.gl/C7NZJmz5X3N538f97?g_st=ic',
            description: `
                Merupakan Perumahan Subsidi paling strategis di Tangerang. Berada di kawasan dengan pertumbuhan ekonomi yang pesat. Dikelilingi berbagai fasilitas umum (Kesehatan, Perbelanjaan, Pendidikan, Perbankan, dll). Menawarkan perumahan subsidi yang nyaman dan asri.
            `,
            address: 'Jln. Raya Mauk - Perempatan Oja Belok Kanan',
            luas_proyek: '± 24 Hektar',
            total_unit: '± 2.116 unit',
            type: '25/60 FLPP'
        }
    },
    {
        address: 'Tangerang',
        name: 'Bayur Sarana Indah',
        slug: 'bayur_sarana_indah',
        marker: 'Sold Out',
        image: tg_2,
        details: {
            image: [tg_2, bsi],
            image_marker: [marker_soldout],
            link: ' https://maps.app.goo.gl/xZGxSi7bBs4c3GGn8',
            description: `
                Merupakan perumahan subsidi yang berlokasi di Bayur, Tangerang. Lokasi Strategis, Hanya 20 menit menuju Bandara International Soekarno-Hatta.  Perumahan subsidi yang menawarkan hunian yang asri, nyaman dan strategis. Dikelilingi berbagai fasilitas dan sarana umum.
            `,
            address: 'Jln. Raya Kedaung Barat, Sepatan Timur, Tangerang',
            luas_proyek: null,
            total_unit: '± 284 unit',
            type: 'FLPP',
            
        }
    },
    {
        address: 'Bogor',
        name: 'Sarana Indah Residence',
        slug: 'sarana_indah_residence',
        marker: 'Sold Out',
        image: bg_1,
        details: {
            image: [tg_2],
            image_marker: [marker_soldout],
            link: '',
            description: `
                Merupakan perumahan subsidi yang berlokasi di Jln. Raya Kalisuren, Bogor. Hanya 15 menit menuju Stasiun Bojonggede. Lokasi yang dekat dengan stasiun Kereta api memudahkan mobilisasi bagi masyarakat yang bekerja di Ibu Kota Jakarta. Setelah melalui penatnya aktifitas Ibukota Sarana Indah Residence sangat cocok bagi anda yang ingin tinggal di wilayah tenang, asri, nyaman dan strategis dan Dikelilingi berbagai fasilitas.
            `,
            address: 'Jln. Raya Kalisuren, Kalisuren, Kec. Tajur Halang, Kabupaten Bogor',
            luas_proyek: null,
            total_unit: '± 279 unit',
            type: 'FLPP'
        }
    },
    {
        address: 'Bogor',
        name: 'Grand Residence Indah',
        slug: 'grand_residence_indah',
        marker: 'Sold Out',
        image: bg_2,
        details: {
            image: [tg_2],
            image_marker: [marker_soldout],
            link: '',
            description: `
                Merupakan perumahan subsidi yang berlokasi di Kec Bojonggede, Kabupaten Bogor. LOKASI STRATEGIS! Hanya 10 menit menuju Stasiun Bojonggede. Lokasi yang dekat dengan stasiun Kereta api memudahkan mobilisasi bagi masyarakat yang bekerja di Ibu Kota Jakarta. Setelah melalui penatnya aktifitas Ibukota, Grand Residence Indah sangat cocok bagi anda yang ingin tinggal di wilayah tenang, asri, nyaman dan strategis dan dikelilingi berbagai fasilitas.
            `,
            address: 'Jln. Duren Baru Poncol, Susukan, Kec Bojonggede, Kabupaten Bogor, Jawa Barat',
            luas_proyek: null,
            total_unit: '± 451 unit',
            type: 'FLPP'
        }
    },
]

const list_sosmed = [
    {
        icon: facebook,
        link: 'https://www.facebook.com/GrandVillageSepatan/'
    },
    {
        icon: instagram,
        link: 'https://www.instagram.com/grandvillagesepatan/'
    },
    {
        icon: tiktok,
        link: 'https://www.tiktok.com/@grandvillagesepatan_tgr'
    },
    {
        icon: youtube,
        link: 'https://www.youtube.com/grandvillagesepatan/'
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
    subsidi,
    header,
    header_1,
    why
}