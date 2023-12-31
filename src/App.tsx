import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experience from "./pages/experience";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <>
    <Navbar />
      <div className="font-lexend w-screen text-2xl">
        <div className="p-[30px] w-full h-full">
          <div className="w-full h-full border-[5px] border-black">
            <Home />
            <About />
            <Projects />
            <Experience />
            <div className="flex justify-center mb-4">
              <p>Made with ❤️ by Riya</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
