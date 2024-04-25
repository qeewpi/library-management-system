import AuthService from "./AuthService";

class CartService {
  constructor() {
    // Retrieve the user data from local storage
    let userData = JSON.parse(localStorage.getItem("user"));

    // Create a cart object
    this.cart = {
      user: {
        id: null,
      },
      books: [],
    };
  }

  // Function to get cart
  getCart = () => {
    return JSON.parse(localStorage.getItem("cart"));
  };

  // Function to get books in cart
  getBooksInCart = () => {
    let cart = this.getCart();
    return cart ? cart.books : [];
  };

  // Function to create a new cart
  createCart() {
    let user = AuthService.getCurrentUser();
    this.cart = {
      user: {
        id: user.id,
      },
      books: [],
    };
    this.saveCart();
  }

  // Function to add a book to the cart
  addBookToCart(bookIds) {
    // If bookIds is not an array, convert it to an array
    if (!Array.isArray(bookIds)) {
      bookIds = [bookIds];
    }

    let user = AuthService.getCurrentUser();
    this.cart.user.id = user.id;

    bookIds.forEach((bookId) => {
      // Check if the book is already in the cart
      if (!this.cart.books.some((book) => book.id === bookId)) {
        // If not, add it to the cart
        this.cart.books.push({ id: bookId });
      }
    });

    this.saveCart();
  }

  // Function to remove a book from the cart
  removeBookFromCart(bookId) {
    bookId = String(bookId);
    this.cart.books = this.cart.books.filter((book) => book.id !== bookId);
    this.saveCart();
  }

  // Function to empty the cart
  emptyCart() {
    this.cart.books = [];
    this.saveCart();
  }

  // Function to save the cart to local storage
  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  // Function to clear the cart
  clearCart() {
    localStorage.removeItem("cart");
  }
}

export default new CartService();
