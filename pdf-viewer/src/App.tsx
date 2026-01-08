import { useEffect, useRef } from "react";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let cleanup = () => {};

    (async () => {
      const NutrientViewer = (await import("@nutrient-sdk/viewer")).default;

      NutrientViewer.unload(container);

      if (container && NutrientViewer) {
        NutrientViewer.load({
          container,
          useCDN: true,
          document: "document.pdf",
          toolbarItems: [
            ...NutrientViewer.defaultToolbarItems,
            { type: "content-editor", dropdownGroup: "editor" },
          ],
        });
      }

      cleanup = () => {
        NutrientViewer.unload(container);
      };
    })();

    return cleanup;
  }, []);

  return (
    <div ref={containerRef} style={{ height: "100vh", width: "100vw" }}></div>
  );
}

export default App;
