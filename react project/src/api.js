const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const services = [
  {
    id: 1,
    title: "Web Development",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Professional web development services crafting fast, responsive, and user-friendly websites that drive results"
  },
  {
    id: 2,
    title: "App Development",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    description: "Expert mobile and web app development with cutting-edge technology and stunning design."
  },
  {
    id: 3,
    title: "Software Development",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Build scalable, always-available systems that deliver value to users over the internet 24/7."
  },
  {
    id: 4,
    title: "Digital Marketing",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Connecting the right product with the right people at the right time using the internet."
  },
  {
    id: 5,
    title: "Graphic Designer",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Turning ideas into visually stunning designs that communicate and captivate."
  },
  {
    id: 6,
    title: "Prompt Emgineering",
    image: "https://miro.medium.com/v2/resize:fit:800/1*ulpvX0jgFa4aitpfExkxlw.png",
    description: "Crafting precise words to make AI understand exactly what you want."
  }
];

// Endpoint to get all services
app.get('/api/services', (req, res) => {
  res.status(200).json(services);
});

// Endpoint to get a single service by ID
app.get('/api/services/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.status(200).json(service);
});

app.listen(PORT, () => {
  console.log(`DK Technical API is running on http://localhost:${PORT}`);
});