import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import AddPerson from '../Components/AddPerson.js'

describe('AddPerson Component', () => {
  it('has state for hold information for the form', () => {
    const wrapper = shallow(<AddPerson />)
    const state = wrapper.state()
    
    expect(state.firstName).toBe('')
    expect(state.lastName).toBe('')
  })

  it('has input fields', () => {
    const wrapper = shallow(<AddPerson />)

    expect(wrapper.find('input[type="text"][name="firstName"]')).toHaveLength(1)
    expect(wrapper.find('input[type="text"][name="lastName"]')).toHaveLength(1)
  })
  
  it('input fields are captured by state', () => {
    const wrapper = shallow(<AddPerson />)

    const firstNameField = wrapper.find('input[type="text"][name="firstName"][value=""]')
    const lastNameField = wrapper.find('input[type="text"][name="lastName"][value=""]')
    
    expect(firstNameField).toHaveLength(1)
    expect(lastNameField).toHaveLength(1)
    
  })
  it('state changes when there is a change event on input', () => {
    const wrapper = shallow(<AddPerson />)
    const FIRST_NAME = 'Kurt'
    const LAST_NAME = 'Goedel'

    const changeFirstName = { target: { name:'firstName' , value: FIRST_NAME }}
    const changeLastName = { target: { name:'lastName' , value: LAST_NAME }}

    wrapper.find('input[type="text"][name="firstName"]').simulate('change', changeFirstName)
    wrapper.find('input[type="text"][name="lastName"]').simulate('change', changeLastName)

    const state = wrapper.state()

    expect(state.firstName).toBe(FIRST_NAME)
    expect(state.lastName).toBe(LAST_NAME)
  })
  it('has create person and cancel button', () => {
    const wrapper = shallow(<AddPerson />)

    const addButton = wrapper.find('button.add')
    expect(addButton).toHaveLength(1)
    expect(addButton.text()).toBe('Add Person')
    
    const cancelButton = wrapper.find('button.cancel')
    expect(cancelButton).toHaveLength(1)
    expect(cancelButton.text()).toBe('Go Back')
  })

  it('submits new name and cleans out state', () => {
    const spy = sinon.spy()

    const wrapper = shallow(<AddPerson addPerson={spy}/>)
    wrapper.setState({ firstName: 'Kurt', lastName:'Goedel'})
    
    wrapper.find('button.add').first().simulate('click')
    
    const state = wrapper.state()

    expect(spy.calledOnceWith('Kurt', 'Goedel')).toBe(true)
    expect(state.firstName).toBe('')
    expect(state.lastName).toBe('')

  })

})