import React, {Component} from 'react';
import './App.css';
import Board from "./Board/Board";

class App extends Component {
    state = {
        squares: Array(9).fill(''),
        xIsNext: true,
        complete: false,
        winner: null
    }

    squareClicked = (index) => {
        if (!this.state.complete) {
            const squares = [...this.state.squares];
            let xIsNext = this.state.xIsNext;
            squares[index] = xIsNext ? 'X' : 'O';
            const winner = this.computeWinner(squares);
            if (winner) {
                this.setState({complete: true, winner: winner})
            }
            this.setState({squares: squares, xIsNext: !xIsNext});
        }
    };

    computeWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        return (
            <div className="App">
                <Board squares={this.state.squares} click={this.squareClicked}/>
                <div className="Winner">
                    {this.state.winner ? <p>{this.state.winner + " Wins!!!"}</p> : null}
                </div>
            </div>
        );
    }
}

export default App;
