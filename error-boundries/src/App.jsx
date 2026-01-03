import ErrorBoundary from "../src/lib/components/error-boundary";
import OtherComponent from "../src/lib/components/other-component";

function App() {
  return (
    <>
      <ErrorBoundary>
        <OtherComponent />
      </ErrorBoundary>
    </>
  );
}

export default App;
