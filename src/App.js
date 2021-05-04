import PinchZoomPan from "react-image-zoom-pan";

function App() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
     }}>
      <PinchZoomPan
        minScale={.8}
        initialScale={.8}
        maxScale={2}
        position="center"
      >
        <img alt='Eldora' src='/paper_eldora_creased.png' />
      </PinchZoomPan>
    </div>
  );
}

export default App;
