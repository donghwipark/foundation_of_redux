import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import getRandomColor from '../lib/getRandomColor';
// Map state value in store to props
const mapStateToProps = (state) => ({counters: state.counters});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (index) => dispatch(actions.increment(index)),
  onDecrement: (index) => dispatch(actions.decrement(index)),
  onSetColor: (index) => {
    const color = getRandomColor();
    dispatch(actions.setColor({index, color}));
  }
});

// Container component of Counter component
// Acts for mapping Counter component to application data layer
const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterList);

export default CounterListContainer;


