import { products, setAddProduct, setReomoveProduct } from './productsReduser';

let state = {
    dataProducts: [
        {   
            id: 1,
            name: 'Велосипед Discovery Flipper AM DD 13\" 24\" 2021 Черно-синий с оранжевым (RET-DIS-24-050)',
            description: 'Велосипед Champion Spark 29\"17\" Черный-Зеленый-Белый',
            price: 5459.99,
            thumbnail: 'https://titanbike.ua/1023-home_default/champion-spark-29-17-black-green-white.jpg'
        },
        {
            id: 2,
            name: 'Велосипед Champion Spark 29\"17\" Черный-Неоновый желтый-Белый',
            description: 'Размер рамы: \"15\"; Класс: Хардтейл; Количество скоростей 21',
            price: 5299.99,
            thumbnail: 'https://titanbike.ua/1077-home_default/champion-spark-29-17-black-neon-yellow-white.jpg'
        },
        {
            id: 3,
            name: 'Велосипед Cross Leader V2 27.5\" 19\" Черный-Темный зеленый-Зеленый',
            description: 'Размер рамы: \"15\"; Класс: Хардтейл; Количество скоростей 21',
            price: 5459.99,
            thumbnail: 'https://titanbike.ua/1286-home_default/cross-leader-v2-275-19-black-darkgreen-green.jpg'
        },
        {
            id: 4,
            name: 'Велофара Fenix BC25R Cree XP-G3',
            description: 'Размер рамы: \"15\"; Класс: Хардтейл; Количество скоростей 21',
            price: 5249.99,
            thumbnail: 'https://titanbike.ua/1142-home_default/crossbike-shark-275-17-black-neonyellow-white.jpg'
        },
        {
            id: 5,
            name: 'Cross Hunter 29\" 20\" Серый',
            description: 'Размер рамы: \"15\"; Класс: Хардтейл; Количество скоростей 21',
            price: 249.99,
            thumbnail: 'https://titanbike.ua/1205-home_default/cross-hunter-29-20-grey.jpg'
        },
        {
            id: 6,
            name: 'Велосипед CrossBike Shark 27.5\" 17\" Черный-Красный-Серый',
            description: 'Размер рамы: \"15\"; Класс: Хардтейл; Количество скоростей 21',
            price: 5249.99,
            thumbnail: 'https://titanbike.ua/1285-home_default/cross-leader-v2-275-19-black-blue-red.jpg'
        }
    ],
};

test('new product should be added', () => {
    const data = {
        id: Math.round(Math.random()*10000), 
        name: 'Велосипед Giant STP 20 Concrete (2104023110)', 
        description: 'Детский велосипед Giant STP 20 Concrete разработан для малышей, предпочитающих активный отдых вместо просмотра телевизора.', 
        price: 14700.00
    };

    let action = setAddProduct(data);

    let newState = products(state, action);

    expect(newState.dataProducts.length).toBe(7);
});

test('after deleting length of products should be decrement', () => {

    let action = setReomoveProduct(6);

    let newState = products(state, action);

    expect(newState.dataProducts.length).toBe(5);
});

test('after deleting length of products should`t be decrement if id is incorrect', () => {

    let action = setReomoveProduct(1000);

    let newState = products(state, action);

    expect(newState.dataProducts.length).toBe(6);
});