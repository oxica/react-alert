import Alert from './Alert/Alert';

export const App = () => {
  return (
    <div>
      <Alert text="Hello World!!!" type="error" />
      <Alert text="Hello World!!!" type="warning" />
      <Alert text="Hello World!!!" type="success" />
      <Alert text="Hello World!!!" />
    </div>
  );
};
