import { Carousel } from './Carousel'

function App() {
  return (
    <div style={{ margin: '100px 0', height: '70vh', width: '100%' }}>
      <Carousel images={['img1.jpg', 'img2.jpg', 'img3.jpg']} />
    </div>
  )
}

export default App
