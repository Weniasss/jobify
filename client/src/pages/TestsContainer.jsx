import React from 'react'
import { useAllTestsContext } from './AllTests'
import SingleTest from './SingleTest'

const TestsContainer = () => {

    const {data} = useAllTestsContext()
    const {tests} = data;


  return (
    <div>{tests.map((test) => {
        return <SingleTest key={test._id} {...test} />;
      })}</div>
  )
}

export default TestsContainer