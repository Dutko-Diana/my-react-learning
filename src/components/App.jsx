// src/App.jsx
import Profile from './Image';
import Product from './Product';
// src/components/Product.jsx

import PropTypes from 'prop-types';

const Prodotto = ({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) => (
  <div>
		<img src={imgUrl} alt={name} width="480" />
		<h2>{name}</h2>
    <p>Price: {price} credits</p>
  </div>
);

// Опис типів пропсів компонента 
Prodotto.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export Prodotto;


function Products() {
  const width = 640;
  const price = 999;
  return (
    <div>
      <h2>Cookies</h2>
      <img
        src="https://www.foodandwine.com/thmb/IODo3eyFDVqu4W9xVprpPhEE2mM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Chocolate-Chunk-Halwah-Cookies-FT-RECIPE0923-1f8df755df6d468da98887aa846a2fe3.jpg"
        alt="chocolate chunks cookies with flaky sea salt"
        width={width}
      />
      <p>Price: {price} credits</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Product
            name="Tacos With Lime"
            imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
            price={10.99}
          />
        </li>

        <li>
          <Products name="Cookies" />
        </li>
        <li>
          <Product
            name="Fries and Burger"
            imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
            price={14.29}
          />
        </li>
      </ul>
      <Profile alt="Male Scientist" />
      <Sidebar />
      <Gallery />
      <Mailbox
        messages={[
          'Accepted',
          'You are now a part of Emirates Airlines Cabin Crew!',
          "You are flying to Dubai in 5 days, we've sent You a ticket!",
        ]}
        username="Diana"
      />
      {/* <Collection /> */}
      <Messages mails={hhivhehro} />
      <BookList books={favouriteBooks} />
      <List />
      <Children>
        <b>Hello, my name is Diana!</b>
        <p>I am a member of Emirates Airlines Cabin Crew!</p>
      </Children>
    </div>
  );
}

function Children({ children }) {
  return <p>{children}</p>;
}

const people = [
  'Кетрін Джонсон (Creola Katherine Johnson): математик',
  'Маріо Моліна (Mario José Molina-Pasquel Henríquez): хімік',
  'Абдус Салам (Moшинкаmad Abdus Salam): фізик',
  'Персі Джуліан (Percy Lavon Julian): хімік',
  'Субрахманьян Чандрасекар (Subrahmanyan Chandrasekhar): астрофізик',
];

export function List() {
  const listItems = people.map(person => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}

const hhivhehro = [
  { date: '11.01.25', text: 'Accepted' },
  {
    date: '21.01.25',
    text: 'You are now a part of Emirates Airlines Cabin Crew!',
  },
  {
    date: '18.03.25',
    text: "You are flying to Dubai in 5 days, we've sent You a ticket!",
  },
];

function Messages({ mails }) {
  return (
    <ul>
      {mails.map(mail => {
        return (
          <li key={mail.date}>
            {mail.date}, <br />
            {mail.text}
          </li>
        );
      })}
    </ul>
  );
}

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};

const logged = false;

function Sidebar() {
  if (logged) {
    return <p>Welcome!</p>;
  } else {
    return <p>Error!</p>;
  }
}

export function getImageUrl(imageId, size = 's') {
  return 'https://i.imgur.com/' + imageId + size + '.jpg';
}

function Avatar({ name, imgId, size, profession, awards, discovery }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imgId)}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Професія: </b>
          {profession}
        </li>
        <li>
          <b>Нагороди: {awards.length} </b>({awards.join(', ')})
        </li>
        <li>
          <b>Відкрито: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export function Gallery() {
  return (
    <div>
      <h1>Визначні вчені</h1>
      <Avatar
        name="Марія Склодовська-Кюрі (Maria Skłodowska-Curie)"
        imgId="szV5sdG"
        size={70}
        profession="фізик та хімік"
        awards={[
          'Нобелівська премія з фізики',
          'Нобелівська премія з хімії',
          'Медаль Дейві',
          'Медаль Маттеуччі',
        ]}
        discovery="полоній (хімічний елемент)"
      />
      <Avatar
        name="Кацуко Сарухаші (Katsuko Saruhashi)"
        imgId="YfeOqp2"
        size={70}
        profession="геохімік"
        awards={['Премія Міяке з геохімії', 'Премія Танака']}
        discovery="метод вимірювання вмісту діоксиду карбону в морській воді"
      />
    </div>
  );
}

export const Mailbox = ({ messages, username }) => {
  let msgs;
  if (messages.length > 0) {
    msgs = messages
      .map(msg => {
        return msg;
      })
      .join('; ');
  }
  return (
    <>
      {/* <p>Hello, {username}!</p>
      {messages.length > 0 && (
        <div>
          <p>You have {messages.length} unread messages.</p>
          <p>Messages: {msgs}</p>
        </div>
      )} */}

      <p>Hello, {username}!</p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread messages.</p>
          <p>Messages:</p>
          <Messages mails={hhivhehro} />
        </div>
      ) : (
        <del>You do not have any letters!</del>
      )}
    </>
  );
};
