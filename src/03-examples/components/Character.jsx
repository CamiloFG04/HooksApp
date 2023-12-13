import { PropTypes } from 'prop-types'
import { useLayoutEffect, useRef, useState } from 'react'
export const Character = ({name, status}) => {

  const pRef = useRef()

  const [boxSize, setBoxSize] = useState({width:0, height: 0})

  useLayoutEffect(() => {
    const {width,height} = pRef.current.getBoundingClientRect();
    setBoxSize({width,height})
  }, [])
  return (
    <>
      <blockquote className="blockquote text-end" style={{display:'flex'}}>
          <p className="mb-1" ref={pRef}>{name}</p>
          <footer className="blockquote-footer">{status}</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}

Character.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
}
