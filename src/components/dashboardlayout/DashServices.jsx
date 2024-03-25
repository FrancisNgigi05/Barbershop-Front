
import MenuCard from "../../layouts/MenuCardBooking";

const DashServices = () => {
  const menuData = [
    {
      id: 1,
      img: "src/assets/img/menu1.jpg",
      title: "Classic Fade",
      price: "1000",
      description: "longer hair on top with shorter hair on the back and sides that gradually decreases in length until it seamlessly fades into the skin.",
    },
    {
      id: 2,
      img: "src/assets/img/menu2.jpg",
      title: "Pompadour",
      price: "500",
      description: "The pompadour is a hairstyle named after Madame de Pompadour, a mistress of King Louis XV of France."
    },
    {
      id: 3,
      img: "src/assets/img/menu3.jpg",
      title: "crew cut",
      price: "600",
      description: "The crew cut is a timeless hairstyle characterized by short, evenly trimmed hair on the sides and back, with slightly longer hair on top"
    },
    {
      id: 4,
      img: "src/assets/img/menu4.jpg",
      title: "Mohawk",
      price: "700",
      description: "The Mohawk is a bold and edgy hairstyle featuring a strip of longer hair running down the center of the scalp, while the sides are shaved or closely cropped"
    },
    {
      id: 5,
      img: "src/assets/img/menu5.jpg",
      title: "Quiff",
      price: "400",
      description: "The quiff is a stylish and versatile hairstyle characterized by hair brushed upward and back from the forehead, creating height and volume at the front"
    },
    {
      id: 6,
      img: "src/assets/img/menu6.jpg",
      title: "Front Taper",
      price: "400",
      description: "A front taper is a haircut technique that involves gradually reducing the length of hair from the front hairline towards the back of the head."
    },
  ];
  return (
    <div className="min-h-screen container flex flex-col justify-center items-center ">
      <h1 className=" text-4xl font-semibold text-center pt-24">
        Get your best Cut
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 px-0 md:px-10">
        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            description={item.description}

          />
        ))}
      </div>
    </div>
  );
};

export default DashServices;