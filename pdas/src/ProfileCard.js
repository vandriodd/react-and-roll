// React calls 3 times this function,
// and each time it passes a different value for the props argument
// Props -> data that can be passed from parent to a child component (unidirectional flow)
// should use the same name for the prop and the variable that holds the value of the prop
function ProfileCard({ title, handle, imageSrc, description }) {
  // Destructuring props  
  // pull of a property from an obj and assign it to a variable
  // const { title, handle } = props;
  // or, instead, passes as argument an obj with the properties

  // always debug the props with console.log()!
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={imageSrc} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  )
}

export default ProfileCard;

// In case of typo, the component prop will not render, but it will not throw an error
// the prop will be undefined