import React, { Component } from 'react'
import Item from './item'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/>
        ))}
      </main>
    )
  }
}

export default Items