import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems: [],
      items: [
        {id:1,
          title: 'Стул Belen',
          img: 'stul.jpg',
          desc:'Изящный стул Белен станет превосходным дополнением классической кухни и внесет в интерьер нотки утонченности и стиля.',
          category:'stul',
          price:'4.999 ₽'
        },
        {
          id:2,
          title:'Диван Parma',
          img: 'divan.jpg',
          desc:'Диван-кровать Парма выполнен в строгом минималистичном стиле. Все его поверхности имеют правильную геометрическую форму.',
          category:'divan',
          price:'25.499 ₽'
        },
        {
          id:3,
          title:'Стол Премьера',
          img:'stol.jpg',
          desc:'Трансформируемый стол Премьера поможет создать «умное» пространство в компактном помещении. Это классическая стол-книжка.',
          category:'stol',
          price:'3.699 ₽'
        },
        {
          id:4,
          title:'Стол Прато',
          img:'stol2.jpg',
          desc:'Стол Прато — классическая модель, удобство которой проверено временем. Просторная столешница и тумба с вместительными ящиками позволяют разместить под рукой всю необходимую для работы в домашнем офисе технику и аксессуары.',
          category:'stol',
          price:'7.999 ₽'
        },
        {
          id:5,
          title:'Кухонный стол раздвижной Сиэтл-КВ ',
          img:'stol3.jpg',
          desc:'Стол Сиэтл-КВ — раздвижная многофункциональная конструкция для кухни или столовой, предназначенная как для постоянного повседневного использования, так для приема гостей.',
          category:'stol',
          price:'15.999 ₽'
        },
        {id:6,
          title: 'Кресло для отдыха Гауди',
          img: 'stul2.jpg',
          desc:'Стильное кресло Гауди с лаконичным дизайном отлично впишется в интерьер классической гостиной. Благодаря компактным размерам разместить его можно в небольшом помещении.',
          category:'stul',
          price:'9.999 ₽'
        },
        {id:7,
          title: 'Стул c подлокотниками Брюгге ',
          img: 'stul3.jpg',
          desc:'Стул c подлокотниками Брюгге понравится гостеприимным хозяевам — сидеть на таком мини-кресле удобно, и время за дружеским застольем пролетит незаметно. ',
          category:'stul',
          price:'9.999 ₽'
        },
        {
          id:8,
          title:'Диван-кровать Мартин',
          img: 'divan2.jpg',
          desc:'Всё в стильном и элегантном диване Мартин располагает к отдыху: и плавные линии подлокотников, и мягкие подушки, и бархатистая микровелюровая обивка.',
          category:'divan',
          price:'39.999 ₽'
        },
        {
          id:9,
          title:'Угловой диван-кровать Рамарт Скайфол Премиум',
          img: 'divan3.jpg',
          desc:'Диван Скайфол — классический представитель стиля сканди-шик. Узкие подлокотники, объемные подушки и высокие ножки из металла делают его центром внимания в любом интерьере.',
          category:'divan',
          price:'349.999 ₽'
        }
      
      ],
      showFullItem: false,
      fullItem: {}
  }
  this.state.currentItems = this.state.items
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
  this.chooseCategory = this.chooseCategory.bind(this)
  this.onShowItem = this.onShowItem.bind(this)
}

  render() {
  
  return (
    <div className="App">
     <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
     <Categories chooseCategory={this.chooseCategory}/>
     <Items  onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
     {this.state.showFullItem && <ShowFullItem   onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
     <Footer/>
    </div>
  );
}

onShowItem(item){
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category){

  if(category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }
this.setState({
  currentItems: this.state.items.filter(el => el.category === category)
})
}

deleteOrder(id) {
this.setState({orders: this.state.orders.filter (el=> el.id!== id)})
}

addToOrder(item){
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
    isInArray = true
  })

  if(!isInArray)

  this.setState({orders: [...this.state.orders, item]})
}

}
  


export default App;
