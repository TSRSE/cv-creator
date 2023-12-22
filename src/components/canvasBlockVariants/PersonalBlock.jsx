import React from 'react'
import TextType1 from '../common/texts/TextType1'

export default function PersonalBlock({children, displayableText = []}) {

  const displayTextList = Object.keys(displayableText).map((text, key) =>
    <TextType1 
      key={crypto.randomUUID()} 
      text={text + ': ' + displayableText[text]}
    />)
  
    return (
    <>
      <h4>Personal</h4>
      {displayTextList}
      {children}
    </>
    )
}
