import React from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView } from "react-native";

import { ErrorPage } from "../panza";

export default class ErrorExample extends React.Component {
  render() {
    return (
      <ErrorPage
        retry={() => {
          console.log("retry");
        }}
      />
    );
  }
}
