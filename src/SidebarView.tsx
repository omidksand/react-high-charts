

const MenuItems = [
	"Option 1",
	"Option 2",
	"Option 3",
	"Option 4",
	"Option 5",
	"Option 6",
	"Option 7",
	"Option 8",
	"Option 9",
]


function MenuView({ label }: any) {
	return (
		<div className="csSidebarMenuItem">
			{label}
		</div>
	)
}

export default function SidebarView() {
	return (
		<>
			<h3>Toolbox</h3>
			<div className="csSidebarView">
				{MenuItems.map((label: string) => <MenuView label={label} />)}
			</div>

			<h3>Description</h3>
			<div>
				Info Goes Here
			</div>
		</>
	)
}
