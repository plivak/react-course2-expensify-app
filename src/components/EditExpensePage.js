import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

//refactor editExpensePage to be class based component
//Setup mapDispatch to Props

export class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
    //dispatch action to edit expense
    // redirect to the dashboard
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
      this.props.startRemoveExpense({ id: this.props.expense.id });
      this.props.history.push('/');
  };
  render() {
    return (
        <div>
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Edit Expense</h1>
            </div>
            <div className="content-container">
              <ExpenseForm 
                expense = {this.props.expense}
                onSubmit={this.onSubmit} 
                />
                <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
            </div>
          </div>
        </div>
    );
  }
};



//should render EditExpensePage
//snapshot

//should handle EditExpense using spies

//should handle removeExpense using spies

// const EditExpensePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <ExpenseForm 
//         expense = {props.expense}
//         onSubmit={(expense) => {
//             //dispatch action to edit expense
//             // redirect to the dashboard
//           props.dispatch(editExpense(props.expense.id, expense));
//           props.history.push('/');
//           //console.log('updated', expense);
//          }}
//         />
//         <button onClick={() => {
//           props.dispatch(removeExpense({ id: props.expense.id }));
//           props.history.push('/');
//         }}>Remove</button>

//     </div>
//   );
// };

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);