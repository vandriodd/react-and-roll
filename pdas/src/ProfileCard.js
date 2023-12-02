// React calls 3 times this function,
// and each time it passes a different value for the props argument
function ProfileCard({ title, handle }) {
  // Destructuring props
  // pull of a property from an obj and assign it to a variable
  // const { title, handle } = props;
  // or, instead, passes as argument an obj with the properties
  return (
    <div>
      <h3>{title}</h3>
      <p>{handle}</p>
    </div>
  )
}

export default ProfileCard;