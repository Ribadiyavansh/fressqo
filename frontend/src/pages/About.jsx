import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Leaf, Smile, ArrowRight } from 'lucide-react';

function About() {
  const toggleDarkTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    document.body.className = "bg-background-light dark:bg-background-dark text-charcoal dark:text-slate-100 font-display transition-colors duration-300 page-about min-h-screen";
  }, []);

  return (
    <div className="flex-1 w-full">

      <main className="flex-1">
        <section className="px-6 md:px-20 py-8">
          <div className="relative overflow-hidden rounded-xl h-[500px] flex items-center justify-center text-center bg-charcoal">
            <div className="absolute inset-0 opacity-60">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDz6wB6f29u-D__AeAi-7hbqLyw9IkJaxeOfCAPwFEif6bPntTD1o_EsR3WzWQm77fPFdclIxbmnbVCHntPyy12QT9Cupt4Ex5z-Hh5utsEd3kgr0Ggf1fUbMwXYWdrfU5LVowS6x6HdGELsYM-5cAIx6_CT_RyrmR0z8UInDcCnbkT45RB1FaJage8kQBjlpBwCd3LVlxZ8UOh5696UlCU-BmPRPdPSIzXySJeH4nWRrvbZWiizIIhLGy-elYgEx3IaoMhpY_ukKhf')" }}></div>
            </div>
            <div className="relative z-10 max-w-3xl px-6">
              <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                Crafting the <span className="text-primary">Perfect Fizz</span>
              </h1>
              <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Experience the revolution of instant refreshments. Pure ingredients, sophisticated bubbles, delivered straight to your glass.
              </p>
            </div>
          </div>
        </section>
        <section className="px-6 md:px-20 py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Founded 2021</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal dark:text-slate-100">The Fresqo Journey</h2>
              <div className="space-y-4 text-sage dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  Born from a passion for premium refreshments, Fresqo was created to bring the art of the perfect fizz to your home. We realized that the beverage industry was cluttered with artificial syrups and excessive waste.
                </p>
                <p>
                  Our mission was simple: create a drink bomb that transforms ordinary water into a gourmet experience. We believe that every sip should be an experience, combining convenience with uncompromised quality.
                </p>
                <p>
                  After two years of intensive research into botanical extracts and natural carbonation, we perfected the Fresqo formula—a burst of happiness in every single drop.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img alt="Lifestyle" fetchpriority="high" className="w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA1Rb-v_4iBLbb67fVvzGXghRbktQ64VfEE5I66ATEO2wFZoa9pPf0nAx5UZqaLM2Mnf3yQEWTvotPIqX4qeJ0t7HgmbCnf2bFKkLiX7zs7YXxezzGzDt_QrYH0_8a0z0EuUVpu71diYn0QF-ItqOvY4A0gecJZRDDNt96OKcSNovKZApM7-IwawnwJfuf7PAROsuqwAzb_DTehUIoRJfNWwiP5yGArt78M4LaRngG94v_7JyKjjhp4Qsl2GuTw1P5ez5qbbYWygKq" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-charcoal font-black text-2xl">10M+</p>
                <p className="text-charcoal/80 font-bold text-sm">Drinks Fizzed</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 md:px-20 py-24 bg-background-light dark:bg-background-dark/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal dark:text-slate-100 mb-4">Our Core Values</h2>
            <p className="text-sage dark:text-slate-400 max-w-xl mx-auto">What drives us to create the world's most refreshing experience.</p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-10 bg-white dark:bg-slate-900 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal dark:text-slate-100">Premium Quality</h3>
              <p className="text-sage dark:text-slate-400">Hand-selected botanical ingredients and mineral-rich bases for the finest taste profile in every bomb.</p>
            </div>
            <div className="flex flex-col items-center text-center p-10 bg-white dark:bg-slate-900 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                <Leaf className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal dark:text-slate-100">Sustainability</h3>
              <p className="text-sage dark:text-slate-400">Zero plastic packaging and ethically conscious sourcing. We care as much about the planet as the fizz.</p>
            </div>
            <div className="flex flex-col items-center text-center p-10 bg-white dark:bg-slate-900 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                <Smile className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal dark:text-slate-100">Instant Joy</h3>
              <p className="text-sage dark:text-slate-400">Transforming hydration into a daily celebration. A burst of refreshment whenever you need it most.</p>
            </div>
          </div>
        </section>
        <section className="px-6 md:px-20 py-24 bg-white dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal dark:text-slate-100 mb-4">The Minds Behind the Fizz</h2>
                <p className="text-sage dark:text-slate-400 max-w-xl">Meet the innovators, flavorists, and dreamers making Fresqo happen.</p>
              </div>
              <button className="text-primary font-bold flex items-center gap-2 hover:underline">
                See all positions <ArrowRight className="w-5 h-5 ml-1 inline" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 relative">
                  <img alt="Sarah Jenkins" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Svuatwa2RqLg9CfoqCQ7JoBJbJQvI6r54GZwHEL-o88SdCkmTieYonXNT-V0Tep5AGiRU5xZjyuP90B_SeoJAOU7sU99vb5AL1gj6NNwJs_IAL3g1JdeHL5MZfRot6CB4pQyaeYPh-BQp79nnK6PG7OvkpVHecAjWK8QzsIWN0ilBCdmg-FTonymxf0lbvxEz-KsujJ6kGbCIJbl6CTvwkjGI1vpOjU2rVuB_hOyh_QGdHW_nvAp8J6ljJdt430O0TiIAi7i9toi" />
                </div>
                <h4 className="text-lg font-bold text-charcoal dark:text-slate-100">Sarah Jenkins</h4>
                <p className="text-sage dark:text-slate-400 text-sm">Founder &amp; CEO</p>
              </div>
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4">
                  <img alt="Marcus Chen" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtsLjQhQUWwYnL4UzF9nNFlvNnl59G2CgzpUQ3zsc7gwFWpe-k2ID7WaTFLqN69fLDxzGMsiyvhehlob4d_vnlnCxXO75xnZWp9bPOaBmJhY-UJQf5eXh7Ge2A7-rvfVDQnS8EIOEE-Q1s0R5V80s5TBx571u8RYlGUCLxvXoPe-qax-Hg7M8fGXua-G34g_Q8IQXWEYmev8Vnle_L7FY-v14hM0ruSe5PPPBP68JzvIXPjRqX8M9AMDXyILE_2f7TD26yLjHYo_sL" />
                </div>
                <h4 className="text-lg font-bold text-charcoal dark:text-slate-100">Marcus Chen</h4>
                <p className="text-sage dark:text-slate-400 text-sm">Head of Product</p>
              </div>
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4">
                  <img alt="Elena Rodriguez" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjycyLaPPRf-W5pii70xd9U247jh7k-XhrAJ0oKXzhDzDR7sEUWZ8k7vlJuF1-OaMoiLHhDpIoPh8urOLrX91u9zMi9-ddWULGAKT3CbH0YFNT5pc_kc4jquUFvPhCiwpZyg2FEyOkLxeqj8zomGM8y-SXZnDRbDWqfbiud9mF4uXq5ovT6f72fTZ9V-TEedNGBVGL285UY4nSgD3fwIicazMk6SPp-nJKIvVtiLKucN5HbrnbAlNxIWXGksrI_KkQBHtoRUtcinMa" />
                </div>
                <h4 className="text-lg font-bold text-charcoal dark:text-slate-100">Elena Rodriguez</h4>
                <p className="text-sage dark:text-slate-400 text-sm">Chief Flavorist</p>
              </div>
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4">
                  <img alt="David Park" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGLy0eDThDbyQMUoSgb29rcLRZbl2yo5Jqc2oGs6_locbBN76WAdzT5z49DLo7td2CPCmPWXlhqnNg4kwXqRkp_-siJZmZXhMKX0UysTrCN1F4jA75PVORQZcp9cdIYR1gY_Cr5sybqKvVR77ZPWRWo6sC49XSjgD4iEi8_XWSO9Bdx2tQ-UDdWmLITuEzj975QLJlL1olCcv8RWQUQhTdycVoT3axO6LTYhxopRw2leeRKGTTqT-bctwywu4bXNYxqIsWoa10VoSX" />
                </div>
                <h4 className="text-lg font-bold text-charcoal dark:text-slate-100">David Park</h4>
                <p className="text-sage dark:text-slate-400 text-sm">Sustainability Lead</p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default About;
