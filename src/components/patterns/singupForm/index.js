import React, { useState } from "react";
import { Grid } from "../../foundations/Layout/Grid";
import { Box } from "../../foundations/Layout/Box";
import { Button } from "../../commons/Button";
import TextField from "../../forms/TextField";
import Text from "../../foundations/Text";

const formStates = {
  DEFAULT: "DEFAULT",
  LOADING: "LOADING",
  DONE: "DONE",
  ERROR: "ERROR",
};

function FormContent() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submitionStatus, setSubmitionStatus] = useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = useState({
    name: "",
    user: "",
  });

  function handleChange(e) {
    const fieldName = e.target.getAttribute("name");

    setUserInfo({ ...userInfo, [fieldName]: e.target.value });
  }

  const isFormInvalid =
    userInfo.name.length === 0 || userInfo.user.length === 0;

  return (
    <form
      //   style={{ margin: "0 auto" }}
      onSubmit={(e) => {
        e.preventDefault();

        setIsFormSubmitted(true);

        // Data Transfer Object
        const userDTO = {
          username: userInfo.user,
          name: userInfo.name,
        };

        fetch("https://instalura-api.vercel.app/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDTO),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }

            throw new Error("Unable to Sign Up :(");
          })
          .then((resObj) => {
            setSubmitionStatus(formStates.DONE);
            console.log(resObj);
          })
          .catch((err) => {
            setSubmitionStatus(formStates.ERROR);
            console.error(err);
          });
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está rolando no bairro, complete
        seu cadastro agora!
      </Text>
      <div>
        <TextField
          placeholder="Name"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="User"
          name="user"
          value={userInfo.user}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Sign Up
      </Button>

      {isFormSubmitted && submitionStatus === "DONE" && <p>Success</p>}

      {isFormSubmitted && submitionStatus === "ERROR" && <p>Failure</p>}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function signupForm({ modalProps, setModal }) {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col
        display="flex"
        paddingRight={{ md: "0" }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: "16px",
            md: "85px",
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
        >
          {/* Hacky approach, come back to it later. */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                background: "#fff",
                border: "none",
              }}
              type="button"
              onClick={() => setModal(false)}
            >
              X
            </button>
          </div>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
