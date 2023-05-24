export const Color = ({ background }) => {
  return (
    <div style={{ backgroundColor: background, height: "50px" }}>
      <strong>{background}</strong>
    </div>
  )
}
