
export default class ShopServices {
    data = [
        {
            id: 1,
            title: 'Ботинки Adidas',
            price: 123,
            category: 'boots',
            image: 'https://a.lmcdn.ru/product/A/D/AD002AMFWTR2_8977093_1_v1.jpg'
        },
        {
            id: 2,
            title: 'Кроссовки Puma',
            price: 234,
            category: 'boots',
            image: 'https://a.lmcdn.ru/product/P/U/PU053AMIHIJ6_10344361_1_v1.jpg'
        },
        {
            id: 3,
            title: 'Куртка Puma',
            price: 443,
            category: 'clothing',
            image: 'https://a.lmcdn.ru/product/P/U/PU053EMIGUI1_10403844_1_v1_2x.jpg'
        },
        {
            id: 4,
            title: 'Кроссовки asics',
            price: 1200,
            category: 'boots',
            image: 'https://a.lmcdn.ru/product/A/S/AS455AMHUZE5_10389888_1_v1.jpg'
        },
        {
            id: 5,
            title: 'Водолазка Tezenis',
            price: 559,
            category: 'clothing',
            image: 'https://a.lmcdn.ru/product/M/P/MP002XM248HO_8211822_1_v2.jpg'
        },
        {
            id: 6,
            title: 'Свитшот Nike',
            price: 2100,
            category: 'clothing',
            image: 'https://a.lmcdn.ru/product/N/I/NI464EMGQVH1_9535955_1_v2_2x.jpg'
        },
        {
            id: 7,
            title: 'Рубашка Odji',
            price: 999,
            category: 'clothing',
            image: 'https://a.lmcdn.ru/product/M/P/MP002XM20MHO_10073839_1_v3.jpeg'
        },
        {
            id: 8,
            title: 'Худи Pull&Bear',
            price: 2900,
            category: 'clothing',
            image: 'https://a.lmcdn.ru/product/I/X/IX001XM0002P_7437057_1_v3.jpeg'
        },
        {
            id: 9,
            title: 'Сумка спортивная Nike',
            price: 2500,
            category: 'accessories',
            image: 'https://a.lmcdn.ru/product/N/I/NI464BMHTQA7_10337692_1_v1.jpg'
        },
        {
            id: 10,
            title: 'Бейсболка Tommy Jeans',
            price: 1999,
            category: 'accessories',
            image: 'https://a.lmcdn.ru/product/T/O/TO052CUHXNX7_10711291_1_v1.jpg'
        }, 
        {
            id: 11,
            title: 'Очки солнцезащитные Polaroid',
            price: 4100,
            category: 'accessories',
            image: 'https://a.lmcdn.ru/img600x866/P/O/PO003DUIUVP8_10608474_1_v1.jpg'
        },
    ]
    getAll() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.data)
            }, 1000)
        })
    }
}