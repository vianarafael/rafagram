import React, { useState } from "react";

function FormContent() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    user: "",
  });

  function handleChange(e) {
    const fieldName = e.target.getAttribute("name");

    setUserInfo({ ...userInfo, [fieldName]: e.target.value });
  }

  const isFormInvalid =
    userInfo.email.length === 0 || userInfo.user.length === 0;

  return (
    <form>
      <div>
        <input
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="User"
          name="user"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={isFormInvalid}
        onClick={(e) => {
          e.preventDefault();
          console.log(userInfo);
        }}
      >
        Sign Up
      </button>
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
