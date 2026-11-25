
import './App.css'
import Sidebar from '../component/sidebar'

function App() {
  return (
    <>
      {/* Icon sprite */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <symbol id="i-spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
            <circle cx="12" cy="12" r="3.2" />
          </symbol>

          <symbol id="i-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </symbol>

          <symbol id="i-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
          </symbol>

          <symbol id="i-image" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="3" />
            <circle cx="9" cy="10" r="1.8" />
            <path d="m21 16-5-5-8 8" />
          </symbol>

          <symbol id="i-doc" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round">
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
            <path d="M14 3v5h5M9 13h6M9 17h4" />
          </symbol>

          <symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
          </symbol>

          <symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="m4 7 8 6 8-6" />
          </symbol>

          <symbol id="i-monitor" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="12" rx="2.5" />
            <path d="M8 20h8M12 16v4" />
          </symbol>

          <symbol id="i-gauge" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            <path d="M4 15a8 8 0 1 1 16 0" />
            <path d="m12 15 4-4" />
          </symbol>

          <symbol id="i-settings" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
          </symbol>

          <symbol id="i-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </symbol>

          <symbol id="i-clip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21 11-8.5 8.5a5 5 0 0 1-7-7L14 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 7" />
          </symbol>

          <symbol id="i-send" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </symbol>

          <symbol id="i-bulb" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />
          </symbol>

          <symbol id="i-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </symbol>

          <symbol id="i-sidebar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="3" />
            <path d="M9 4v16" />
          </symbol>

          <symbol id="i-logout" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3M16 17l5-5-5-5M21 12H9" />
          </symbol>
        </defs>
      </svg>

      <div className="app">

        {/* SIDEBAR */}
      <Sidebar/>

        {/* MAIN */}
        <main className="main">

          <header className="topbar">
            <h1 className="topbar__title">AI Assistant</h1>

            <div className="topbar__right">

              <div className="model" id="modelPicker">

                <button className="model__btn" aria-haspopup="listbox" aria-expanded="false" id="modelBtn">
                  <span className="model__dot"></span>
                  <span id="modelName">Claude Sonnet 4.6</span>
                  <svg><use href="#i-chevron" /></svg>
                </button>

                <ul className="model__menu" role="listbox" hidden>

                  <li role="option" aria-selected="true" className="model__opt" data-model="Claude Sonnet 4.6">
                    <span>Claude Sonnet 4.6</span>
                    <small>Balanced</small>
                  </li>

                  <li role="option" aria-selected="false" className="model__opt" data-model="Claude Opus 4.6">
                    <span>Claude Opus 4.6</span>
                    <small>Most capable</small>
                  </li>

                  <li role="option" aria-selected="false" className="model__opt" data-model="Claude Haiku 4.5">
                    <span>Claude Haiku 4.5</span>
                    <small>Fastest</small>
                  </li>

                </ul>
              </div>

              <div className="avatar avatar--sm" title="Ayesha Khan">AK</div>

            </div>
          </header>

          <section className="stage">

            <div className="welcome" id="welcome">

              <div className="welcome__icon">
                <svg><use href="#i-spark" /></svg>
              </div>

              <h2 className="welcome__title">How can I help you today?</h2>

              <p className="welcome__sub">
                Your personal AI assistant for work, creativity and everyday tasks.
              </p>

              <div className="cards">

                <button className="card" data-prompt="Explain how transformers work in simple terms.">
                  <span className="card__icon">
                    <svg><use href="#i-bulb" /></svg>
                  </span>
                  <span className="card__title">Explain a complex topic</span>
                  <span className="card__desc">Break down ideas into clear, simple steps.</span>
                </button>

                <button className="card" data-prompt="Create an image of a calm mountain lake at sunrise.">
                  <span className="card__icon">
                    <svg><use href="#i-image" /></svg>
                  </span>
                  <span className="card__title">Generate an image</span>
                  <span className="card__desc">Turn a description into visuals for any project.</span>
                </button>

                <button className="card" data-prompt="Summarize the key points of the document I'm about to upload.">
                  <span className="card__icon">
                    <svg><use href="#i-doc" /></svg>
                  </span>
                  <span className="card__title">Analyze a document</span>
                  <span className="card__desc">Summaries, insights and answers from your files.</span>
                </button>

                <button className="card" data-prompt="Research the latest trends in renewable energy.">
                  <span className="card__icon">
                    <svg><use href="#i-globe" /></svg>
                  </span>
                  <span className="card__title">Research the web</span>
                  <span className="card__desc">Find current sources and compare them clearly.</span>
                </button>

              </div>
            </div>

            <div className="thread" id="thread" hidden></div>

          </section>

          <footer className="composer-wrap">

            <form className="composer" id="composer">

              <textarea
                id="input"
                rows="1"
                placeholder="Ask MyAI anything…"
                aria-label="Message MyAI"
              ></textarea>

              <div className="composer__bar">

                <div className="composer__tools">

                  <button type="button" className="tool-btn" aria-label="Attach file" title="Attach file">
                    <svg><use href="#i-clip" /></svg>
                  </button>

                  <button type="button" className="tool-btn" aria-label="Generate image" title="Generate image">
                    <svg><use href="#i-image" /></svg>
                  </button>

                </div>

                <button type="submit" className="send" id="send" aria-label="Send message" disabled>
                  <svg><use href="#i-send" /></svg>
                </button>

              </div>
            </form>

            <p className="disclaimer">
              MyAI can make mistakes. Check important information.
            </p>

          </footer>

        </main>

      </div>
    </>
  )
}

export default App
