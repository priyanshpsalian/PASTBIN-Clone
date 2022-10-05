import React from 'react'

export default function Text_found(props) {
  return (
    <>
      <label>Description</label>
      <div>{props.name.description}</div>
      <label>Unique Id</label>
      <div>{props.name.unique_id}</div>
    </>
  );
}
