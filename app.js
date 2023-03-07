let btn = document.querySelectorAll('.btn');
let item = document.querySelectorAll('.item');

console.log(btn);
console.log(item);

// Проходимся по кнопкам
for (let i = 0; i <btn.length; i++) {
    btn[i].addEventListener('click', function() {

        // Удаляем у всех кнопок класс active
        for (let j = 0; j <btn.length; j++) {
            btn[j].classList.remove('active')
        }

        // Добавляем определенной кнопке btn[i] клас active
        this.classList.add('active');
        console.log(this); //html элемент btn

        // Получаем данные data-target 
        let targetData = this.getAttribute('data-target')
        console.log(targetData); //all, green, blue, red, что-то одно!

        // Проходимся по каждому элементу item и удаляем класс show и добавляем класс hide у всех item
        for (let k = 0; k <item.length; k++) {
            item[k].classList.remove('show');
            item[k].classList.add('hide');

            // Получаем данные data-item
            let itemData = item[k].getAttribute('data-item')
            console.log(itemData); // green*3, blue*3, red*3 - возвращает все атрубуты всех item
            
            //Если кликаем по btn-green то 3 true и 6 false итп
            console.log(itemData == targetData); 
            
            // Если itemData == targetData или targetData == 'all'
            // ИЛИ || возвращает первое истинное значение или последнее, поэтому при клике по кнопке all срабатывает targetData == 'all' и все {}; При клике по btn-green только 3 значения (где itemData == green) выполняеются в {}
            if (itemData == targetData || targetData == 'all') {
                item[k].classList.remove('hide');
                item[k].classList.add('show');
            }
        }

    });
}
