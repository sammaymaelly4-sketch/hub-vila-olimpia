.search-wrap { padding: 12px 16px 4px; }
.search-bar {
  width: 100%;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: 99px;
  padding: 11px 18px;
  font-size: 13px; font-family: inherit;
  color: var(--txt);
  outline: none;
  transition: border-color 0.2s, background var(--transition);
}
.search-bar:focus { border-color: var(--orange); }
.search-bar::placeholder { color: var(--txt3); }

.serv-section-title { padding: 8px 16px 10px; font-size: 14px; font-weight: 700; }
.serv-list { padding: 0 16px; display: flex; flex-direction: column; gap: 14px; }

.serv-card { overflow: hidden; }
.serv-img {
  width: 100%; height: 150px;
  background: var(--surface2);
  display: flex; align-items: center; justify-content: center;
  font-size: 70px; position: relative;
  transition: background var(--transition);
}
.serv-big-emoji { opacity: 0.9; }
.serv-rating {
  position: absolute; top: 10px; right: 10px;
  background: rgba(0,0,0,0.6); color: #fff;
  font-size: 11px; font-weight: 700;
  padding: 3px 10px; border-radius: 99px;
}

.serv-body   { padding: 13px 14px; }
.serv-name-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px; }
.serv-name { font-size: 15px; font-weight: 700; }
.serv-dist { font-size: 11px; color: var(--txt3); }
.serv-esp  { font-size: 12px; font-weight: 700; color: var(--orange); margin-bottom: 6px; }
.serv-desc { font-size: 12px; color: var(--txt2); line-height: 1.5; margin-bottom: 12px; }

.cta-cadastro {
  margin: 16px 16px 8px;
  padding: 16px 18px;
  border-radius: var(--r);
  background: var(--orange-l);
  border: 1.5px dashed var(--orange);
  transition: background var(--transition);
}
.cta-title { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
.cta-sub   { font-size: 12px; color: var(--txt2); margin-bottom: 12px; line-height: 1.5; }
