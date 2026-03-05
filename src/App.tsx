import Style from './App.module.css';
import {useState} from "react";
import Button from "./components/button";
import InfoBlock from "./components/infoBlock";
import classNames from "classnames";

function App() {
    const [list, setList] = useState<number[]>([]);
    const alert = false;

  return (
      <div className={classNames(Style.Card, alert ? Style.RedAlert : null)}>
          {list.map((elem, index) => (
              <InfoBlock key={'list_'+index} heading={elem}/>
          ))}
          <Button
              onClick={() => setList((prev) => [...prev, prev.length])}>
              <p>Добавить элемент</p>
          </Button>
      </div>
  )
}

export default App
