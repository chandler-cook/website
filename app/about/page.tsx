import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen pt-24 px-6 py-12">
      <main className="max-w-6xl mx-auto">
        <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 bg-white/10">
                <Image
                  src="/headshot.jpg"
                  alt="Chandler Cook"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white">About Me</h1>
              <p className="text-lg text-white/90 leading-relaxed">
              Hi, I'm Chandler! I'm a Cyber Defense Analyst and a senior cybersecurity student at Tennessee Tech. I'm passionate about offensive and defensive security.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                  Organizations
                </h2>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-1">Cyber Interest Group</h3>
                    <p className="text-white/70 text-sm mb-2">Lead</p>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span>Guide mentors and help create hands-on labs, CTF challenges, and training materials that build members' practical cybersecurity skills.</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-1">CyberEagles</h3>
                    <p className="text-white/70 text-sm mb-2">Member</p>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span>Support student learning and industry awareness by promoting biweekly talks from professionals and peers on current cybersecurity topics.</span>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                  Competitions
                </h2>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span>Department of Energy CyberForce Competition</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span>Collegiate Cyber Defense Competition</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span>NSWCDD Cyber Resiliency and Measurement Challenge</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span>National Cyber League</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span>Hivestorm</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div>
              <section>
                <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                  Experience
                </h2>
                <div className="relative">
                  <div className="absolute w-0.5 bg-white/20 top-0 bottom-0" style={{ left: '16px', transform: 'translateX(-50%)' }}></div>
                  
                  <div className="space-y-8">
                    <div className="relative">
                      <div 
                        className="absolute w-8 h-8 flex items-center justify-center"
                        style={{ 
                          left: '16px', 
                          top: '4px',
                          transform: 'translateX(-50%)'
                        }}
                      >
                        <div className="w-8 h-8 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      </div>
                      
                      <div className="pl-12">
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white">Cyber Defense Analyst</h3>
                            <span className="text-white/60 text-sm">August 2025 - Present</span>
                          </div>
                          <p className="text-white/70 text-sm mb-2">Y-12 National Security Complex</p>
                          <div className="flex items-start gap-2 text-white/80 text-sm">
                            <span className="text-white/60 mt-0.5">•</span>
                            <span>Monitor and analyze security alerts to quickly identify real threats and ensure an effective response.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div 
                        className="absolute w-8 h-8 flex items-center justify-center"
                        style={{ 
                          left: '16px', 
                          top: '4px',
                          transform: 'translateX(-50%)'
                        }}
                      >
                        <div className="w-8 h-8 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      </div>
                      
                      <div className="pl-12">
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white">Cybersecurity Intern</h3>
                            <span className="text-white/60 text-sm">May 2025 - August 2025</span>
                          </div>
                          <p className="text-white/70 text-sm mb-2">Y-12 National Security Complex</p>
                          <div className="flex items-start gap-2 text-white/80 text-sm">
                            <span className="text-white/60 mt-0.5">•</span>
                            <span>Simulated adversary activity with Sliver and Realm C2 to evaluate detection capabilities and strengthen defensive monitoring.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                  Hobbies
                </h2>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span>Hacking</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span>Homelabbing</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span>Soccer</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span>Video Games</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

