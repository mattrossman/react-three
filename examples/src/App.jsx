import * as React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Controls from './routes/Controls'
import XR from './routes/XR'

const routes = { Controls, XR }

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<div tw="bg-gray-900 text-white h-screen">
						<div tw="max-w-2xl mx-auto px-4 py-12">
							<h1 tw="text-xl text-gray-500 font-mono">
								@mattrossman/react-three
							</h1>
							<h1 tw="text-3xl font-bold underline my-6">Examples</h1>
							{Object.keys(routes).map((name, i) => (
								<Link
									key={i}
									to={'/' + name.toLowerCase()}
									tw="underline border bg-white bg-opacity-0 hover:bg-opacity-20 font-semibold mr-4 mb-4 px-2 py-1 rounded-lg"
								>
									{name}
								</Link>
							))}
						</div>
					</div>
				</Route>
				{Object.entries(routes).map(([name, Component], i) => (
					<Route key={i} path={'/' + name.toLowerCase()}>
						<Component />
					</Route>
				))}
			</Switch>
		</Router>
	)
}
