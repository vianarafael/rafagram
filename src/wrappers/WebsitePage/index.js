/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import Footer from "../../components/commons/Footer";
import Menu from "../../components/commons/Menu";
import Modal from "../../components/commons/Modal";
import SingupForm from "../../components/patterns/singupForm";
import { SEO } from "../../components/commons/SEO";
import { Box } from "../../components/foundations/Layout/Box";

export const WebsitePageContext = React.createContext({
  toggleModalSingup: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) {
  const [modal, setModal] = React.useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalSingup: () => {
          setModal(!modal);
        },
      }}
    >
      <SEO {...seoProps} />
      <Box display="flex" flex="1" flexDirection="column" {...pageBoxProps}>
        {menuProps.display && (
          <Menu
            onSetModal={() => {
              setModal(!modal);
            }}
          />
        )}

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
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
};
