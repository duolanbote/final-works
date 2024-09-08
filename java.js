const cars = [
    {
        img: 'car1.jpg',
        desc: 'This is an excellent performance of the family car, economical and practical.'
    },
    {
        img: 'car2.jpg',
        desc: 'This is a luxury SUV for long trips.'
    },
    {
        img: 'car3.jpg',
        desc: 'This is a sports car with the perfect combination of speed and passion.'
    },
    {
        img: 'car4.jpg',
        desc: 'This is a hybrid car, ideal for environmental protection and energy saving.'
    },
    {
        img: 'car5.jpg',
        desc: 'This is a classic vintage car with a unique charm.'
    }
];

function showCar(index) {
    document.getElementById('car-img').src = cars[index].img;
    document.getElementById('car-desc').textContent = cars[index].desc;
}
