import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';


test('Duplicate Expense list item test.', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}></ExpenseListItem>);
    expect(wrapper).toMatchSnapshot();
})