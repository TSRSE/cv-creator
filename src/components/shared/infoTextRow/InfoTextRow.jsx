import React from 'react'

export default function InfoTextRow({field = 'field', value = 'value'}) {
  return (
    <p>{field} : {value}</p>
  )
}
