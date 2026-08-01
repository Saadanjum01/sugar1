'use client'

import Link from 'next/link'
import { Clock, Eye, Zap, Target } from 'lucide-react'

export default function SportsVisionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 lg:py-40 px-5 sm:px-8 lg:px-16 overflow-hidden bg-[#0A1828] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
            alt="Sports and athletics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1828] via-[#0A1828]/90 to-[#1a2332]"></div>
        </div>
        <div className="relative z-10">
          <Link href="/services" className="inline-flex items-center space-x-2 text-sm font-bold mb-12 hover:text-[#C85A3E] transition-colors">
            <span>←</span>
            <span>BACK TO SERVICES</span>
          </Link>
          <div className="text-[#C85A3E] text-sm font-bold mb-6 tracking-widest">ATHLETIC PERFORMANCE</div>
          <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-8">
            SPORTS<br/>VISION
          </h1>
          <p className="text-xl text-[#B8C4CE] max-w-2xl">
            Optimize your visual performance for competitive advantage. See faster, react quicker, perform better.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-7xl mb-4">60</div>
            <div className="text-[#B8C4CE] text-lg">MINUTES PER EVALUATION</div>
          </div>
          <div className="text-center p-10 bg-[#C85A3E] text-white">
            <div className="font-display text-7xl mb-4">80%</div>
            <div className="text-white/80 text-lg">OF SPORT IS VISION-BASED</div>
          </div>
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-5xl mb-4">All Ages</div>
            <div className="text-[#B8C4CE] text-lg">YOUTH TO PROFESSIONAL</div>
          </div>
        </div>

        {/* Visual Skills We Train */}
        <div className="mb-20">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-6">VISUAL SKILLS WE ASSESS</h2>
          <div className="h-2 w-32 bg-[#C85A3E]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#0A1828]">
          {[
            { title: 'DYNAMIC VISUAL ACUITY', desc: 'Ability to see clearly while you and the target are both in motion' },
            { title: 'DEPTH PERCEPTION', desc: 'Accurately judging distance and speed for batting, catching, and more' },
            { title: 'EYE-HAND COORDINATION', desc: 'Precise timing between what you see and how your hands respond' },
            { title: 'PERIPHERAL VISION', desc: 'Awareness of players and objects in your side field of view' },
            { title: 'TRACKING SPEED', desc: 'How quickly your eyes can lock onto and follow a fast-moving object' },
            { title: 'FOCUS FLEXIBILITY', desc: 'Rapid shifting between near and far targets without delay' }
          ].map((item) => (
            <div key={item.title} className="border-r-2 border-b-2 border-[#0A1828] p-10 hover:bg-[#C85A3E] hover:text-white group transition-all">
              <h3 className="font-display text-3xl mb-3 group-hover:text-white">{item.title}</h3>
              <p className="text-[#8B9A9F] text-lg group-hover:text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sports We Support */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-[#0A1828] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-20 text-center">SPORTS WE SUPPORT</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['BASEBALL', 'TENNIS', 'BASKETBALL', 'SOCCER', 'GOLF', 'SWIMMING', 'CYCLING', 'FOOTBALL'].map((sport) => (
              <div key={sport} className="aspect-square border-2 border-white/20 flex items-center justify-center hover:bg-[#C85A3E] hover:border-[#C85A3E] transition-all group">
                <span className="font-display text-xl text-center group-hover:text-white">{sport}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-20">WHAT TO EXPECT</h2>
          <div className="space-y-12">
            {[
              { num: '1', title: 'BASELINE EXAM', desc: 'Complete vision testing to establish your current visual capabilities' },
              { num: '2', title: 'SPORT-SPECIFIC TESTING', desc: 'Targeted assessment of visual skills most critical for your sport' },
              { num: '3', title: 'PERFORMANCE ANALYSIS', desc: 'Identify gaps between your current visual performance and your athletic demands' },
              { num: '4', title: 'TRAINING PLAN', desc: 'Customized visual training exercises and prescription optimization' },
              { num: '5', title: 'PROGRESS TRACKING', desc: 'Follow-up evaluations to measure improvement and adjust the plan' }
            ].map((step) => (
              <div key={step.num} className="flex items-start space-x-8 border-b-2 border-[#0A1828]/10 pb-8">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#0A1828] text-white flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-5xl">{step.num}</span>
                </div>
                <div className="pt-4">
                  <h3 className="font-display text-3xl mb-3">{step.title}</h3>
                  <p className="text-[#8B9A9F] text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 p-10 bg-[#0A1828] text-white flex items-center space-x-6">
            <Clock size={48} className="text-[#C85A3E] flex-shrink-0" />
            <div>
              <h4 className="font-display text-2xl mb-2">DURATION: 60 MINUTES</h4>
              <p className="text-[#B8C4CE]">Available for youth athletes, collegiate, and adult recreational players</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-gradient-to-br from-[#C85A3E] to-[#0A1828] text-white text-center">
        <h2 className="font-display text-3xl sm:text-6xl lg:text-8xl mb-8">GAIN THE EDGE</h2>
        <p className="text-xl mb-12 opacity-90">Your vision is your most powerful athletic tool — optimize it</p>
        <a href="#book" className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0A1828] font-bold text-lg hover:bg-[#0A1828] hover:text-white transition-all">
          BOOK SPORTS VISION EXAM
        </a>
      </section>
    </div>
  )
}
