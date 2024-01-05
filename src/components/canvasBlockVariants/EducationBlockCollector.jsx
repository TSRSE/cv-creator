import React from 'react'
import EducationBlock from './EducationBlock'

export default function EducationBlockCollector({fieldArray=[]}) {
    const fileds = fieldArray.map((x, index) => <EducationBlock key={`edBlock_`+index} displayableText = {x} />)
  return (
    <>
    {fileds}
    </>
  )
}
