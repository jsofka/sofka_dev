import memoji from './assets/jessica_memoji.png'
import resume from './assets/resume_website.pdf'
import swift from './assets/swift.png'
import swiftui from './assets/swiftui.png'
import xcode from './assets/xcode.png'
import afterEffects from './assets/after_effects.png'
import python from './assets/python.png'
import figma from './assets/figma.png'
import target from './assets/target.png'
import usuals1 from './assets/usuals1.jpg'
import usuals2 from './assets/usuals2.jpg'
import giftmessaging from './assets/giftmessaging.jpg'
import './App.css'

function App() {
  const handleOpenInBrowser = () => {
    window.open(resume, '_blank');
  };

  return (
    <>
      <div className="bg-linear-120 min-h-screen h-fit w-screen from-rose-300 via-purple-400 to-sky-400 flex justify-center items-center">
        <div className="bg-white/50 rounded-3xl p-6 m-10 h-fit w-[70vw] flex justify-between">
          <div className="flex gap-2 w-18">
            <div className="circle red"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
          </div>
          <div>
            <div className="bg-white/50 rounded-3xl p-6 m-10 h-fit w-fit max-w-1500 flex justify-between">
              <div className="justify-around text-left content-center space-y-4">
                <p className="text-2xl font-semibold">hi im jessica!</p>
                <p className="text-xl">
                  Experienced iOS engineer with a strong foundation in native app development in Swift and SwiftUI. Deeply passionate about usability and user-centered design to create iOS apps that are both beautiful and incredibly effective.
                </p>
                <button 
                  className="px-4 py-6 bg-blue-500 text-white rounded hover:bg-blue-700 rounded-3xl"
                  onClick={handleOpenInBrowser}
                >
                  Resume
                </button>
              </div>
              <div className="justify-end content-center">
                <img src={memoji} className="jessica" />
              </div>
            </div>

            <div className="mt-10 flex flex-col">
              <div className="px-12 justify-start items-start text-left">
                <p className="text-2xl font-semibold">skills & technologies</p>
              </div>

              {/* first row */}
              <div className="justify-center flex">
                <div className="bg-white/50 rounded-3xl p-6 m-10 h-fit w-[15vw] max-w-1500 flex space-x-4 items-center justify-start">
                  <img src={swift} className="skillsImg"/>
                  <div className="flex flex-col items-start justify-start text-left">
                    <p className="text-lg font-semibold">Swift</p>
                    <p className="text-sm">Apple's powerful, multiplatform programming language.</p>
                  </div>
                </div>

                <div className="bg-white/50 rounded-3xl p-6 m-10 h-fit w-[15vw] max-w-1500 flex space-x-4 items-center justify-start">
                  <img src={swiftui} className="skillsImg"/>
                  <div className="flex flex-col items-start justify-start text-left">
                    <p className="text-lg font-semibold">SwiftUI</p>
                    <p className="text-sm">Modern framework for Apple user interfaces.</p>
                  </div>
                </div>

                <div className="bg-white/50 rounded-3xl p-6 m-10 h-fit w-[15vw] max-w-1500 flex space-x-4 items-center justify-start">
                  <img src={xcode} className="skillsImg"/>
                  <div className="flex flex-col items-start justify-start text-left">
                    <p className="text-lg font-semibold">Xcode</p>
                    <p className="text-sm">Integrated development environment for Apple platforms.</p>
                  </div>
                </div>
              </div>

              {/* second row */}
              <div className="justify-center flex">
                <div className="bg-white/50 rounded-3xl p-6 m-10 mt-2 h-fit w-[15vw] max-w-1500 flex space-x-4 items-center justify-start">
                  <img src={afterEffects} className="skillsImg"/>
                  <div className="flex flex-col items-start justify-start text-left">
                    <p className="text-md font-semibold">After Effects</p>
                    <p className="text-sm">Industry standard for motion graphics, VFX.</p>
                  </div>
                </div>

                <div className="bg-white/50 rounded-3xl p-6 m-10 mt-2 h-fit w-[15vw] max-w-1500 flex space-x-4 items-center justify-start">
                  <img src={figma} className="skillsImg"/>
                  <div className="flex flex-col items-start justify-start text-left">
                    <p className="text-lg font-semibold">Figma</p>
                    <p className="text-sm">Collaborative, cloud-based interface design tool.</p>
                  </div>
                </div>

                <div className="bg-white/50 rounded-3xl p-6 m-10 mt-2 h-fit w-[15vw] max-w-1500 flex space-x-4 items-center justify-start">
                  <img src={python} className="skillsImg"/>
                  <div className="flex flex-col items-start justify-start text-left">
                    <p className="text-lg font-semibold">Python</p>
                    <p className="text-sm">Versatile, readable language for rapid development.</p>
                  </div>
                </div>
              </div>


              <div className="mt-10 px-12 justify-start items-start text-left">
                <p className="text-2xl font-semibold">experience</p>

                  <div className="mt-8 h-fit w-fit max-w-1500 justify-between">
                    <div className="flex">
                      <img src={target} className="experienceImg rounded-2xl"/>
                      <div className="flex flex-col items-start justify-start text-left ml-6">
                        <p className="text-lg font-semibold">Target</p>
                        <p className="text-sm">Shop and save from anywhere.</p>
                        <p className="text-sm font-semibold">September 2020 - September 2025</p>
                      </div>
                    </div>

                    <div className="my-8 flex space-x-10">
                      <img src={usuals1} className="targetImg rounded-3xl"/>
                      <img src={usuals2} className="targetImg rounded-3xl"/>
                      <img src={giftmessaging} className="targetImg rounded-3xl"/>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
