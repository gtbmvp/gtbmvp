/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */
const CATEGORIES = ["Отели", "Одежда", "Обувь", "Электроника", "Дом", "Сад", "Детские товары"].map(cat=>({id: String(Date.now()), name: cat, photo: Date.now() % 2 ? undefined : cat + '.png'}));
const NAMES = ["Купон", "Вещь", "Скидка", "Товар", "Промо"]; 

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
**/
type Category = {
    id: string;
    name: string;
    photo?: string;
}
/**
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
**/
type Product = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category;
}
/**
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
type Operation = Cost | Profit;
type Cost = {
     id: string;
     name: string; 
     desc?: string; 
     createdAt: string; 
     amount: number; 
     category: Category;
     type: 'Cost';
}

type Profit = {
     id: string;
     name: string; 
     desc?: string; 
     createdAt: string; 
     amount: number; 
     category: Category;
     type: 'Profit';
}
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
    class RandomProduct implements Product {
        id = String(Date.now());
        name = NAMES[Math.round(Math.random()*(NAMES.length - 1))];
        photo = this.name + '.jpg';
        desc = +this.id % 2 ? this.name + " is great product" : undefined;
        createdAt:string;
        oldPrice = Math.round(Math.random()*10000);
        price = Math.round(Math.random()*5000);
        category = CATEGORIES[Math.round(Math.random()*(CATEGORIES.length - 1))];

        constructor(createdAt:string) {
            this.createdAt = createdAt;
        }
    }

    return new RandomProduct(createdAt);
}; 

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
    class RandomOperation {
        id:string = String(Date.now());
        name:string = NAMES[Math.round(Math.random()*(NAMES.length - 1))];
        desc?:string = +this.id % 2 ? this.name + ' is great operation' : undefined;
        createdAt: string; 
        amount:number = Math.round(Math.random()*20); 
        category:Category = CATEGORIES[Math.round(Math.random()*(CATEGORIES.length - 1))];
        type:'Cost'|'Profit' = +this.id % 2 ? 'Cost' : 'Profit';

        constructor(createdAt: string) {
            this.createdAt = createdAt;
        }
    }

    return new RandomOperation(createdAt);
};
