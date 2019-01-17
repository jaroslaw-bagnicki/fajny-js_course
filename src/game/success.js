/* global alert */
import attemptsCounter from './atemptsCounter';

export default () => alert(`Mamy to! Liczba prób: ${attemptsCounter.getAttempts()}.`);
