import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import Categories from './components/Categories';

class  App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      orders: [],
      currentITems: [],
      items: [
        {
          id: 1,
          title: 'BMW M3',
          img : 'bmw.m3.webp',
          desc: '2020г 3.0л/510л.c/Бензин/Белый',
          category: 'BMW',
          price: '12.000'
      },
      {
          id: 2,
          title: 'BMW M2',
          img : 'bmwm2m2.jpg',
          desc: '2022г 3.0л/460 л.c./Бензин/Голубой',
          category: 'BMW',
          price: '8.000'
      },
      {
          id: 3,
          title: 'Mercedes-Benz e55',
          img : 'mers.jpg',
          desc: '2003г 5.4л./500 л.с./Бензин/Черный',
          category: 'Mercedes',
          price: '5.000'
      },
      {
          id: 4,
          title: 'Mercedes-Benz e63 amg',
          img : 'e63.jpg',
          desc: '2018г 4.0л./500 л.с/Бензин/Серый',
          category: 'Mercedes',
          price: '9.000'
      },
      {
          id: 5,
          title: 'Audi r8',
          img : 'Audir8.avif',
          desc: '2020г 5.2л/620 л.с/Бензин/Белый',
          category: 'Audi',
          price: '19.100'
      },
      {
          id: 6,
          title: 'Audi A6',
          img : 'AudiA6a6.webp',
          desc: '2023г 2.0л/245 л.c/Бензин/Черный',
          category: 'Audi',
          price: '88.000'
      },
      {
        id: 7,
        title: 'Rolls-Royce Wtraith',
        img : 'Rolls.jpg',
        desc: '2013г 6.6л /632л.с/Бензин/Синий',
        category: 'Rolls',
        price: '54.743'
    },
     {
          id: 8,
          title: 'Rolls-Royce Cullinan',
          img : 'Royce.jpeg',
          desc: '2020г 6.8л/571 л.c/Бензин/Белый',
          category: 'Rolls',
          price: '79.925'
      },
      {
        id: 9,
        title: 'Rolls-Royce Ghost-2',
        img : 'Ghost.jpg',
        desc: '2023г 6.8л/571 л.c/Бензин/Белый',
        category: 'Rolls',
        price: '62.407'
    },
    {
      id: 10,
      title: 'BMW M8',
      img : 'm8.webp',
      desc: '2019г 4.44л/625 л.c/Бензин/Красный',
      category: 'BMW',
      price: '13.138'
  },
  {
    id: 11,
    title: 'Mercedes-Benz w-140',
    img : 'Benz.jpg',
    desc: '2002г 4.2л/321 л.c/Бензин/Черный',
    category: 'Mercedes',
    price: '7.127'
},
{
  id: 12,
  title: 'Audi A4',
  img : 'a4.jpg',
  desc: '2021г 2.0л/249 л.c/Бензин/Коричневый',
  category: 'Audi',
  price: '3.321'
},
      
      ]
    }
  this.addToOrder = this.addToOrder.bind(this);
  this.deleteOrder = this.deleteOrder.bind(this);
  this.chooseCategory = this.chooseCategory.bind(this);
  this.state.currentITems = this.state.items


  }


  render() {
  return (
    <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items  items={this.state.currentITems} onAdd={this.addToOrder}/>
        <Footer/>
    </div>
  );
}

chooseCategory(category) {
  if (category === 'all') {
    this.setState({ currentITems: this.state.items})
    return
  }
  this.setState({
    currentITems: this.state.items.filter(el => el.category === category)
  }) 

}

deleteOrder (id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})

}

    addToOrder(item) {
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
