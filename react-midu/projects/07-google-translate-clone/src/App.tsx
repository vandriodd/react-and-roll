import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { SectionType } from "./types.d";
import TextArea from './components/TextArea';
import { useEffect } from 'react';
import { translate } from './services/translate';

const App = () => {
  const {
    loading,
    fromLang,
    toLang,
    setFromLanguage,
    setToLanguage,
    interchangeLanguages,
    fromText,
    result,
    setFromText,
    setResult
  } = useStore();

  useEffect(() => {
    if (fromText === '') return
    translate({ fromLang, toLang, text: fromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [fromText, fromLang, toLang])

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLang}
              onChange={setFromLanguage}
            />
            <TextArea
              autoFocus
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs="auto">
          <Button
            variant="link"
            disabled={fromLang === AUTO_LANGUAGE}
            onClick={() => interchangeLanguages()}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLang}
              onChange={setToLanguage}
            />
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
