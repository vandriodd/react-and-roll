import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";
import React from 'react';

interface Props {
  type: SectionType;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
  autoFocus?: boolean;
}

const commonStyles: React.CSSProperties = {
  border: 0,
  height: "200px",
  resize: "none"
};

const getPlaceholder = ({ type, loading }: {type: SectionType, loading?: boolean}) => {
  if (type === SectionType.From) return "Enter text";
  if (loading === true) return "Translating...";
  return "Translation";
}

const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: "#f5f5f5" };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  }

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as="textarea"
      placeholder={getPlaceholder({ type, loading })}
      value={value}
      style={styles}
      onChange={handleChange}
    />
  );
};

export default TextArea;
