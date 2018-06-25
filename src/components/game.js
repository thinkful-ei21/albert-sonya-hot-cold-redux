import React from 'react';

import {connect} from 'react-redux';
import {makeGuess, newGame} from '../actions/index.js';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export function Game(props) {
  return (
    <div>
      <Header
        onRestartGame={() => props.dispatch(newGame())}
        // onGenerateAuralUpdate={() => this.generateAuralUpdate()}
      />
      <main role="main">
        <GuessSection
          feedback={props.feedback}
          guessCount={props.guesses.length}
          onMakeGuess={guess => props.dispatch(makeGuess(guess))}
        />
        <StatusSection
          guesses={props.guesses} 
          // auralStatus={auralStatus}
        />
        <InfoSection />
      </main>
    </div>
  );
}

Game.defaultProps = {
  gusses: [],
  feedback: 'Make a guess!',
  auralStatus: '',
  correctAnswer: 0
};

const mapStoreToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  correctAnswer: state.correctAnswer
});

export default connect(mapStoreToProps)(Game);
