import React from 'react';
import moment from 'moment'
import Button from 'component_app/Button'
import TimeShow from 'component_app/TimeShow'

console.log(moment())

export default () => {
  return <div>
    <h1>这是一个项目</h1>
    <Button>这是app1</Button>
    <TimeShow>这是app1</TimeShow>
  </div>
}
