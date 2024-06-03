"use client";

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import '../styles/globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
