import React from "react";

function FormContent() {
  return (
    <form>
      <div>
        <input placeholder="Email" />
        <input placeholder="User" />
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function SingupForm({ modalProps }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...modalProps}>
      <FormContent />
    </div>
  );
}
