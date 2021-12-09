import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>
        <Link to="/">Bookkeeper1</Link>
      </h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/">Main</Link> | <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link> |{' '}
      </nav>
      <Outlet />
    </div>
  );
}
