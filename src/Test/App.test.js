import React from 'react'
import { shallow } from 'enzyme'

import App from '../Components/App'
import AddPerson from '../Components/AddPerson'


describe('App', () => {
  it('shows a button on main page', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('button')

    expect(button).toHaveLength(1)
    expect(button.text()).toBe('Add Person')
  })

  it('shows AddPerson when button is clicked', () => {
    const wrapper = shallow(<App />)
    
    wrapper.instance().addPerson()
    
    const addPersonWrapper = wrapper.find(AddPerson)

    expect(addPersonWrapper).toHaveLength(1)
  })
})