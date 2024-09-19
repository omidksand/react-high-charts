import MainView from '@/views/main'
import CharExample from './CharExample'
import SidebarView from './SidebarView'


export default function App() {
	return (
		<MainView>
			<header className='app-headerView'>
				Header Title
			</header>
			<div className='app-mainViewWrapper'>
				<main className='app-mainContentView'>
					<div className='flex flexCol w100'>
						<div style={{ padding: '1rem' }}>
							<CharExample />
						</div>
					</div>
				</main>
				<aside className='app-sidebarView'>
					<div style={{ padding: '1rem' }}>
					<SidebarView />

					</div>
				</aside>
			</div>
		</MainView>
	)
}
