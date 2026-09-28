import { useEffect, useState } from 'react';
import { useBasket } from '../basket/BasketContext';
import { formatPrice } from '../money';

export default function Menu() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/menu')
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading menu…</p>;

  const categories = [...new Set(data.items.map((item) => item.category))];

  return (
    <>
      <section className="venue">
        <h1>{data.venue.name}</h1>
        <p>{data.venue.location}</p>
      </section>
      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="menu-list">
            {data.items
              .filter((item) => item.category === category)
              .map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
          </ul>
        </section>
      ))}
    </>
  );
}

function MenuItem({ item }) {
  const { addItem } = useBasket();
  const [selected, setSelected] = useState([]);

  const toggle = (modifier) => {
    setSelected((current) =>
      current.some((m) => m.id === modifier.id)
        ? current.filter((m) => m.id !== modifier.id)
        : [...current, modifier]
    );
  };

  return (
    <li className={`menu-item ${item.available ? '' : 'sold-out'}`}>
      <div className="menu-item-main">
        <div>
          <h3>{item.name}</h3>
          <p className="price">{formatPrice(item.price)}</p>
        </div>
        <button
          className="btn"
          disabled={!item.available}
          onClick={() => {
            addItem(item, selected);
            setSelected([]);
          }}
        >
          {item.available ? 'Add' : 'Sold out'}
        </button>
      </div>
      {item.modifiers.length > 0 && item.available && (
        <div className="modifiers">
          {item.modifiers.map((modifier) => (
            <label key={modifier.id}>
              <input
                type="checkbox"
                checked={selected.some((m) => m.id === modifier.id)}
                onChange={() => toggle(modifier)}
              />
              {modifier.name} (+{formatPrice(modifier.price)})
            </label>
          ))}
        </div>
      )}
    </li>
  );
}
