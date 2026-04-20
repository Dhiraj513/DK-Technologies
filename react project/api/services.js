const servicesData = [
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
    title: "Prompt Engineering",
    image: "https://miro.medium.com/v2/resize:fit:800/1*ulpvX0jgFa4aitpfExkxlw.png",
    description: "Crafting precise words to make AI understand exactly what you want."
  }
];

export default function handler(req, res) {
  const { method, query } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (method === 'GET') {
    if (query.id) {
      const service = servicesData.find(s => s.id === parseInt(query.id));
      
      if (service) {
        return res.status(200).json({
          success: true,
          service,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Service not found",
        });
      }
    }

    return res.status(200).json({
      success: true,
      count: servicesData.length,
      services: servicesData,
    });
  }

  return res.status(405).json({
    success: false,
    message: "Method not allowed",
  });
}