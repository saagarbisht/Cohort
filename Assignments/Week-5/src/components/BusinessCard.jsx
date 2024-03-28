export function BusinessCard({ userData }) {
	return (
		<div className="cards-container">
			{userData.map(data => {
				return (
					<div key={ data.name + Math.random()} className="card">
						<div className="userDetails">
							<h2>{data.name}</h2>
							<p>{data.description}</p>
						</div>
						<div className="intrests">
							<h3>Intrests</h3>
							<ul>
								{data.intrest.map(intrest => {
									return <li key={intrest + Math.random()}>{intrest}</li>
								})}
							</ul>
						</div>
						<div className="links">
						<a href={data.linkedin}><button>LinkedIn</button></a>
						<a href={data.twitter}><button>Twitter</button></a>
						</div>
					</div>
				)
			})}
		</div>
	)
}
