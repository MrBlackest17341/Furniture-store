import React from "react";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Items from "./componets/items";
import Categories from "./componets/Categories";
import ShowFullItem from "./componets/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-blue.png',
          desc: 'Просто темно-синий стул',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол серый',
          img: 'table-grey.png',
          desc: 'Просто серый стол',
          category: 'tables',
          price: '189.00'
        },
        {
          id: 3,
          title: 'Диван серый',
          img: 'sofa-grey.jpg',
          desc: 'Просто серый диван',
          category: 'sofas',
          price: '189.00'
        }
      ],
      orders: [],
      currentItems: [],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/> 
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items}) 
      return     
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })  
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if (!isInArray)
      this.setState(prevState => ({orders: [...prevState.orders, item]})
    );
  }
}

export default App;

