interface IProfileCard {
  image: string;
  name: string;
}

function ProfileCard({ image, name }: IProfileCard) {
  const gradientStyle = `
    background: linear-gradient(to bottom, #f0f0f0, #c2c2c2);
  `;

  return (
    <div className="flex items-center justify-between p-2 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <img className="rounded-md w-10 h-10 object-cover mr-4 transition-transform duration-200 hover:scale-110" src={image} alt={name} />
      <div className="pr-4">
        <div className="font-bold text-m mb-2 text-gray-900">{name}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
