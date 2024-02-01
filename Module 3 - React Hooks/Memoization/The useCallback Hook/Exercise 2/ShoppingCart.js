import React from 'react';

import CartTable from './CartTable';

function ShoppingCart({ items }) {
  const [postalCode, setPostalCode] =
    React.useState('');
  const postalCodeId = React.useId();

  const inStockItems = React.useMemo(
    () => items.filter((item) => item.inStock),
    [items]
  );
  const outOfStockItems = React.useMemo(
    () => items.filter((item) => !item.inStock),
    [items]
  );

  return (
    <>
      <h2>Shopping cart</h2>

      <form>
        <label htmlFor={postalCodeId}>
          Enter Postal / ZIP code for shipping
          estimate:
        </label>
        <input
          id={postalCodeId}
          type="text"
          value={postalCode}
          onChange={(event) => {
            setPostalCode(event.target.value);
          }}
        />
      </form>

      <CartTable items={inStockItems} />

      <div className="actions">
        <button>Continue checkout</button>
      </div>

      <h2>Sold out</h2>
      <CartTable items={outOfStockItems} />
    </>
  );
}

export default ShoppingCart;