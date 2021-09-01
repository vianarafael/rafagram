import React from "react";
import PropTypes from "prop-types";
import Footer from "../../components/commons/Footer";
import Menu from "../../components/commons/Menu";
import Modal from "../../components/commons/Modal";
import SingupForm from "../../components/patterns/singupForm";
import { Box } from "../../components/foundations/Layout/Box";

export default function WebsitePageWrapper({ children }) {
  const [modal, setModal] = React.useState(false);
  return (
    <Box display="flex" flex="1" flexDirection="column">
      <Menu
        onSetModal={() => {
          setModal(!modal);
        }}
      />

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
      {children}
      <Footer />
    </Box>
  );
}

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
