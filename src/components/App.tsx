// src/App.tsx

import Product from './Product';
import Book from './Book';
import Mailbox from './Mailbox';
import Alert from './Alert';

export default function App() {
  return (
    <>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <Book />
      <Mailbox
        username="Yurii"
        messages={[
          'Hello',
          "Don't forget to practice",
          'Meeting at 3 PM',
          'Wash the car',
        ]}
      />
      
      <Alert />
      <Alert type="success"  />
      <Alert type="error" />
     
    </>
  );
}

//Стилізація компонентів

/**
 * вбудовані стилі // через атрибут style={{}}
- Швидко, але обмежено.
- Не підтримує псевдокласи та медіазапити.
- Погано масштабується. 
 * 
 * Ванільний стиль
 -Працює як звичайний CSS, але всі класи глобальні.
- Можливі конфлікти між стилями з різних компонентів. * 
 * 
 * CSS-модулі
 * 
 */
