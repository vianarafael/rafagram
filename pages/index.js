import React, { useState } from "react";
import Menu from "../src/components/commons/Menu";
import Footer from "../src/components/commons/Footer";
import Text from "../src/components/foundations/Text";
import { Button } from "../src/components/commons/Button";
import { Grid } from "../src/components/foundations/Layout/Grid";
import { Box } from "../src/components/foundations/Layout/Box";
import Modal from "../src/components/commons/Modal";
import SingupForm from "../src/components/patterns/singupForm";

export default function Home() {
  const [modal, setModal] = useState(false);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Modal
        isOpen={modal}
        setModal={setModal}
        onClose={() => {
          setModal(false);
        }}
      >
        {(modalProps) => (
          <SingupForm modalProps={modalProps} setModal={setModal} />
        )}
      </Modal>

      <Menu
        onSetModal={() => {
          setModal(!modal);
        }}
      />

      <Grid.Container
        marginTop={{
          xs: "32px",
          md: "75px",
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={1}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <div>
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </Text>

              <Button
                variant="primary.main"
                margin={{
                  xs: "auto",
                  md: "initial",
                }}
                display="block"
                onSetModal={() => {
                  setModal(!modal);
                }}
              >
                Signup
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              alt="An example of the application on a cellphone"
              style={{ display: "block", margin: "auto" }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}
