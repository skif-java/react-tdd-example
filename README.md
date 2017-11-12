# React TDD

## Objectives

- Practice TDD with React, Jest, and enzyme

## Rationale

TDD is a requirement in modern software development. The functional nature of React, combined with helpful libraries like enzyme make the React TDD workflow very appealing, but without practice developers might be tempted to fall back to pre-TDD ways. This exercise gives students practice with the TDD workflow and enzyme.

## Setup

1. Fork this repo
1. Clone your fork
1. Run `yarn install`
1. Run `yarn test` and verify existing tests pass
1. Write your own test for the next functionality that fails
1. Write the code to make the test pass
1. Repeat!

When you are done, try the app in a browser and enjoy the satisfaction of seeing what you have built!

## Instructions

This repo contains the List part of CRUDL. It is up to you to implement the rest, using TDD:

1. Use enzyme to verify firstName and lastName are populated in PersonEdit
1. Use [simulate](https://github.com/airbnb/enzyme/blob/master/docs/api/ShallowWrapper/simulate.md) to simulate text change and click events
1. Use sinon to stub the `onEdit()` call
1. Verify the stub was called with the correct arguments.

When you are satisfied with `Edit`, go on to implement `Create` and `Delete` using TDD, writing the smallest failing test, then the least code to make the test pass!
