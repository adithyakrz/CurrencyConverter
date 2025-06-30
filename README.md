# Currency Converter

A simple React app to convert between different currencies using live exchange rates.

## Features

- Convert any amount between supported currencies
- Live exchange rates fetched from [Fawaz Ahmed's Currency API](https://github.com/fawazahmed0/currency-api)
- Swap currencies with a single click
- Clean, responsive UI with Tailwind CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/currency-converter.git
    cd currency-converter
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  components/
    inputbox.jsx      # Input component for amount and currency selection
    index.js          # Component exports
  hooks/
    useCurrencyInfo.js # Custom hook for fetching currency rates
  App.jsx             # Main app component
  App.css             # Styles (uses Tailwind CSS)
```

## How It Works

- Enter an amount and select the source and target currencies.
- Click **Convert** to see the converted amount.
- Use the **Swap** button to quickly switch source and target currencies.

## License

MIT
