import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
class BuildingBoard extends Component {
  state = {
    tags: this.props.tags
  };
  componentDidUpdate = prevProps => {
    if (prevProps.tags !== this.props.tags) {
      this.setState({ tags: this.props.tags });
    }
  };
  render() {
    return (
      <div className="m-3">
        <Droppable droppableId="building">
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="card text-center building-container"
            >
              <div className="card-footer text-muted building-container" />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {this.state.tags.map((tag, index) => (
          <Droppable key={index} droppableId={`${tag.name}-${index}`}>
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="card-body"
                style={{ maxWidth: "300px", background: "purple" }}
              >
                <p className="card-text">
                  {tag.name}
                  <br />
                  {/* change the way the children are displayed pls @sitah ^_^ */}
                  {tag.children.map(child => child.name)}
                </p>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    );
  }
}

export default BuildingBoard;
