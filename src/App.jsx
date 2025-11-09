import ContactForm from "./components/ContactForm";
import bg from "./assets/bg-image.png";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="relative min-h-screen font-[Inter]">

      <div
        className="absolute inset-0 bg-center bg-cover bg-fixed "
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="absolute inset-0 bg-white/70 "></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 ">
        
        <img
          src={logo}
          alt="V Films Logo"
          className="h-12 md:h-14 mb-8"
        />

        <section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-4">
              <h2 className="text-3xl font-['Playfair_Display'] text-gray-900">
                Get in Touch
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Have any questions or want to work with us? Send us a message and we will reach out soon.
              </p>
            </div>

            <div className="bg-white/95 shadow-lg rounded-xl p-6">
              <ContactForm />
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
