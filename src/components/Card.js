import "../App.css";
import CustomButton from "./CustomButton";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.complete === true && "grey",
        color: props.complete === true && "white",
      }}
    >
      <h2>{props.id}</h2>
      <h3>{props.title}</h3>
      <p>{props.des}</p>
      <div className="btnWrapper">
        <CustomButton
          bg="#D82148"
          color="white"
          name="Complete"
          click={props.update}
        />
        <CustomButton
          bg="#F8CBA6"
          color="black"
          name="Delete"
          click={props.delete}
        />
      </div>
    </div>
  );
}

export default Card;
