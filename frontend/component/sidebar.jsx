
function Sidebar() {
  return (
     <aside className="sidebar" aria-label="Primary">

          <div className="sidebar__head">
            <a className="logo" href="#" aria-label="MyAI home">
              <span className="logo__mark">
                <svg><use href="#i-spark" /></svg>
              </span>
              <span className="logo__name">MyAI</span>
            </a>

            <button className="icon-btn" aria-label="Collapse sidebar" title="Collapse sidebar">
              <svg><use href="#i-sidebar" /></svg>
            </button>
          </div>

          <button className="new-chat" id="newChat">
            <svg><use href="#i-plus" /></svg>
            <span>New chat</span>
            <kbd>⌘ K</kbd>
          </button>

          <nav className="nav" aria-label="Workspaces">

            <p className="nav__group">Workspaces</p>

            <a className="nav__item is-active" href="#" aria-current="page">
              <svg><use href="#i-chat" /></svg>
              <span>AI Chat</span>
            </a>

            <a className="nav__item" href="#">
              <svg><use href="#i-image" /></svg>
              <span>Image Studio</span>
            </a>

            <a className="nav__item" href="#">
              <svg><use href="#i-doc" /></svg>
              <span>Documents</span>
            </a>

            <a className="nav__item" href="#">
              <svg><use href="#i-globe" /></svg>
              <span>Web Research</span>
            </a>

            <a className="nav__item" href="#">
              <svg><use href="#i-mail" /></svg>
              <span>Email Assistant</span>
            </a>

            <a className="nav__item" href="#">
              <svg><use href="#i-monitor" /></svg>
              <span>Desktop Agent</span>
            </a>

            <p className="nav__group">Management</p>

            <a className="nav__item" href="#">
              <svg><use href="#i-gauge" /></svg>
              <span>Usage &amp; Credits</span>
            </a>

            <a className="nav__item" href="#">
              <svg><use href="#i-settings" /></svg>
              <span>Settings</span>
            </a>

          </nav>

          <div className="usage">
            <div className="usage__row">
              <span>Credits used</span>
              <span className="usage__value">1,240 / 2,000</span>
            </div>

            <div className="meter" role="progressbar" aria-valuemin="0" aria-valuemax="2000" aria-valuenow="1240">
              <span style={{ width: '62%' }}></span>
            </div>

            <p className="usage__hint">Resets in 12 days</p>
          </div>

          <div className="profile">
            <div className="avatar avatar--sm">AK</div>

            <div className="profile__meta">
              <p className="profile__name">Ayesha Khan</p>
              <p className="profile__plan">Pro plan</p>
            </div>

            <button className="icon-btn" aria-label="Account menu">
              <svg><use href="#i-chevron" /></svg>
            </button>
          </div>

        </aside>
  )
}

export default Sidebar
