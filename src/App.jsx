import { Carousel } from './Carousel'

function App() {
  const images = [
    'https://images.pexels.com/photos/374006/pexels-photo-374006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=800',
    'https://images.pexels.com/photos/374897/pexels-photo-374897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=800',
    'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=800',
  ]
  return (
    <div style={{ margin: '100px 0', height: '70vh', width: '100%' }}>
      <Carousel images={images} />
    </div>
  )
}

export default App
