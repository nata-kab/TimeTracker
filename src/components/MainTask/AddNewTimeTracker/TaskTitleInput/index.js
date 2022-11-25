import { func, string } from "prop-types";
import React from "react";
import { TextInput } from "react-native";

const TaskTitleInput = ({ title, setTitle }) => {
  return (
    <TextInput
      onChangeText={setTitle}
      value={title}
      placeholder="Add activity title"
      maxLength={40}
      multiline={true}
    />
  );
};

TaskTitleInput.propTypes = {
  setTitle: func.isRequired,
  title: string,
};

TaskTitleInput.defaultProps = {
  title: null,
};

export default TaskTitleInput;
