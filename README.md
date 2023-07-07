# Project Document

## Introduction
This document provides an overview and documentation for the given code base. The code base consists of a React application that includes several components, pages, and Redux store integration. The application provides functionalities for searching and displaying products, managing a wishlist, and managing a shopping cart.

## Code Structure
The code base is structured into several files and directories. Here is an overview of the main files and directories:

- `src/components`: Contains reusable components used throughout the application.
- `src/pages`: Contains the main pages of the application.
- `src/store`: Contains the Redux store configuration and slices.
- `src/store/api.ts`: Contains API calls related to fetching products and categories.
- `src/App.tsx`: Contains the main application component.
- `src/index.tsx`: Entry point of the application.

## Dependencies
The code base has dependencies on the following packages:

- `react`: Library for building user interfaces.
- `react-router-dom`: Library for routing within a React application.
- `react-redux`: Library for integrating Redux with React components.
- `@mui/icons-material`: Material-UI icons package.
- `@headlessui/react`: A set of completely unstyled, fully accessible UI components for React.

## Functionality
The code base provides the following functionality:

- The App component is the main entry point of the application. It sets up the Redux store, defines routes using react-router-dom, and renders the main layout of the application.
- The Navbar component represents the application's navigation bar and includes a search input, links to different pages, and icons for wishlist and shopping cart.
- The Homepage component represents the homepage of the application and displays a banner, dropdown for selecting categories, and a list of products.
- The Wishlist component displays the user's wishlist and allows them to remove items or move them to the shopping cart.
- The CartPage component displays the user's shopping cart and allows them to remove items.
- The ProductSection component displays a list of products.
- The ProductCard component represents a single product card and displays its title, price, and image.
- The Dropdown component is a reusable dropdown component that displays a list of options.
- The Input component is a reusable input component with a clearable option.
- The Footer component represents the footer section of the application and includes various links and information.

## Data Flow
The data flow in the application follows the Redux pattern. The Redux store holds the application state, which includes product data, wishlist data, and shopping cart data. Components can dispatch actions to update the state and retrieve data from the store using selectors.

- The `fetchProductsByKeyword` function in `src/store/api.ts` is responsible for fetching products based on a search keyword and updating the store state.
- The `fetchProductsByCategory` function in `src/store/api.ts` is responsible for fetching products based on a category and updating the store state.
- The `handleSearchChange` function in the App component is triggered when the user enters a search query. It updates the search query state and calls the `fetchProductsSearch` function to fetch products based on the search query.
- The `handleOptionChange` function in the Homepage component is triggered when the user selects a category from the dropdown. It updates the category state and calls the `fetchProductsCategories` function to fetch products based on the selected category.
- The `handleRemoveFromCart` function in the CartPage component is triggered when the user clicks the remove button for an item in the shopping cart. It dispatches the `removeFromCart` action to update the store state.
- The `handleRemoveFromWishlist` function in the Wishlist component is triggered when the user clicks the remove button for an item in the wishlist. It dispatches the `removeFromWishlist` action to update the store state.
- The `handleMoveToCart` function in the Wishlist component is triggered when the user clicks the move to cart button for an item in the wishlist. It dispatches the `addToCart` action to add the item to the shopping cart and dispatches the `removeFromWishlist` action to remove it from the wishlist.

## Conclusion
This document provided an overview and documentation for the given code base. It covered the code structure, dependencies, functionality, and data flow of the application. With this information, developers can understand the code base and make modifications or additions as needed.
