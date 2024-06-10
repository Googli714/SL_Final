interface IProfileCard {
  image: string;
  name: string;
}

function ProfileCard({ image, name }: IProfileCard) {
  console.log(name);

  return (
    <div className="flex items-end rounded overflow-hidden shadow-md bg-red-300 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
      <img className="w-10 h-10 object-cover mr-4 transition-transform duration-200 hover:scale-110" src={image} alt={name} />
      <div className="pr-4">
        <div className="font-bold text-m mb-2 text-gray-900">{name}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
