import { PropTypes } from 'prop-types'
import React from 'react';
export const ShowIncrement = React.memo(({increment}) => {
    console.log('Generar');
  return (
    <button className="btn btn-primary mt-2" onClick={()=> increment(5)}>Incrementar</button>
  )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired,
}
