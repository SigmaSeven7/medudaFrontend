import React from "react"
const CustomSpinner: React.FC<any> = ({
  size = "16",
  color = "currentColor",
  loading,
  ...attributess
}) => {
  const { attributes } = attributess
  let parsedAttributes = null
  if (attributes) {
    parsedAttributes = JSON.parse(attributes)
  }

  return (
    <div className="overlay">
      <div className="socket">
        <div className="gel center-gel">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        {[...Array(37)].map((_, i) => (
          <Pixel key={i} pixelNumber={i + 1} />
        ))}
      </div>
    </div>
  )
}

const Pixel: React.FC<{ pixelNumber: number }> = ({ pixelNumber }) => {
  return (
    <div className={`gel c${pixelNumber} r3`}>
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
  )
}

export default CustomSpinner
