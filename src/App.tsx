import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { QUIZZES } from './quizzes';
import { QuizPage } from './pages/QuizPage';
import { Footer } from './components/Footer';

// Página inicial: lista os quizzes disponíveis (rotas)
const Lobby: React.FC = () => (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
            <h1 className="text-4xl sm:text-5xl font-black text-white text-center drop-shadow-lg">
                🧩 Quiz Game
            </h1>
            <p className="text-white/70 text-center max-w-md">
                Selecione um quiz abaixo. Cada cliente tem sua própria rota e configuração.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                {QUIZZES.map((q, i) => (
                    <Link
                        key={q.slug}
                        to={`/${q.slug}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                        className={`
              animate-slide-up
              bg-gradient-to-br ${q.colors.bgGradient}
              border-2 border-white/20 rounded-3xl p-6
              flex items-center gap-4
              transition-all duration-300
              hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40
            `}
                    >
                        {q.texts.gameLogo ? (<img src={q.texts.gameLogo} alt='logo' className='w-14' />) :
                            (<span className="text-4xl">{q.brandIcon}</span>)}
                        <div>
                            <div className="text-white font-black text-lg">{q.texts.gameTitle}</div>
                            <div className="text-white/70 text-sm">{q.texts.gameSubtitle}</div>
                            <div className="text-white/50 text-xs mt-1">rota: /{q.slug}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
        <Footer />
    </div>
);

const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<Lobby />} />
        {/* Uma rota por quiz/cliente: /:slug */}
        <Route path="/:slug" element={<QuizPage />} />
        <Route path="*" element={<Lobby />} />
    </Routes>
);

export default App;
