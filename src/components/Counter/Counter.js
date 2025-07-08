import { useState, useEffect, useReducer } from 'react';
import styles from './Counter.module.css';

function reduce (prevState, nextState){
  return prevState + nextState
}

function reduce2 (prevState, action){
  if(action.type === 'increment') return prevState + action.payload
  if(action.type === 'decrement') return prevState - action.payload
}

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  // const [counterB, setCounterB] = useState(0);

  const [counterB, setCounterB] = useReducer(reduce,0)

  const [counterC, setCounterC] = useReducer(reduce2,0)

  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1);
  };
  const handleCounterBIncrement = () => {
    setCounterB(1);
  };
  const handleCounterBDecrement = () => {
    setCounterB(-1);
  };
  const handleCounterCIncrement = () => {
    setCounterC({type:'increment', payload:1});
  };
  const handleCounterCDecrement = () => {
    setCounterC({type:'decrement', payload:1});
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `All clicks ${totalClicks} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        click counterA {counterA} 
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        increment counterB {counterB} 
      </button>
      
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBDecrement}
      >
        decrement counterB {counterB} 
      </button>
            <button
        className={styles.btn}
        type="button"
        onClick={handleCounterCIncrement}
      >
        increment counterC {counterC} 
      </button>
      
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterCDecrement}
      >
        decrement counterC {counterC} 
      </button>
    </>
  );
}

// class OldCounter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

// componentDidMount() {
//   const { counterA, counterB } = this.state;
//   const totalClicks = counterA + counterB;

//   document.title = `All clicks ${totalClicks}`;
// }

// componentDidUpdate(prevProps, prevState) {
//   const { counterA, counterB } = this.state;

//   if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//     const totalClicks = counterA + counterB;

//     document.title = `All clicks ${totalClicks}`;
//   }
// }

//   render() {
//     return (
//       <>
//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterAIncrement}
//         >
//           Click counterA {this.state.counterA}
//         </button>

//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterBIncrement}
//         >
//           Click counterB {this.state.counterB}
//         </button>
//       </>
//     );
//   }
// }