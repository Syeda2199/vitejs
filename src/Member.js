function Member(props) {
    return (
      <div className="member-card">
        <h2>{props.name}</h2>
        <p>Role: {props.role}</p>
        <p>City/State: {props.citystate}</p>
        <img src={props.link} className="member-image"/>
        <button type="button">Click Me!</button>
      </div>
    );
  }
  
export default Member;
  