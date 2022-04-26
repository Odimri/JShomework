const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 'item', price = 200) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    let goodsLs = goodsList.join('');
    document.querySelector('.goods-list').innerHTML = goodsLs;
}
renderGoodsList(goods);

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.items = goods;
    }
    priceSum() {
        return this.items.reduce((prev, { price }) => {
            return prev + price
        }, 0)
    }
    render() {
        const goods = this.items.map(item => {
            const goodItem = new GoodsItem(item);
            return goodItem.render()
        }).join('');

        document.querySelector('.goods-list').innerHTML = goods;
    }
}
const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();
goodsList.priceSum();