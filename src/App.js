import React, { Component } from 'react';
import Caixa from './componentes/caixa/Caixa';

class App extends Component {
  render() {
    return <section>
        <div class="main">
            <div class="timer">
                <span>00</span>
                <span>00</span>
            </div>

            <div class="buttons">
                <button>+</button>
                <button>-</button>
            </div>
        </div>

        <div class="buttons">
            <button>Iniciar</button>
            <button>Zerar</button>
        </div>
        <Caixa/>
    </section>;

  }
}

export default App;
