import './App.css';
import { SimpleGrid } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import CustomCard from "./components/CustomCard"

function App() {
  const [isActive, setIsActive] = useState(false)
  const [data, setData] = useState({
    title: "San Fransisco, CA, United States",
    description: "Place with a lot of garbage.",
    image: "/images/sf.jpg"
  })

  const changeData = (title, description, image) => {
    console.log("Changing data")
    setData({
      title,
      description,
      image
    })
  }

  useEffect(() => {
    console.log("IS ACTIVE IS: ", isActive)
    if (isActive) {
      changeData("New York, NY, United States", "Place with a lot of people.", '/images/ny.jpg')
    } else {
      changeData("San Fransisco, CA, United States", "Place with a lot of garbage.", '/images/sf.jpg')
    }
  }, [isActive])

  return (
    <div className="App">
      <SimpleGrid columns={4} gap={3}>
        {/* Reusable components */}
        <CustomCard title={data.title} description={data.description} image={data.image} onClick={() => {
          setIsActive(!isActive)
        }} />
      </SimpleGrid>

    </div>
  );
}

export default App;
