
import * as React from 'react'
import Posts from './components/Posts/'
import CommentsReduce from './components/Comments.reduce'
import CommentsState from './components/Comments.state'
import Dashboard from './components/Dashboard'
import Users from './components/Users/'

export default {
  '/': () => <Dashboard />,
  '/posts': () => <Posts />,
  '/users': () => <Users />,
  '/comments/state': () => <CommentsState />,
  '/comments/reduce': () => <CommentsReduce />,
  '/comments/:id': ({id}) => <CommentsReduce id={id} />
};

 
