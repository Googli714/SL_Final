import NavBar from "./ui/NavBar"

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="bg-gray-100 text-gray-900">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Services Platform</h1>
            <nav>
              <a href="/products" className="text-gray-900 mx-2 hover:text-gray-600">Services</a>
              <a href="/contactme" className="text-gray-900 mx-2 hover:text-gray-600">Contact</a>
            </nav>
          </div>
        </header>

        <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://abcfitness.com/wp-content/uploads/Six-Essential-Gym-Products-and-Services-Members-Want-scaled.webp')" }}>
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
            <h2 className="text-white text-4xl font-bold mb-4">Welcome to Our Services Platform</h2>
            <p className="text-white text-lg mb-4">Find the best services to meet your needs</p>
            <a href="/products" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Explore Services</a>
          </div>
        </section>

        <footer className="fixed left-0 bottom-0 h-8 w-full bg-gray-600 text-white flex justify-between items-center p-4">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <p>&copy; 2024 Services Platform. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
