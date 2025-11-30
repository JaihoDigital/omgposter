import { useState } from "react"
import "./App.css"

const ratios = {
  portrait: [4, 5],
  square: [1, 1],
  landscape: [5, 4],
}

export default function App() {
  const [shape, setShape] = useState("portrait")
  const [inch, setInch] = useState(5)
  const [image, setImage] = useState(null)
  const [frameType, setFrameType] = useState("border")

  const [w, h] = ratios[shape]
  const px = inch * 96
  const width = px * (w / Math.max(w, h))
  const height = px * (h / Math.max(w, h))

  const handleUpload = (e) => {
    const file = e.target.files[0]
    setImage(URL.createObjectURL(file))
  }

  return (
    <div className="app">
      <h1>Custom Photo Frame App</h1>

      {/* Shape */}
      <select onChange={e => setShape(e.target.value)}>
        <option value="portrait">Portrait</option>
        <option value="square">Square</option>
        <option value="landscape">Landscape</option>
      </select>

      {/* Inch */}
      <input
        type="number"
        value={inch}
        min="2"
        max="20"
        onChange={e => setInch(e.target.value)}
      />
      inches

      {/* Frame Type */}
      <div style={{ marginTop: "10px" }}>
        <label>
          <input
            type="radio"
            value="border"
            checked={frameType === "border"}
            onChange={() => setFrameType("border")}
          /> Color Frame
        </label>

        <label>
          <input
            type="radio"
            value="image"
            checked={frameType === "image"}
            onChange={() => setFrameType("image")}
          /> Custom Frame Image
        </label>
      </div>

      {/* Custom Frames */}
      {frameType === "image" && (
        <div className="frame-list">
          <img src="/frames/frame1.png" onClick={() => setFrameType("frame1")} />
          <img src="/frames/frame2.png" onClick={() => setFrameType("frame2")} />
        </div>
      )}

      {/* Preview */}
      <div className="preview" style={{ width, height }}>
        {frameType === "frame1" && <img className="frame-img" src="/frames/frame1.png" />}
        {frameType === "frame2" && <img className="frame-img" src="/frames/frame2.png" />}

        {image && <img src={image} className="photo" />}
      </div>

      <input type="file" onChange={handleUpload} />
    </div>
  )
}
