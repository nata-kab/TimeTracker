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
  setTitle: func,
  title: string,
};

TaskTitleInput.defaultProps = {
  setTitle: null,
  title: null,
};

export default TaskTitleInput;
