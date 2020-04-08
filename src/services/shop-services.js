
export default class ShopServices {
    data = [
        {
            id: 1,
            title: 'Ботинки Adidas',
            price: 123,
            category: 'boots'
        },
        {
            id: 2,
            title: 'Кроссовки Puma',
            price: 234,
            category: 'boots'
        },
        {
            id: 3,
            title: 'Куртка Puma',
            price: 443,
            category: 'clothing'
        },
        {
            id: 4,
            title: 'Кроссовки asics',
            price: 1200,
            category: 'boots'
        },
        {
            id: 5,
            title: 'Водолазка Tezenis',
            price: 559,
            category: 'clothing'
        },
        {
            id: 6,
            title: 'Свитшот Nike ',
            price: 2100,
            category: 'clothing'
        },
        {
            id: 7,
            title: 'Рубашка Odji',
            price: 999,
            category: 'clothing'
        },
        {
            id: 8,
            title: 'Худи Pull&Bear',
            price: 2900,
            category: 'clothing'
        },
        {
            id: 9,
            title: 'Сумка спортивная Nike',
            price: 2500,
            category: 'accessories'
        },
        {
            id: 10,
            title: 'Бейсболка Tommy Jeans',
            price: 1999,
            category: 'accessories'
        }, 
        {
            id: 11,
            title: 'Очки солнцезащитные Polaroid',
            price: 4100,
            category: 'accessories'
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