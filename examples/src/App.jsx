import * as React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Controls from './routes/Controls'
import XR from './routes/XR'

const scenes = [Controls, XR]

export default function App() {
	window.scenes = scenes
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
							{scenes.map((Scene, i) => (
								<Link
									key={i}
									to={'/' + Scene.name.toLowerCase()}
									tw="underline border bg-white bg-opacity-0 hover:bg-opacity-20 font-semibold mr-4 mb-4 px-2 py-1 rounded-lg"
								>
									{Scene.name}
								</Link>
							))}
						</div>
					</div>
				</Route>
				<Route path="/controls">
					<Controls />
				</Route>
				<Route path="/xr">
					<XR />
				</Route>
			</Switch>
		</Router>
	)
}
