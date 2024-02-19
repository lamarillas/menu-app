import React, { useState } from 'react'
import Title from './components/Title'
import menu from './data';
import Menu from './components/Menu';
import Categories from './components/Categories';

const tempCategories = new Set(menu.map(c => c.category));
const allCategories = ['all', ...tempCategories];

const App = () => {

  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (cat) => {
    if(cat == "all") {
      setMenuItems(menu);
      return;
    }

    const filteredMenu = menu.filter(item => item.category === cat);
    setMenuItems(filteredMenu);
  }


  return (
    <main>
      <section className='menu'>
        <Title text={'our menu'} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
