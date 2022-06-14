import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src';

const App = () => {
  return (
    <div>
        <Button fontSize="16px" size="lg" text="Klikk her" type1="ddd"></Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
