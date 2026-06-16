interface Currency<Type> {
  currency: Type;
}

type CurrencyString = Currency<string>;
type CurrencyObject = Currency<{ name: string; code: string }>;

const currencyObj1: CurrencyString = { currency: "Kwanza" };

const currencyObj2: CurrencyObject = {
  currency: { name: "Kwanza", code: "AOA" },
};
