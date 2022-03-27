import { Component } from "react";

export default class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}
