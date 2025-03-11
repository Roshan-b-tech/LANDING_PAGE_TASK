import React from 'react';
import { Box, Gift, Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen px-6 flex items-center pt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-[#00ff00]">SAVING</span> YOUR MONEY<br />
                FOR TRAVEL THROUGH<br />
                <span className="text-[#00ff00]">TRAVEL FUND</span>
              </h1>
              <p className="text-gray-300 text-lg mb-12 max-w-xl">
                Save your money for travel securely and explore the whole world with trasave, we provide you the best travel services.
              </p>
              <div className="flex gap-6">
                <button 
                  className="text-white px-10 py-4 rounded-full font-medium text-lg border border-white"
                  style={{
                    background: 'linear-gradient(to right, #07DA07, #0B430B)'
                  }}
                >
                  Save now
                </button>
                <button 
                  className="text-white px-10 py-4 rounded-full font-medium text-lg border border-white"
                  style={{
                    background: 'linear-gradient(to right, #07DA07, #0B430B)'
                  }}
                >
                  UI/UX Case Study
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center relative">
              {/* Green Eclipse Background */}
              <img 
                src="/Ellipse 1 (1).png"
                alt=""
                className="absolute w-[550px] h-[398px] object-cover"
                style={{
                  transform: 'translate(-50%, -50%) rotate(1.54deg)',
                  zIndex: 0,
                  left: '50%',
                  top: '55%'
                }}
              />
              
              {/* Main Image */}
              <img 
                src="/Group_10-removebg-preview (1).png" 
                alt="Happy traveler with suitcase"
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel Section */}
      <section className="px-6 py-20 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Why to <span className="text-[#00ff00] italic">travel</span> with us?
          </h2>
          <p className="text-center text-gray-300 max-w-4xl mx-auto mb-16">
            Ambitious about your next adventure but sick of saving money? End up sneaking into those savings because well. You're bored? Lost motivation? You don't feel the funds are growing fast enough? Saving just sucks? Trasave has introduced an epic new way to reward you for your savings for travel
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                <img 
                  src="/Service Tips (1).png" 
                  alt="Service Tips"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Save <span className="italic">money</span></h3>
              <p className="text-gray-300">Invest in trasave <br></br>security for future</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                <img 
                  src="/Wedding Gift.png" 
                  alt="Wedding Gift"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Earn <span className="italic">rewards</span></h3>
              <p className="text-gray-300">Earn rewards and <br></br>track your money</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                <img 
                  src="/Travel Agency.png" 
                  alt="Travel Agency"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2"><span className="italic">Travel</span> Global</h3>
              <p className="text-gray-300">Use this money for<br></br> your travelling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/unsplash_OCrPJce6GPk.png" 
            alt="Security Background"
            className="w-full h-full object-cover object-center brightness-110"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 max-w-6xl mx-auto">
              {/* Left Side - Title */}
              <div className="md:w-1/2 max-w-xl">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
                {/* Green Line Accent */}
                <div className="w-16 h-1 bg-[#00ff00] mb-8"></div>
               
                
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Save your travel<br />
                  money in Trasave and<br />
                  get top grade security<br />
                  with us
                </h2>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
        
              

              {/* Right Side - Paragraphs */}
              <div className="md:w-1/2 max-w-xl space-y-8 self-end mb-4">
                <p className="text-xl text-gray-200">
                  There are so many benefits of travelling<br></br> with Trasave. 
                  Not only do we provide you <br></br>with an awesome digital travel solution, an<br></br> awesome travel app, but we also make it <br></br>super easy and fun for you to store, save<br></br> and move your travel money.
                </p>
                <p className="text-xl text-gray-200">
                  As well as saving money, the TRASAVE<br></br> travel fund is a good way to track your<br></br> travel money. Tracking Expenses is <br></br>important when travelling as you don't<br></br> want to be stuck in the middle of your<br></br> journey budgeting your travel. We created<br></br> the travel fund so you can store all your<br></br> travel money and then track your money<br></br> from your travel fund expense tracker.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Element */}
        {/* <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-orange-500 opacity-80"></div> */}
      </section>
      <br/>
      <br/>

      <Footer />
    </div>
  );
}

export default App;