Cookbook

Avvio scaffold Javascript + React da Vite npm create vite@latest .

Installazione dipendenze npm i

Avvio del progetto in sviluppo npm run dev

Rimozione asset inutilizzati sotto public e src/assets. Ho tenuto solo favicon.svg.

Pulizia style.css. Ho eliminato tutto e sostituito con il solito reset.

Svuotato app.jsx. Rimosso import dei vari file e la creazione di state. Mantenuto solo un

di test.
Installazione react-router npm i react-router-dom

In App.jsx:

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pagina from "./pages/Pagina"
import Layout from "./layouts/Layout"

return (
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />} >
				<Route path="/" element={<Pagina />} ></Route>
				<Route path="/:parametro" element={<Pagina />} ></Route>
			</Route>
		</Routes>
	</BrowserRouter>)
Creazione componente di (/components/Header.jsx) che usa
Creazione di layout (/layouts/DefaultLayout.jsx) con e
Creazione componenti di pagina (/pages/*Page.jsx)





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
